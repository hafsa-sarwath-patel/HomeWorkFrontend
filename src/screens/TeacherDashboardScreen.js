import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const subjects = [
  'Math',
  'Science',
  'English',
  'Social',
  'Computer',
];

export default function TeacherDashboardScreen({
  route,
  navigation,
}) {
  const {userId, selectedClass} = route.params;

  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Teacher ID: {userId}</Text>

      <Text style={styles.className}>{selectedClass}</Text>

      <Text style={styles.subjectTitle}>Select Subject</Text>

      {subjects.map(subject => (
        <TouchableOpacity
          key={subject}
          style={[
            styles.subjectButton,
            selectedSubject === subject && styles.selected,
          ]}
          onPress={() => setSelectedSubject(subject)}>
          <Text style={styles.subjectText}>{subject}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        disabled={selectedSubject === ''}
        style={[
          styles.doneButton,
          selectedSubject === '' && {opacity: 0.5},
        ]}
        onPress={() =>
          navigation.navigate('TaskScreen', {
            userId,
            selectedClass,
            selectedSubject,
          })
        }>
        <Text style={styles.doneText}>Done</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  className: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2563eb',
  },

  subjectTitle: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  subjectButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  selected: {
    backgroundColor: '#16a34a',
  },

  subjectText: {
    fontSize: 18,
  },

  doneButton: {
    marginTop: 30,
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  doneText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});