import React from 'react';
import { Trophy, Clock, Target, BookOpen, TrendingUp, Award } from 'lucide-react';
import { QuizResult, Question } from '../types/quiz';

interface QuizResultsProps {
  result: QuizResult;
  questions: Question[];
  onRestart: () => void;
  onReviewAnswers: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  result,
  questions,
  onRestart,
  onReviewAnswers
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 80) return { level: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 70) return { level: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const performance = getPerformanceLevel(result.percentage);

  const categoryStats = questions.reduce((acc, question) => {
    const userAnswer = result.answers.find(a => a.questionId === question.id);
    if (!acc[question.category]) {
      acc[question.category] = { correct: 0, total: 0 };
    }
    acc[question.category].total++;
    if (userAnswer?.isCorrect) {
      acc[question.category].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  const difficultyStats = questions.reduce((acc, question) => {
    const userAnswer = result.answers.find(a => a.questionId === question.id);
    if (!acc[question.difficulty]) {
      acc[question.difficulty] = { correct: 0, total: 0 };
    }
    acc[question.difficulty].total++;
    if (userAnswer?.isCorrect) {
      acc[question.difficulty].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Overall Results */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${performance.bg} mb-4`}>
            <Trophy className={performance.color} size={32} />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
          <p className={`text-lg font-medium ${performance.color}`}>{performance.level}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Target className="text-blue-600 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-blue-900">{result.percentage}%</div>
            <div className="text-sm text-blue-700">Score</div>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <Award className="text-green-600 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-green-900">{result.score}</div>
            <div className="text-sm text-green-700">Correct</div>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <BookOpen className="text-purple-600 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-purple-900">{result.totalQuestions}</div>
            <div className="text-sm text-purple-700">Total Questions</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Clock className="text-orange-600 mx-auto mb-2" size={24} />
            <div className="text-2xl font-bold text-orange-900">{formatTime(result.totalTime)}</div>
            <div className="text-sm text-orange-700">Time Taken</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onReviewAnswers}
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            <BookOpen size={20} />
            <span>Review Answers</span>
          </button>
          
          <button
            onClick={onRestart}
            className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            <TrendingUp size={20} />
            <span>Retake Quiz</span>
          </button>
        </div>
      </div>

      {/* Category Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Performance by Category</h3>
          <div className="space-y-4">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const percentage = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{category}</span>
                    <span className="text-gray-600">{stats.correct}/{stats.total} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Performance by Difficulty</h3>
          <div className="space-y-4">
            {Object.entries(difficultyStats).map(([difficulty, stats]) => {
              const percentage = Math.round((stats.correct / stats.total) * 100);
              const difficultyColor = difficulty === 'Easy' ? 'bg-green-600' : difficulty === 'Medium' ? 'bg-yellow-600' : 'bg-red-600';
              
              return (
                <div key={difficulty} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{difficulty}</span>
                    <span className="text-gray-600">{stats.correct}/{stats.total} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${difficultyColor} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;