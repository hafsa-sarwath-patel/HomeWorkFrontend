import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const classes = [
  'Class 1',
  'Class 2',
  'Class 3',
  'Class 4',
  'Class 5',
];

export default function StudentLoginScreen({navigation}) {
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>

      <TextInput
        placeholder="Student Name"
        style={styles.input}
        value={studentName}
        onChangeText={setStudentName}
      />

      <TextInput
        placeholder="Roll Number"
        style={styles.input}
        value={rollNo}
        onChangeText={setRollNo}
      />

      <Text style={styles.label}>Select Class</Text>

      {classes.map(item => (
        <TouchableOpacity
          key={item}
          style={[
            styles.classButton,
            selectedClass === item && styles.selectedClass,
          ]}
          onPress={() => setSelectedClass(item)}>
          <Text style={styles.classText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        disabled={
          studentName === '' ||
          rollNo === '' ||
          selectedClass === ''
        }
        style={[
          styles.submitButton,
          (studentName === '' ||
            rollNo === '' ||
            selectedClass === '') && {opacity: 0.5},
        ]}
        onPress={() =>
          navigation.navigate('StudentTaskScreen', {
            studentName,
            rollNo,
            selectedClass,
          })
        }>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  classButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },

  selectedClass: {
    backgroundColor: '#2563eb',
  },

  classText: {
    color: '#000',
    fontSize: 16,
  },

  submitButton: {
    marginTop: 30,
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});