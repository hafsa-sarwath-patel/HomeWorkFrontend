import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function TeacherScreen({navigation}) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Teacher Page
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TeacherDashboard')}
      >
        <Text style={styles.buttonText}>
          Open Dashboard
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },

});