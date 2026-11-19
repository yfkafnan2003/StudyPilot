
import { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

const flashcards = [
  {
    question: 'What is an API?',
    answer: 'An API allows different software applications to communicate with each other.',
  },
  {
    question: 'What is a Database?',
    answer: 'A database is an organized collection of data that can be stored and accessed electronically.',
  },
  {
    question: 'What is Python?',
    answer: 'Python is a high-level, interpreted programming language.',
  },
  {
    question: 'What is Git?',
    answer: 'Git is a version control system used to track changes in source code.',
  },
];

export default function FlashcardsScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setCurrentIndex((previous) =>
      (previous + 1) % flashcards.length
    );
    setShowAnswer(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((previous) =>
      (previous - 1 + flashcards.length) % flashcards.length
    );
    setShowAnswer(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>
      <Text style={styles.subtitle}>
        Learn through active recall.
      </Text>

      <Text style={styles.counter}>
        Card {currentIndex + 1} of {flashcards.length}
      </Text>

      <Pressable
        style={styles.card}
        onPress={() => setShowAnswer((previous) => !previous)}
      >
        <Text style={styles.cardLabel}>
          {showAnswer ? 'ANSWER' : 'QUESTION'}
        </Text>

        <Text style={styles.cardContent}>
          {showAnswer ? currentCard.answer : currentCard.question}
        </Text>

        <Text style={styles.flipHint}>
          Tap to {showAnswer ? 'see question' : 'reveal answer'}
        </Text>
      </Pressable>

      <View style={styles.navigation}>
        <Pressable
          style={styles.navigationButton}
          onPress={handlePrevious}
        >
          <Text style={styles.navigationText}>← Previous</Text>
        </Pressable>

        <Pressable
          style={styles.navigationButton}
          onPress={handleNext}
        >
          <Text style={styles.navigationText}>Next →</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 35,
  },
  counter: {
    textAlign: 'center',
    color: '#64748B',
    fontWeight: '600',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    minHeight: 280,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardLabel: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 25,
  },
  cardContent: {
    color: '#0F172A',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 30,
  },
  flipHint: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 30,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    gap: 12,
  },
  navigationButton: {
    flex: 1,
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  navigationText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
