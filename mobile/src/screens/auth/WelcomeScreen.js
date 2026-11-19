
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>📚</Text>
      </View>

      <Text style={styles.title}>StudyPilot</Text>

      <Text style={styles.heading}>
        Your personal AI study companion
      </Text>

      <Text style={styles.description}>
        Organize your study materials, understand difficult topics,
        create quizzes, and make learning easier with AI.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>

      <Text style={styles.footer}>
        Learn smarter. Achieve more.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 55,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 35,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 35,
    color: '#94A3B8',
    fontSize: 13,
  },
});
