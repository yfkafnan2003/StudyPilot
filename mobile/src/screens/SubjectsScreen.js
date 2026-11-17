
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SubjectsScreen() {
  const subjects = [
    { id: 1, name: 'Computer Science', description: 'Programming and software development', icon: '💻' },
    { id: 2, name: 'Mathematics', description: 'Mathematical concepts and problem solving', icon: '📐' },
    { id: 3, name: 'Networking', description: 'Computer networks and communication', icon: '🌐' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My Subjects</Text>
      <Text style={styles.subtitle}>
        All your learning materials, organized in one place.
      </Text>

      {subjects.map((subject) => (
        <View key={subject.id} style={styles.card}>
          <Text style={styles.icon}>{subject.icon}</Text>
          <Text style={styles.name}>{subject.name}</Text>
          <Text style={styles.description}>{subject.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  content: {
    padding: 22,
    paddingTop: 55,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  icon: {
    fontSize: 28,
    marginBottom: 12,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 8,
  },
});
