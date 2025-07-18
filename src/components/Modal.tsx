import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
    const [visible, setVisible] = useState(false);


    // Handle animation enter/exit
    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            // Delay closing to allow fade-out
            const timeout = setTimeout(() => setVisible(false), 300);
            document.body.style.overflow = "";
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!isOpen && !visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white/60 backdrop-blur-sm px-4 py-10">
            <div
                className={`relative bg-white rounded-xl shadow-lg w-full max-w-2xl p-8 overflow-y-auto max-h-[90vh]
        transition-all duration-300 ${isOpen ? "fade-in" : "fade-out"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <X className="w-6 h-6" />
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
