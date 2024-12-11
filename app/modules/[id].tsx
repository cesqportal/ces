import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Use `useLocalSearchParams`

export default function ModuleDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Use `useLocalSearchParams` to get local params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Module Details</Text>
      <Text style={styles.moduleId}>Module ID: {id}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/questions/01-mcq/${id}`)} // Navigate to MCQ
      >
        <Text style={styles.buttonText}>Multiple Choice Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/questions/02-saq/${id}`)} // Navigate to SAQ
      >
        <Text style={styles.buttonText}>Short Answer Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push(`/questions/03-leq/${id}`)} // Navigate to LEQ
      >
        <Text style={styles.buttonText}>Long Essay Questions</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  moduleId: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1D3D47', // Navy blue background
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8, // Space between buttons
    width: '80%', // Button width
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
