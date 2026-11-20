
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>My Profile</Text>
      <Text style={styles.subtitle}>
        Manage your StudyPilot account.
      </Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>S</Text>
        </View>

        <Text style={styles.name}>Student</Text>
        <Text style={styles.role}>StudyPilot Learner</Text>
      </View>

      <Text style={styles.sectionTitle}>Learning Overview</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Subjects</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Quizzes</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Study Hours</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Account Information</Text>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Account Type</Text>
          <Text style={styles.infoValue}>Student</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>App</Text>
          <Text style={styles.infoValue}>StudyPilot AI</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Preferences</Text>

      <View style={styles.infoCard}>
        <View style={styles.preferenceRow}>
          <Text style={styles.preferenceTitle}>Notifications</Text>
          <Text style={styles.preferenceDescription}>
            Notification settings will be available later.
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.preferenceRow}>
          <Text style={styles.preferenceTitle}>Privacy</Text>
          <Text style={styles.preferenceDescription}>
            Privacy controls will be available later.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Keep learning. Keep growing.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 7,
    marginBottom: 25,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 28,
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 43,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  avatarText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  role: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 13,
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
    paddingVertical: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  statLabel: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 17,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 28,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  preferenceRow: {
    paddingVertical: 16,
  },
  preferenceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  preferenceDescription: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 5,
  },
});
