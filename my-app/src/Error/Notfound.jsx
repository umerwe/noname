import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#F9FAFB',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: '#EF4444',
                marginBottom: '20px',
                lineHeight: '1.2'
            }}>
                404 | Error Not Found
            </h1>
            <button 
                onClick={() => navigate('/')} 
                style={{
                    padding: '12px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    backgroundColor: '#1E3A8A',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease, transform 0.1s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1E40AF'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#1E3A8A'}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            >
                Go To Home Page
            </button>
        </div>
    );
};

export default NotFound;