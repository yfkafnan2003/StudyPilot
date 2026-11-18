
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>📚</Text>

        <Text style={styles.title}>StudyPilot</Text>

        <Text style={styles.subtitle}>
          Your personal AI-powered study companion.
        </Text>

        <Text style={styles.description}>
          Organize your study materials, understand difficult topics,
          generate quizzes, and stay on top of your learning goals.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Main')}
      >
        <Text style={styles.buttonText}>Get Started →</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Learn smarter. Achieve more.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'space-between',
    padding: 28,
    paddingTop: 100,
    paddingBottom: 35,
  },
  content: {
    alignItems: 'center',
    marginTop: 70,
  },
  logo: {
    fontSize: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
    marginTop: 18,
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 18,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 13,
  },
});
