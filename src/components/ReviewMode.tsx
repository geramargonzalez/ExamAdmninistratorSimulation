import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Question, QuizResult } from '../types/quiz';
import QuestionCard from './QuestionCard';

interface ReviewModeProps {
  questions: Question[];
  result: QuizResult;
  onBackToResults: () => void;
}

const ReviewMode: React.FC<ReviewModeProps> = ({
  questions,
  result,
  onBackToResults
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const currentQuestionData = questions[currentQuestion];
  const userAnswer = result.answers.find(a => a.questionId === currentQuestionData.id);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const getQuestionStatus = (index: number) => {
    const question = questions[index];
    const answer = result.answers.find(a => a.questionId === question.id);
    return answer?.isCorrect ? 'correct' : 'incorrect';
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Review Your Answers</h2>
          <button
            onClick={onBackToResults}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <Home size={20} />
            <span>Back to Results</span>
          </button>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        
        {/* Question Navigator */}
        <div className="flex flex-wrap gap-2">
          {questions.map((_, index) => {
            const status = getQuestionStatus(index);
            return (
              <button
                key={index}
                onClick={() => goToQuestion(index)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : status === 'correct'
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-red-100 text-red-800 hover:bg-red-200'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="mb-6">
        <QuestionCard
          question={currentQuestionData}
          selectedAnswer={userAnswer?.selectedAnswer}
          onAnswerSelect={() => {}} // No-op in review mode
          showResult={true}
          isReviewMode={true}
        />
      </div>

      {/* Navigation */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="text-center">
            {userAnswer?.isCorrect ? (
              <div className="text-green-600 font-medium">✓ Correct Answer</div>
            ) : (
              <div className="text-red-600 font-medium">✗ Incorrect Answer</div>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewMode;