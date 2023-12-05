import Tesseract from "tesseract.js";

export const performOCR = async (imageData) => {
  console.log("OCR Toda el area")
  const result = await Tesseract.recognize(
    imageData,
    "spa", // idioma del reconocimiento
    //{ logger: (info) => console.log(info) } // opcional: configuración del logger
  );

  return result.data.text;
};

export const performOCRInRegion = async (imageData, rect) => {
  console.log("OCR por Región")
  const result = await Tesseract.recognize(imageData, "spa", {
   // logger: (info) => console.log(info),
    rect: rect, // Define la región rectangular de interés
  });

  return result.data.text;
};
