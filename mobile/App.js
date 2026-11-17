
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Reusable component
function WelcomeMessage({ studentName }) {
  return (
    <Text style={styles.welcome}>
      Welcome to StudyPilot, {studentName}!
    </Text>
  );
}

export default function App() {
  // State: stores the number of completed study sessions
  const [sessions, setSessions] = useState(0);

  return (
    <View style={styles.container}>
      {/* JSX: describes the UI */}
      <Text style={styles.title}>StudyPilot AI</Text>

      {/* Props: passing studentName to another component */}
      <WelcomeMessage studentName="Student" />

      <Text style={styles.description}>
        Your personal AI study assistant.
      </Text>

      {/* State: displays the current session count */}
      <Text style={styles.counter}>
        Completed sessions: {sessions}
      </Text>

      {/* Updates state when pressed */}
      <Button
        title="Complete a Study Session"
        onPress={() => setSessions(sessions + 1)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 30,
  },
  counter: {
    fontSize: 18,
    marginBottom: 15,
  },
});
