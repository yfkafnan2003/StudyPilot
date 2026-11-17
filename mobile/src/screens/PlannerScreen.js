
import { View, Text, StyleSheet } from 'react-native';

export default function PlannerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📅</Text>
      <Text style={styles.title}>Study Planner</Text>
      <Text style={styles.description}>
        Plan your study sessions, manage tasks, and stay consistent with your learning goals.
      </Text>
      <View style={styles.comingSoon}>
        <Text style={styles.comingSoonText}>Planning features coming soon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  icon: {
    fontSize: 55,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 12,
  },
  comingSoon: {
    backgroundColor: '#DBEAFE',
    padding: 13,
    borderRadius: 10,
    marginTop: 25,
  },
  comingSoonText: {
    color: '#2563EB',
    fontWeight: '600',
  },
});
