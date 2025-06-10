import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  showResult?: boolean;
  isReviewMode?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult = false,
  isReviewMode = false
}) => {
  const [selectedOption, setSelectedOption] = useState<number | undefined>(selectedAnswer);

  useEffect(() => {
    setSelectedOption(selectedAnswer);
  }, [selectedAnswer]);

  const handleOptionSelect = (index: number) => {
    if (!isReviewMode) {
      setSelectedOption(index);
      onAnswerSelect(index);
    }
  };

  const getOptionClassName = (index: number) => {
    const baseClasses = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 hover:shadow-md";
    
    if (!showResult) {
      if (selectedOption === index) {
        return `${baseClasses} border-blue-500 bg-blue-50 text-blue-900`;
      }
      return `${baseClasses} border-gray-200 hover:border-gray-300 bg-white`;
    }

    // Show results mode
    if (index === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-50 text-green-900`;
    }
    
    if (selectedOption === index && index !== question.correctAnswer) {
      return `${baseClasses} border-red-500 bg-red-50 text-red-900`;
    }
    
    return `${baseClasses} border-gray-200 bg-gray-50 text-gray-600`;
  };

  const getOptionIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === question.correctAnswer) {
      return <CheckCircle className="text-green-600\" size={20} />;
    }
    
    if (selectedOption === index && index !== question.correctAnswer) {
      return <XCircle className="text-red-600" size={20} />;
    }
    
    return null;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {question.category}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-900 leading-relaxed">
            {question.question}
          </h2>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            className={getOptionClassName(index)}
            disabled={isReviewMode}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-medium">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="font-medium">{option}</span>
              </div>
              {getOptionIcon(index)}
            </div>
          </button>
        ))}
      </div>

      {showResult && question.explanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertCircle className="text-blue-600 mt-0.5" size={16} />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Explanation</h4>
              <p className="text-blue-800 text-sm leading-relaxed">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;