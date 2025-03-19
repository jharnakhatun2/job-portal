import React, { useRef } from "react"
import SignIn from "./SignIn";

const Modal = () => {
    const modalRef = useRef(null);

    const closeModal = (e) => {
        if (modalRef.current && e.target === modalRef.current) {
            modalRef.current.close();
        }
    };
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="signInForm" ref={modalRef}  onClick={closeModal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                
                    <div className="modal-action">
                       <SignIn/>
                    </div>
                </div>
            </dialog>
        </>
    )
};

export default Modal;
