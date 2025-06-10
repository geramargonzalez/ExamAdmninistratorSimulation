import React from 'react';
import { ChevronLeft, ChevronRight, Flag, RotateCcw } from 'lucide-react';

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onRestart?: () => void;
  canGoNext: boolean;
  isLastQuestion: boolean;
  isComplete?: boolean;
  hasAnsweredCurrent: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
  onRestart,
  canGoNext,
  isLastQuestion,
  isComplete = false,
  hasAnsweredCurrent
}) => {
  if (isComplete && onRestart) {
    return (
      <div className="flex justify-center">
        <button
          onClick={onRestart}
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          <RotateCcw size={20} />
          <span>Take Quiz Again</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 1}
        className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ChevronLeft size={20} />
        <span>Previous</span>
      </button>

      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((questionNum) => (
            <div
              key={questionNum}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors duration-200 ${
                questionNum === currentQuestion
                  ? 'bg-blue-600 text-white'
                  : questionNum < currentQuestion
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {questionNum}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {isLastQuestion ? (
          <button
            onClick={onSubmit}
            disabled={!hasAnsweredCurrent}
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Flag size={20} />
            <span>Submit Quiz</span>
          </button>
        ) : (
          <button
            onClick={onNext}
            disabled={!canGoNext}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizNavigation;