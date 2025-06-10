import React from 'react';
import { Clock, BookOpen, Target } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeElapsed: number;
  score?: number;
  isComplete?: boolean;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentQuestion,
  totalQuestions,
  timeElapsed,
  score,
  isComplete = false
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="text-blue-600" size={24} />
            <h1 className="text-xl font-bold text-gray-900">
              NetSuite Administrator Practice Exam
            </h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock size={20} />
              <span className="font-medium">{formatTime(timeElapsed)}</span>
            </div>
            
            {isComplete && score !== undefined && (
              <div className="flex items-center space-x-2 text-green-600">
                <Target size={20} />
                <span className="font-medium">{score}%</span>
              </div>
            )}
          </div>
        </div>

        {!isComplete && (
          <>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion} of {totalQuestions}</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizHeader;