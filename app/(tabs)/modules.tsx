import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Full modules array
const modules = [
  { id: 1, name: 'Pathophysiology of Non-communicable Diseases' },
  { id: 2, name: 'Nutrition in Health and Diseases' },
  { id: 3, name: 'Applied Psychology' },
  { id: 4, name: 'Applied Exercise Physiology' },
  { id: 5, name: 'Research Method in Exercise and Health Sciences' },
  { id: 6, name: 'Principles of Exercise Testing and Prescription' },
  { id: 7, name: 'Clinical Exercise Psychology' },
  { id: 8, name: 'Therapeutic Exercise Method for Musculoskeletal Conditions' },
  { id: 9, name: 'Musculoskeletal and Cardiac Rehabilitation' },
  { id: 10, name: 'Clinical Exercise Physiology' },
  { id: 11, name: 'Exercise Programming for Clinical Populations' },
];

export default function ModuleListScreen() {
  const router = useRouter(); // Initialize router for navigation

  const navigateToDetails = (id: string) => {
    try {
      console.log(`Navigating to /modules/${id}`);
      router.push(`/modules/${id}`); // Navigate to dynamic route
    } catch (error) {
      console.error('Navigation error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modules</Text>
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id.toString()} // Ensure keys are strings
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.moduleButton}
            onPress={() => navigateToDetails(item.id.toString())} // Pass string id
          >
            <Text style={styles.moduleButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  moduleButton: {
    backgroundColor: '#1D3D47',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
