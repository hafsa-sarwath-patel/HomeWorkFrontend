import React, {useState} from 'react';
import {
  View,
  Text,
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

export default function SelectClassScreen({route, navigation}) {
  const {userId} = route.params;

  const [selectedClass, setSelectedClass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Class</Text>

      {classes.map(item => (
        <TouchableOpacity
          key={item}
          style={[
            styles.classButton,
            selectedClass === item && styles.selected,
          ]}
          onPress={() => setSelectedClass(item)}>
          <Text style={styles.classText}>{item}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() =>
          navigation.navigate('TeacherDashboard', {
            userId,
            selectedClass,
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  classButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 15,
  },

  selected: {
    backgroundColor: '#2563eb',
  },

  classText: {
    fontSize: 18,
    color: '#000',
  },

  doneButton: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },

  doneText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});