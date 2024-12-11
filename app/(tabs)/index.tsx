import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); // Use router for navigation

  return (
    <ImageBackground
      source={require('@/assets/Image-1.jpg')} // Ensure this path is correct
      style={styles.background}
      resizeMode="cover" // Ensure the image stretches to fill the screen
      imageStyle={styles.image} // Apply custom styles to the image
    >
      {/* Overlay for reduced opacity */}
      <View style={styles.overlay}>
        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Welcome to Clinical Exercise Science</Text>
          <Text style={styles.subtitle}>Practice Question App</Text>
          <Text style={styles.wave}>👋</Text>
        </View>

        {/* About Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About This App</Text>
          <Text style={styles.cardText}>
            This app allows Clinical Exercise Science students to practice
            multiple-choice questions (MCQ), short answer questions (SAQ), and
            long essay questions (LEQ) across all modules.
          </Text>
        </View>

        {/* Get Started Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Get Started</Text>
          <Text style={styles.cardText}>
            Tap the button below to explore the modules and begin practicing.
          </Text>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => router.push('/modules')} // Navigate to Modules List
            accessibilityLabel="Explore the available modules to start practicing questions"
          >
            <Text style={styles.exploreButtonText}>Explore Modules</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure the background stretches to fill the screen
  },
  image: {
    filter: 'saturate(1.5)', // Increase saturation
    opacity: 0.85, // Reduce opacity slightly
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Semi-transparent black overlay
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  section: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF', // White text
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF', // White text
  },
  wave: {
    fontSize: 36,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#1D3D47',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
  exploreButton: {
    backgroundColor: '#1D3D47', // Navy blue background
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    alignSelf: 'center',
  },
  exploreButtonText: {
    color: '#FFFFFF', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
