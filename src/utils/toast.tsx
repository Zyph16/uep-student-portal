import swal from "sweetalert2"

import "animate.css/animate.min.css"

export const toast = (text: string, title: string, icon: any) =>
  swal.fire({
    text: text ? text : "",
    title: title ? title : "",
    icon,
    confirmButtonColor: "#134991",
  })

export const toastConfirm = (text: string, title: string, icon: any) =>
  swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "#134991",
    showCancelButton: true,
    confirmButtonText: "Yes",
    // showClass: {
    //   popup: "animate__animated animate__fadeInDown",
    // },
    // hideClass: {
    //   popup: "animate__animated animate__fadeOutUp",
    // },
  })
