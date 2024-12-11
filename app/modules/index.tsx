import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const modules = [
  { id: '1', name: 'Module 1: Pathophysiology' },
  { id: '2', name: 'Module 2: Nutrition' },
];

export default function ModuleList() {
  const router = useRouter();

  const navigateToDetails = (id: string) => {
    console.log(`Navigating to /modules/${id}`); // Debug route
    router.push(`/modules/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modules</Text>
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.moduleButton}
            onPress={() => navigateToDetails(item.id)}
          >
            <Text style={styles.moduleButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  moduleButton: { padding: 12, backgroundColor: '#1D3D47', borderRadius: 8, marginVertical: 8 },
  moduleButtonText: { color: '#fff', fontSize: 16 },
});
