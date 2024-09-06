import React, { useState, useEffect } from 'react';
import { FaPlane } from 'react-icons/fa'; // Import the plane icon
import './ToTheTop.css';

const ToTheTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
  
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
  
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
  
    return (
        <div className="back-to-top-button">
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-to-top">
                    <FaPlane className="plane-icon" /> {/* Add a class for custom styling */}
                </div>
            )}
        </div>
    );
};

export default ToTheTop;