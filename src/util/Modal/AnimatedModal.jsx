import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedModal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);

    // Close modal on backdrop click
    const handleBackdropClick = (e) => {
        if (modalRef.current && e.target === modalRef.current) {
            onClose();
        }
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    ref={modalRef}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-20"
                >
                    {/* Modal Box with animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full my-3"
                    >
                        {/* Modal Content */}
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedModal;
