import React, { useState, useRef, useEffect } from "react";
import { db } from "../Config/firebase";
import { collection, addDoc } from "firebase/firestore";
import './BlogForm.css';
import { FaUpload, FaTimes } from "react-icons/fa";
import axios from "axios";

const CustomMessage = ({ type, content, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`custom-message ${type}`}>
      {content}
    </div>
  );
};

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // For preview
  const [originalImageUrl, setOriginalImageUrl] = useState(""); // Original quality URL for storage
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([]);
  const fileInputRef = useRef(null);

  // Cloudinary configuration
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

  const showMessage = (type, content) => {
    const id = Date.now();
    setMessages((prev) => [...prev, { id, type, content }]);
  };

  const hideMessage = (id) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        if (!file.type.startsWith("image/")) {
          showMessage("error", "Please select a valid image file (JPEG, PNG, etc.).");
          resetImageState();
          return;
        }

        if (file.size > 20 * 1024 * 1024) { // Increased to 20MB limit for high quality
          showMessage("error", "Image is too large. Please select an image under 20MB.");
          return;
        }

        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);

        // Upload to Cloudinary with original quality (no compression)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("quality", "100"); // Maximum quality
        formData.append("flags", "lossless"); // For PNGs

        const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          // Store the original URL without any transformations
          setOriginalImageUrl(response.data.secure_url);
        } else {
          throw new Error("Failed to upload image");
        }
      } catch (error) {
        console.error("Image upload error:", error);
        showMessage("error", "Image upload failed: " + error.message);
        resetImageState();
      }
    }
  };

  const resetImageState = () => {
    setImageFile(null);
    setImageUrl("");
    setOriginalImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    resetImageState();
    showMessage("info", "Image removed.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!title || !description) {
      showMessage("error", "Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (!originalImageUrl) {
      showMessage("error", "Please upload an image before publishing.");
      setIsSubmitting(false);
      return;
    }

    try {
      const blogData = {
        title,
        description,
        imageUrl: originalImageUrl, // Storing only the original quality URL
        createdAt: new Date().toISOString(),
      };

      // Save blog data to Firestore
      await addDoc(collection(db, "blogs"), blogData);

      // Reset form
      setTitle("");
      setDescription("");
      resetImageState();
      
      showMessage("success", "Blog uploaded successfully");
    } catch (err) {
      console.error("Firestore error:", err);
      showMessage("error", "Failed to publish blog: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="blog-form-container max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="message-container">
        {messages.map((msg) => (
          <CustomMessage
            key={msg.id}
            type={msg.type}
            content={msg.content}
            onClose={() => hideMessage(msg.id)}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create a New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
            placeholder="Enter your blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
            placeholder="Write your blog content here..."
            required
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image (High Quality)
          </label>

          <div className="image-upload-container">
            <div
              className="image-preview-wrapper"
              onClick={handleImageClick}
            >
              {imageUrl ? (
                <>
                  <img src={imageUrl} alt="Preview" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="remove-image-btn"
                  >
                    <FaTimes size={14} />
                  </button>
                </>
              ) : (
                <div className="image-placeholder">
                  <FaUpload size={24} />
                  <p>Click to upload</p>
                  <p className="text-xs">JPEG, PNG (Max 20MB, original quality)</p>
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />

            {imageFile && (
              <p className="image-info">
                Selected: {imageFile.name} ({(imageFile.size / 1024 / 1024).toFixed(2)}MB)
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting || !originalImageUrl}
            className="submit-btn"
          >
            {isSubmitting ? "Publishing..." : "Publish Blog"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;