import { useState, useEffect, useCallback } from 'react';
import { QuizState, QuizResult, UserAnswer, Question } from '../types/quiz';

export const useQuiz = (questions: Question[]) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 1,
    answers: new Map(),
    startTime: Date.now(),
    timeSpent: new Map(),
    isComplete: false
  });

  const [timeElapsed, setTimeElapsed] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  // Update elapsed time
  useEffect(() => {
    if (!quizState.isComplete) {
      const interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - quizState.startTime) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [quizState.startTime, quizState.isComplete]);

  const selectAnswer = useCallback((answerIndex: number) => {
    const currentTime = Date.now();
    const timeForThisQuestion = Math.floor((currentTime - questionStartTime) / 1000);
    
    setQuizState(prev => {
      const newAnswers = new Map(prev.answers);
      const newTimeSpent = new Map(prev.timeSpent);
      
      newAnswers.set(prev.currentQuestion, answerIndex);
      newTimeSpent.set(prev.currentQuestion, timeForThisQuestion);
      
      return {
        ...prev,
        answers: newAnswers,
        timeSpent: newTimeSpent
      };
    });
  }, [questionStartTime]);

  const goToNextQuestion = useCallback(() => {
    if (quizState.currentQuestion < questions.length) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
      setQuestionStartTime(Date.now());
    }
  }, [quizState.currentQuestion, questions.length]);

  const goToPreviousQuestion = useCallback(() => {
    if (quizState.currentQuestion > 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
      setQuestionStartTime(Date.now());
    }
  }, [quizState.currentQuestion]);

  const submitQuiz = useCallback((): QuizResult => {
    const answers: UserAnswer[] = [];
    let correctCount = 0;

    questions.forEach((question, index) => {
      const questionNumber = index + 1;
      const selectedAnswer = quizState.answers.get(questionNumber) ?? -1;
      const isCorrect = selectedAnswer === question.correctAnswer;
      const timeSpent = quizState.timeSpent.get(questionNumber) ?? 0;

      if (isCorrect) correctCount++;

      answers.push({
        questionId: question.id,
        selectedAnswer,
        isCorrect,
        timeSpent
      });
    });

    const result: QuizResult = {
      score: correctCount,
      totalQuestions: questions.length,
      percentage: Math.round((correctCount / questions.length) * 100),
      answers,
      totalTime: timeElapsed
    };

    setQuizState(prev => ({ ...prev, isComplete: true }));
    return result;
  }, [questions, quizState.answers, quizState.timeSpent, timeElapsed]);

  const restartQuiz = useCallback(() => {
    setQuizState({
      currentQuestion: 1,
      answers: new Map(),
      startTime: Date.now(),
      timeSpent: new Map(),
      isComplete: false
    });
    setTimeElapsed(0);
    setQuestionStartTime(Date.now());
  }, []);

  const getCurrentQuestion = () => questions[quizState.currentQuestion - 1];
  const hasAnsweredCurrent = () => quizState.answers.has(quizState.currentQuestion);
  const getSelectedAnswer = () => quizState.answers.get(quizState.currentQuestion);

  return {
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
  };
};