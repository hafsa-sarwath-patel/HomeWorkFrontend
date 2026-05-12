import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {getTasksByClass} from '../services/api';

export default function StudentTaskScreen({route}) {
  const {studentName, rollNo, selectedClass} = route.params;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await getTasksByClass(selectedClass);

      setTasks(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.classTitle}>
        {selectedClass}
      </Text>

      <Text style={styles.info}>
        Student: {studentName}
      </Text>

      <Text style={styles.info}>
        Roll No: {rollNo}
      </Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#2563eb"
          style={{marginTop: 40}}
        />
      ) : tasks.length === 0 ? (
        <Text style={styles.noTask}>
          No Tasks Available
        </Text>
      ) : (
        tasks.map(item => (
          <View key={item._id} style={styles.taskBox}>
            <Text style={styles.subject}>
              {item.subject}
            </Text>

            <Text style={styles.task}>
              {item.task}
            </Text>

            <Text style={styles.difficulty}>
              Difficulty: {item.difficulty}
            </Text>

            <Text style={styles.teacher}>
              Teacher ID: {item.teacherId}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  classTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },

  taskBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    backgroundColor: '#f9f9f9',
  },

  subject: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#16a34a',
  },

  task: {
    fontSize: 17,
    color: '#333',
    marginBottom: 10,
  },

  difficulty: {
    fontSize: 15,
    color: '#ef4444',
    marginBottom: 5,
  },

  teacher: {
    fontSize: 14,
    color: '#666',
  },

  noTask: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
    color: '#999',
  },
});