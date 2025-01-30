import swal from "sweetalert2";
import "animate.css/animate.min.css";

type SwalIcon = "success" | "error" | "warning" | "info" | "question";

export const toast = (text: string, title: string, icon: SwalIcon) =>
  swal.fire({
    text: text || "",
    title: title || "",
    icon,
    confirmButtonColor: "#134991",
  });

export const toastConfirm = (text: string, title: string, icon: SwalIcon) =>
  swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "#134991",
    showCancelButton: true,
    confirmButtonText: "Yes",
  });
