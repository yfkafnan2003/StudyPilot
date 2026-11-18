
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Good day, Student 👋</Text>
      <Text style={styles.title}>StudyPilot</Text>
      <Text style={styles.subtitle}>Your learning journey starts here.</Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Study hours</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Tasks done</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick access</Text>

      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>📚 My Subjects</Text>
        <Text style={styles.actionDescription}>
          Organize your subjects and study materials.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Subjects')}
        >
          <Text style={styles.buttonText}>View subjects</Text>
        </Pressable>
      </View>

      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>🤖 AI Assistant</Text>
        <Text style={styles.actionDescription}>
          Ask questions and get help with your studies.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Assistant')}
        >
          <Text style={styles.buttonText}>Open assistant</Text>
        </Pressable>
      </View>

      <View style={styles.actionCard}>
        <Text style={styles.actionTitle}>📅 Study Planner</Text>
        <Text style={styles.actionDescription}>
          Keep track of your upcoming study tasks.
        </Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Planner')}
        >
          <Text style={styles.buttonText}>Open planner</Text>
        </Pressable>
      </View>
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
    paddingBottom: 35,
  },
  greeting: {
    fontSize: 15,
    color: '#64748B',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 25,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 2,
  },
  statNumber: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  statLabel: {
    color: '#64748B',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 15,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    padding: 19,
    borderRadius: 15,
    marginBottom: 14,
    elevation: 2,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  actionDescription: {
    color: '#64748B',
    marginTop: 8,
    marginBottom: 15,
    lineHeight: 21,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 9,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
