interface CardProps {
    title: string;
    explanation: string;
    onNext: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ title, explanation, onNext }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
        <h1 className="text-lg font-bold text-purple-600">{title}</h1>
        <p className="text-gray-600 mt-2">{explanation}</p>
        <button
          className="mt-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Card;
  