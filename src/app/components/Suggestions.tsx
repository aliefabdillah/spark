interface SuggestionsProps {
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
  }
  
  const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
    return (
      <ul className="mt-6 space-y-2 w-11/12 max-w-md">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 px-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => onSuggestionClick(suggestion)}
          >
            <span className="text-grayWordCust">{suggestion}</span>
            <span className="text-grayWordCust">→</span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Suggestions;
  