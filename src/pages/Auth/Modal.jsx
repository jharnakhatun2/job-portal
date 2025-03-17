import React from "react"
import SignIn from "./SignIn";

const Modal = () => {
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="signInForm" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h2 className="text-sm lg:text-lg font-bold text-center uppercase">User Login</h2>
                    <div className="modal-action">
                       <SignIn/>
                    </div>
                </div>
            </dialog>
        </>
    )
};

export default Modal;
