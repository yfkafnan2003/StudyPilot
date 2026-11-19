
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';


const quickActions = [
  {
    title: 'My Subjects',
    subtitle: 'Organize your subjects',
    icon: '📚',
    screen: 'Subjects',
  },
  {
    title: 'AI Assistant',
    subtitle: 'Ask questions and learn',
    icon: '🤖',
    screen: 'Assistant',
  },
  {
    title: 'Study Planner',
    subtitle: 'Manage your study schedule',
    icon: '📅',
    screen: 'Planner',
  },
  {
    title: 'Practice Quiz',
    subtitle: 'Test your knowledge',
    icon: '📝',
    screen: 'Quiz',
  },
  {
    title: 'Flashcards',
    subtitle: 'Learn through active recall',
    icon: '🗂️',
    screen: 'Flashcards',
  },
];


export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Student 👋</Text>
          <Text style={styles.heading}>Your Dashboard</Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>
      </View>

      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Ready to learn something new?</Text>
        <Text style={styles.welcomeDescription}>
          Stay organized, study smarter, and reach your learning goals with StudyPilot.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Your Overview</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📚</Text>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Subjects</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>📄</Text>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Materials</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statIcon}>✅</Text>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Tasks Done</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>

      {quickActions.map((action) => (
        <Pressable
          key={action.title}
          style={styles.actionCard}
          onPress={() => navigation.navigate(action.screen)}
        >
          <Text style={styles.actionIcon}>{action.icon}</Text>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>Today's Study Plan</Text>

      <View style={styles.emptyCard}>
        <Text style={styles.emptyIcon}>🗓️</Text>
        <Text style={styles.emptyTitle}>No study tasks yet</Text>
        <Text style={styles.emptyDescription}>
          Your planned study sessions will appear here.
        </Text>
        <Pressable
          style={styles.planButton}
          onPress={() => navigation.navigate('Planner')}
        >
          <Text style={styles.planButtonText}>Open Planner</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>Keep learning. Keep growing. 🚀</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 55,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 5,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  welcomeCard: {
    backgroundColor: '#2563EB',
    borderRadius: 18,
    padding: 22,
    marginBottom: 28,
  },
  welcomeTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  welcomeDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: '#DBEAFE',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 28,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statIcon: {
    fontSize: 23,
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 4,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  actionIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  arrow: {
    fontSize: 27,
    color: '#94A3B8',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emptyIcon: {
    fontSize: 35,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  emptyDescription: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 7,
    lineHeight: 20,
  },
  planButton: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 10,
    marginTop: 17,
  },
  planButtonText: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 28,
    marginBottom: 30,
  },
});
