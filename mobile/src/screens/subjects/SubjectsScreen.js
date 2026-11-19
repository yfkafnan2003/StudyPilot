
import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';

const initialSubjects = [
  {
    id: '1',
    name: 'Computer Science',
    icon: '💻',
    color: '#DBEAFE',
    materials: [
      { id: '1', title: 'Introduction to Programming', type: 'PDF Notes', icon: '📄' },
      { id: '2', title: 'Data Structures', type: 'Lecture Notes', icon: '📝' },
    ],
  },
  {
    id: '2',
    name: 'Mathematics',
    icon: '📐',
    color: '#DCFCE7',
    materials: [
      { id: '3', title: 'Calculus - Chapter 1', type: 'PDF Notes', icon: '📄' },
      { id: '4', title: 'Linear Algebra', type: 'Study Notes', icon: '📝' },
    ],
  },
  {
    id: '3',
    name: 'Networking',
    icon: '🌐',
    color: '#FCE7F3',
    materials: [
      { id: '5', title: 'OSI Model', type: 'Lecture Notes', icon: '📄' },
      { id: '6', title: 'TCP/IP Fundamentals', type: 'PDF Notes', icon: '📄' },
    ],
  },
];

export default function SubjectsScreen() {
  const [subjects, setSubjects] = useState(initialSubjects);
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newSubject, setNewSubject] = useState('');

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddSubject = () => {
    const name = newSubject.trim();

    if (!name) {
      Alert.alert('Missing name', 'Please enter a subject name.');
      return;
    }

    const alreadyExists = subjects.some(
      (subject) => subject.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      Alert.alert('Already exists', 'This subject has already been added.');
      return;
    }

    const subject = {
      id: Date.now().toString(),
      name,
      icon: '📚',
      color: '#EDE9FE',
      materials: [],
    };

    setSubjects((previous) => [...previous, subject]);
    setNewSubject('');
    setModalVisible(false);
  };

  if (selectedSubject) {
    return (
      <View style={styles.container}>
        <View style={styles.detailHeader}>
          <Pressable onPress={() => setSelectedSubject(null)}>
            <Text style={styles.backButton}>‹ Back</Text>
          </Pressable>

          <Text style={styles.detailIcon}>{selectedSubject.icon}</Text>
          <Text style={styles.title}>{selectedSubject.name}</Text>
          <Text style={styles.subtitle}>
            {selectedSubject.materials.length} study materials
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Your Materials</Text>

        {selectedSubject.materials.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>📂</Text>
            <Text style={styles.emptyTitle}>No materials yet</Text>
            <Text style={styles.emptyText}>
              Your notes and documents will appear here.
            </Text>
          </View>
        ) : (
          <ScrollView>
            {selectedSubject.materials.map((material) => (
              <View key={material.id} style={styles.materialCard}>
                <Text style={styles.materialIcon}>{material.icon}</Text>
                <View style={styles.materialInfo}>
                  <Text style={styles.materialTitle}>{material.title}</Text>
                  <Text style={styles.materialType}>{material.type}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        <Text style={styles.note}>
          PDF upload and material management will be added in Task 14.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Subjects</Text>
        <Text style={styles.subtitle}>
          Organize your learning materials.
        </Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search subjects..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>All Subjects</Text>
        <Text style={styles.count}>{subjects.length} subjects</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredSubjects.length === 0 ? (
          <Text style={styles.emptySearch}>No subjects found.</Text>
        ) : (
          filteredSubjects.map((subject) => (
            <Pressable
              key={subject.id}
              style={styles.subjectCard}
              onPress={() => setSelectedSubject(subject)}
            >
              <View
                style={[
                  styles.subjectIconContainer,
                  { backgroundColor: subject.color },
                ]}
              >
                <Text style={styles.subjectIcon}>{subject.icon}</Text>
              </View>

              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>{subject.name}</Text>
                <Text style={styles.materialCount}>
                  {subject.materials.length} materials
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </Pressable>
          ))
        )}
      </ScrollView>

      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Subject</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Add New Subject</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Enter subject name"
              value={newSubject}
              onChangeText={setNewSubject}
              autoFocus
            />

            <Pressable
              style={styles.modalButton}
              onPress={handleAddSubject}
            >
              <Text style={styles.modalButtonText}>Add Subject</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setModalVisible(false);
                setNewSubject('');
              }}
            >
              <Text style={styles.cancelButton}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
    paddingTop: 55,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 15,
  },
  count: {
    color: '#64748B',
    fontSize: 12,
  },
  subjectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  subjectIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectIcon: {
    fontSize: 26,
  },
  subjectInfo: {
    flex: 1,
    marginLeft: 14,
  },
  subjectName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  materialCount: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
  arrow: {
    fontSize: 26,
    color: '#94A3B8',
  },
  addButton: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 15,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailHeader: {
    alignItems: 'center',
    marginBottom: 35,
  },
  backButton: {
    alignSelf: 'flex-start',
    width: '100%',
    color: '#2563EB',
    fontSize: 16,
    marginBottom: 25,
  },
  detailIcon: {
    fontSize: 45,
    marginBottom: 12,
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 25,
    alignItems: 'center',
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
  emptyText: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 7,
  },
  materialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  materialIcon: {
    fontSize: 27,
    marginRight: 14,
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  materialType: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
  note: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 15,
  },
  emptySearch: {
    color: '#64748B',
    textAlign: 'center',
    marginTop: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.5)',
    justifyContent: 'center',
    padding: 25,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 17,
    padding: 5,
  },
});
