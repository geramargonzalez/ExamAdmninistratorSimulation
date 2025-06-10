export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  answers: UserAnswer[];
  totalTime: number;
}

export interface QuizState {
  currentQuestion: number;
  answers: Map<number, number>;
  startTime: number;
  timeSpent: Map<number, number>;
  isComplete: boolean;
}