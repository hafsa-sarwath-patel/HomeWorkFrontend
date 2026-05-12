import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TeacherLoginScreen from '../screens/TeacherLoginScreen';
import SelectClassScreen from '../screens/SelectClassScreen';
import TeacherDashboardScreen from '../screens/TeacherDashboardScreen';
import TaskScreen from '../screens/TaskScreen';
import StudentLoginScreen from '../screens/StudentLoginScreen';
import StudentTaskScreen from '../screens/StudentTaskScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="TeacherLogin"
          component={TeacherLoginScreen}
          options={{title: 'Teacher Login'}}
        />

        <Stack.Screen
          name="SelectClass"
          component={SelectClassScreen}
          options={{title: 'Select Class'}}
        />

        <Stack.Screen
          name="TeacherDashboard"
          component={TeacherDashboardScreen}
          options={{title: 'Teacher Dashboard'}}
        />

        <Stack.Screen
  name="TaskScreen"
  component={TaskScreen}
  options={{title: 'Create Task'}}

/>

<Stack.Screen
  name="StudentLogin"
  component={StudentLoginScreen}
/>

<Stack.Screen
  name="StudentTaskScreen"
  component={StudentTaskScreen}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}