const OCRComponent = ({ onText, onImage }) => {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    onText(null);
    if (file) {
      const imageData = await readFileAsDataURL(file);
      onImage(imageData);
    } else {
      onImage(null);
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="text-center border-4 border-indigo-700 p-10 rounded h-44">
      <div>
        <h1 className="font-bold my-5">OCR con Next.js</h1>
        <hr />
        <div className="mt-4">
          <input
            className="mt-2"
            type="file"
            accept=".png"
            onChange={handleImageUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default OCRComponent;
