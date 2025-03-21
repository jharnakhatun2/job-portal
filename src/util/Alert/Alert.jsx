import React from "react"
import Swal from "sweetalert2";
import 'animate.css';

const Alert = (title, icon, text = "") => {
  return Swal.fire({
        title,
        text,
        icon,
        showClass: {
          popup: `animate__animated animate__fadeInUp animate__faster`
        },
        hideClass: {
          popup: `animate__animated animate__fadeOutDown animate__faster`
        }
      })
};

export default Alert;
