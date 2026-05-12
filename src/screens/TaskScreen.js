import React, {useState} from 'react';
import {createTask} from '../services/api';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const levels = ['Easy', 'Moderate', 'Hard'];

export default function TaskScreen({route}) {
  const {userId, selectedClass, selectedSubject} =
    route.params;

  const [task, setTask] = useState('');
  const [difficulty, setDifficulty] = useState('');

const handleSubmit = async () => {
  const data = {
    teacherId: userId,
    className: selectedClass,
    subject: selectedSubject,
    task,
    difficulty,
  };

  try {
    const response = await createTask(data);

    Alert.alert('Success', 'Task Uploaded');

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Teacher ID: {userId}
      </Text>

      <Text style={styles.infoText}>
        Class: {selectedClass}
      </Text>

      <Text style={styles.infoText}>
        Subject: {selectedSubject}
      </Text>

      <Text style={styles.label}>Enter Homework</Text>

      <TextInput
        style={styles.input}
        placeholder="Write task or homework..."
        multiline
        value={task}
        onChangeText={setTask}
      />

      <Text style={styles.label}>
        Select Difficulty
      </Text>

      {levels.map(level => (
        <TouchableOpacity
          key={level}
          style={[
            styles.levelButton,
            difficulty === level && styles.selected,
          ]}
          onPress={() => setDifficulty(level)}>
          <Text style={styles.levelText}>{level}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        disabled={difficulty === ''}
        style={[
          styles.submitButton,
          difficulty === '' && {opacity: 0.5},
        ]}
        onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoText: {
    fontSize: 18,
    marginBottom: 8,
  },

  label: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    height: 140,
    textAlignVertical: 'top',
    fontSize: 18,
  },

  levelButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  selected: {
    backgroundColor: '#16a34a',
  },

  levelText: {
    fontSize: 18,
  },

  submitButton: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  submitText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});