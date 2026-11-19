
import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

const questions = [
  {
    question: 'Which language is primarily used for Android development?',
    options: ['Python', 'Kotlin', 'Ruby', 'PHP'],
    answer: 'Kotlin',
  },
  {
    question: 'What does CPU stand for?',
    options: [
      'Central Processing Unit',
      'Computer Personal Unit',
      'Central Program Utility',
      'Control Processing User',
    ],
    answer: 'Central Processing Unit',
  },
  {
    question: 'Which data structure follows FIFO?',
    options: ['Stack', 'Tree', 'Queue', 'Graph'],
    answer: 'Queue',
  },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === question.answer) {
      setScore((previous) => previous + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const finalScore =
      score + (selectedAnswer === question.answer ? 1 : 0);

    return (
      <View style={styles.resultContainer}>
        <Text style={styles.resultEmoji}>🎉</Text>
        <Text style={styles.resultTitle}>Quiz Completed!</Text>
        <Text style={styles.scoreText}>
          Your Score: {finalScore} / {questions.length}
        </Text>
        <Text style={styles.resultSubtitle}>
          {finalScore === questions.length
            ? 'Excellent work!'
            : 'Keep practicing. You can do better!'}
        </Text>

        <Pressable style={styles.restartButton} onPress={handleRestart}>
          <Text style={styles.restartText}>Try Again</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Practice Quiz</Text>
      <Text style={styles.subtitle}>
        Test your knowledge and improve your skills.
      </Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Question {currentQuestion + 1} of {questions.length}
        </Text>
        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.questionCard}>
        <Text style={styles.questionLabel}>QUESTION</Text>
        <Text style={styles.questionText}>{question.question}</Text>

        {question.options.map((option, index) => {
          const selected = selectedAnswer === option;

          return (
            <Pressable
              key={option}
              style={[
                styles.option,
                selected && styles.selectedOption,
              ]}
              onPress={() => setSelectedAnswer(option)}
            >
              <Text style={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </Text>
              <Text
                style={[
                  styles.optionText,
                  selected && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable
        style={[
          styles.nextButton,
          !selectedAnswer && styles.disabledButton,
        ]}
        onPress={handleNext}
        disabled={!selectedAnswer}
      >
        <Text style={styles.nextButtonText}>
          {currentQuestion === questions.length - 1
            ? 'Finish Quiz'
            : 'Next Question'}
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 25,
  },
  progressContainer: {
    marginBottom: 22,
  },
  progressText: {
    color: '#475569',
    fontWeight: '600',
    marginBottom: 9,
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
  },
  progressFill: {
    height: 8,
    backgroundColor: '#2563EB',
    borderRadius: 10,
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
  },
  questionLabel: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  questionText: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 26,
    marginBottom: 22,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: '#DBEAFE',
    borderColor: '#2563EB',
  },
  optionLetter: {
    fontWeight: 'bold',
    color: '#2563EB',
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    color: '#334155',
    fontSize: 14,
  },
  selectedOptionText: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 22,
  },
  disabledButton: {
    backgroundColor: '#94A3B8',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F8FAFC',
  },
  resultEmoji: {
    fontSize: 65,
    marginBottom: 15,
  },
  resultTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  scoreText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 20,
  },
  resultSubtitle: {
    color: '#64748B',
    marginTop: 12,
    marginBottom: 25,
  },
  restartButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 12,
  },
  restartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
