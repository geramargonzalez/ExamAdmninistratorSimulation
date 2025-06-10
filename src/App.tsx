import React, { useState } from 'react';
import { questions } from './data/questions';
import { useQuiz } from './hooks/useQuiz';
import { QuizResult } from './types/quiz';
import QuizHeader from './components/QuizHeader';
import QuestionCard from './components/QuestionCard';
import QuizNavigation from './components/QuizNavigation';
import QuizResults from './components/QuizResults';
import ReviewMode from './components/ReviewMode';

type AppMode = 'quiz' | 'results' | 'review';

function App() {
  const [mode, setMode] = useState<AppMode>('quiz');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  
  const {
    quizState,
    timeElapsed,
    selectAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    submitQuiz,
    restartQuiz,
    getCurrentQuestion,
    hasAnsweredCurrent,
    getSelectedAnswer
  } = useQuiz(questions);

  const handleSubmitQuiz = () => {
    const result = submitQuiz();
    setQuizResult(result);
    setMode('results');
  };

  const handleRestartQuiz = () => {
    restartQuiz();
    setQuizResult(null);
    setMode('quiz');
  };

  const handleReviewAnswers = () => {
    setMode('review');
  };

  const handleBackToResults = () => {
    setMode('results');
  };

  if (mode === 'results' && quizResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <QuizHeader
          currentQuestion={questions.length}
          totalQuestions={questions.length}
          timeElapsed={quizResult.totalTime}
          score={quizResult.percentage}
          isComplete={true}
        />
        <QuizResults
          result={quizResult}
          questions={questions}
          onRestart={handleRestartQuiz}
          onReviewAnswers={handleReviewAnswers}
        />
      </div>
    );
  }

  if (mode === 'review' && quizResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <QuizHeader
          currentQuestion={questions.length}
          totalQuestions={questions.length}
          timeElapsed={quizResult.totalTime}
          score={quizResult.percentage}
          isComplete={true}
        />
        <ReviewMode
          questions={questions}
          result={quizResult}
          onBackToResults={handleBackToResults}
        />
      </div>
    );
  }

  const currentQuestion = getCurrentQuestion();
  const isLastQuestion = quizState.currentQuestion === questions.length;
  const canGoNext = hasAnsweredCurrent();

  return (
    <div className="min-h-screen bg-gray-50">
      <QuizHeader
        currentQuestion={quizState.currentQuestion}
        totalQuestions={questions.length}
        timeElapsed={timeElapsed}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={getSelectedAnswer()}
            onAnswerSelect={selectAnswer}
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <QuizNavigation
            currentQuestion={quizState.currentQuestion}
            totalQuestions={questions.length}
            onPrevious={goToPreviousQuestion}
            onNext={goToNextQuestion}
            onSubmit={handleSubmitQuiz}
            canGoNext={canGoNext}
            isLastQuestion={isLastQuestion}
            hasAnsweredCurrent={hasAnsweredCurrent()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;