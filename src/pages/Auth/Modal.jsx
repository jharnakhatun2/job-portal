import React from "react"
import AnimatedModal from "../../util/Modal/AnimatedModal";
import SignIn from "./SignIn";

const Modal = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <>
            <AnimatedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <SignIn setIsModalOpen={setIsModalOpen}/>
            </AnimatedModal>
        </>
    )
};

export default Modal;
