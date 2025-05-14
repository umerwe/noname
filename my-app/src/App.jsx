import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Blogs from "./Pages/Blogs/Blogs"
import Services from "./Pages/Services/Services"
import NotFound from './Error/Notfound'
import BlogForm from "./PrivateRoute/BlogForm"
import BlogDetail from "./BlogDetails/Blogdetails.jsx"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
          <Route path='services' element={<Services />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/blink/consultants/exe/blog/create' element={<BlogForm />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </>
  )
}

export default App
