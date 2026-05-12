import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function TaskCard({
  subject,
  task,
  difficulty,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.subject}>
        {subject}
      </Text>

      <Text style={styles.task}>
        {task}
      </Text>

      <Text style={styles.difficulty}>
        Difficulty: {difficulty}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
    elevation: 3,
  },

  subject: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  task: {
    fontSize: 16,
    marginBottom: 10,
  },

  difficulty: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
});