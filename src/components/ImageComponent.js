import { performOCR, performOCRInRegion } from "@/util/ocr";

const ImageComponent = ({ onText, image, onLoading }) => {
  const handleAllOCR = async () => {
    onText(null);
    if (image) {
      try {
        onLoading(true);
        const text = await performOCR(image);
        console.log("AREA COMPLETA:", text);
        onText(text);
      } catch (error) {
        console.error("Error en OCR:", error);
      } finally {
        onLoading(false);
      }
    }
  };

  const handleRegionOCR = async () => {
    onText(null);
    if (image) {
      try {
        onLoading(true);
        const rect = { left: 0, top: 0, width: 0, height: 0 }; // Define la región de interés
        const text = await performOCRInRegion(image, rect);
        console.log("POR REGION -----------------------------");
        console.log("Texto Generado:", text);
        console.log("AREA: " + JSON.stringify(rect, 2));

        onText(text);
      } catch (error) {
        console.error("Error en OCR:", error);
      } finally {
        onLoading(false);
      }
    }
  };

  return (
    <div className="text-center border-4 border-indigo-700 p-10 rounded h-max">
      {image && (
        <div>
          <div className="mt-4 max-w-full max-h-96 h-64 flex justify-center items-center">
            <img
              src={image}
              alt="Imagen cargada"
              className="mt-4 max-w-full max-h-96 h-64 flex justify-center items-center"
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleAllOCR}
              className="bg-blue-500 hover:bg-blue-700  rounded my-2 mx-4 w-48"
            >
              Toda la imagen
            </button>
            <button
              onClick={handleRegionOCR}
              className="bg-blue-500 hover:bg-blue-700  rounded my-2 w-48"
            >
              Por Región
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
