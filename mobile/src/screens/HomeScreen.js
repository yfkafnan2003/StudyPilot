
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, Student 👋</Text>

      <Text style={styles.title}>StudyPilot AI</Text>

      <Text style={styles.description}>
        Your personal AI-powered study assistant.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ready to study?</Text>
        <Text style={styles.cardDescription}>
          Organize your subjects, study materials, and learning progress.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Subjects')}
        >
          <Text style={styles.buttonText}>Explore My Subjects</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>Learn smarter with StudyPilot.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 24,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1E293B',
  },
  cardDescription: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 23,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    textAlign: 'center',
    marginTop: 32,
    color: '#94A3B8',
  },
});
