// TextComponent.js
const TextComponent = ({ text }) => {
    return (
      <div className="max-w-3xl p-6 rounded-lg border-4 border-blue-700 w-full h-full">
        <h5 className="mb-2 text-2xl font-bold text-white">Resultado</h5>
        <hr className="h-4" />
        <div className="text-white overflow-auto  h-[525px]">{text}</div>
      </div>
    );
  };
  
  export default TextComponent;
  