import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homework App</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TeacherLogin')}>
        <Text style={styles.buttonText}>Teacher</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}
      onPress={()=>navigation.navigate('StudentLogin')}>
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#2563eb',
    width: '80%',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  button2: {
    backgroundColor: '#16a34a',
    width: '80%',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});