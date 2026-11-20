
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function PlannerScreen() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const title = taskTitle.trim();

    if (!title) return;

    setTasks((previous) => [
      ...previous,
      {
        id: String(Date.now()),
        title,
        completed: false,
      },
    ]);

    setTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Study Planner</Text>
      <Text style={styles.subtitle}>
        Organize your study sessions and stay consistent.
      </Text>

      <View style={styles.statsCard}>
        <View>
          <Text style={styles.statsNumber}>{tasks.length}</Text>
          <Text style={styles.statsLabel}>Total Tasks</Text>
        </View>

        <View>
          <Text style={styles.statsNumber}>{completedCount}</Text>
          <Text style={styles.statsLabel}>Completed</Text>
        </View>

        <View>
          <Text style={styles.statsNumber}>
            {tasks.length - completedCount}
          </Text>
          <Text style={styles.statsLabel}>Remaining</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Add a Study Task</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What do you need to study?"
          placeholderTextColor="#94A3B8"
          value={taskTitle}
          onChangeText={setTaskTitle}
          onSubmitEditing={addTask}
          returnKeyType="done"
        />

        <Pressable style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Your Tasks</Text>

      {tasks.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>No tasks yet</Text>
          <Text style={styles.emptyDescription}>
            Add your first study task above to get started.
          </Text>
        </View>
      ) : (
        tasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <Pressable
              style={styles.taskContent}
              onPress={() => toggleTask(task.id)}
            >
              <View
                style={[
                  styles.checkbox,
                  task.completed && styles.checkboxCompleted,
                ]}
              >
                {task.completed && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </View>

              <Text
                style={[
                  styles.taskText,
                  task.completed && styles.completedText,
                ]}
              >
                {task.title}
              </Text>
            </Pressable>

            <Pressable onPress={() => deleteTask(task.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </Pressable>
          </View>
        ))
      )}
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
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 7,
    marginBottom: 25,
    lineHeight: 21,
  },
  statsCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 28,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
  },
  statsLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 13,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 28,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#0F172A',
  },
  addButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  emptyCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
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
    marginTop: 8,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  deleteText: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
  },
});
