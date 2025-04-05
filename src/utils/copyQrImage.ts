import { MutableRefObject } from "react";
import toast from "react-hot-toast";

export const copyQRToClipboard = async () => {
  const imgElement = document.getElementById("qr-image") as HTMLImageElement; // 🖼 Obtiene el QR de next/image
  if (!imgElement) return;

  try {
    // Crear un canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Crear imagen desde next/image
    const img = new Image();
    img.crossOrigin = "anonymous"; // Evita problemas con CORS
    img.src = imgElement.src; // 📌 Asigna la imagen del QR

    img.onload = async () => {
      // Ajustar el tamaño del canvas
      canvas.width = img.width;
      canvas.height = img.height;

      // Dibujar la imagen en el canvas
      ctx.drawImage(img, 0, 0);

      // Convertir a Blob y copiar al portapapeles
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const clipboardItem = new ClipboardItem({ "image/png": blob });

        await navigator.clipboard.write([clipboardItem]);
        toast.success("QR copied")
      }, "image/png");
    };
  } catch (error) {
    console.error("Error al copiar el QR:", error);
  }
};