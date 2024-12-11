import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Example LEQ questions and answers for each module
const leqQuestions = {
    '1': [
      {
        question:
          'a) Discuss the role of chronic low-grade inflammation in the pathophysiology of obesity. (10 marks)\n' +
          'b) Explain how dysregulated adipokine secretion contributes to metabolic dysfunction in obesity. (10 marks)',
        answer: [
          '(a) Chronic low-grade inflammation:',
          '• Adipose tissue hypoxia activates immune cells (2 marks)',
          '• Increased secretion of pro-inflammatory cytokines (TNF-α, IL-6) (2 marks)',
          '• Macrophage infiltration and polarization to pro-inflammatory phenotype (2 marks)',
          '• Chronic inflammation disrupts insulin signaling pathways (2 marks)',
          '• Systemic effects: Insulin resistance, increased cardiovascular risk (2 marks)',
          '(b) Dysregulated adipokine secretion:',
          '• Elevated leptin levels impair appetite regulation (2 marks)',
          '• Reduced adiponectin leads to decreased insulin sensitivity (2 marks)',
          '• Increased resistin promotes hepatic glucose production (2 marks)',
          '• Dysregulated adipokines stimulate systemic inflammation (2 marks)',
          '• Links to metabolic syndrome components (hypertension, dyslipidemia) (2 marks)',
        ],
      },
      {
        question:
          'a) Discuss the pathophysiological mechanisms underlying insulin resistance in Type 2 Diabetes Mellitus. (10 marks)\n' +
          'b) Explain the metabolic and cardiovascular complications of metabolic syndrome. (10 marks)',
        answer: [
          '(a) Insulin resistance mechanisms:',
          '• Impaired insulin receptor signaling reduces glucose uptake (2 marks)',
          '• Excessive free fatty acids contribute to lipotoxicity (2 marks)',
          '• Chronic inflammation from cytokines (TNF-α, IL-6) impairs insulin action (2 marks)',
          '• Mitochondrial dysfunction increases oxidative stress (2 marks)',
          '• Pancreatic β-cell exhaustion and apoptosis (2 marks)',
          '(b) Complications of metabolic syndrome:',
          '• Dyslipidemia promotes atherosclerosis (2 marks)',
          '• Hypertension from endothelial dysfunction and insulin resistance (2 marks)',
          '• Pro-thrombotic state increases cardiovascular event risk (2 marks)',
          '• Hepatic steatosis and progression to non-alcoholic fatty liver disease (2 marks)',
          '• Hyperglycemia-induced microvascular damage (2 marks)',
        ],
      },
      {
        question:
          'a) Describe the development of atherosclerosis in coronary artery disease. (10 marks)\n' +
          'b) Discuss how hypertension contributes to the pathophysiology of cardiovascular diseases. (10 marks)',
        answer: [
          '(a) Atherosclerosis development:',
          '• Endothelial injury initiates the process (2 marks)',
          '• LDL oxidation and foam cell formation (2 marks)',
          '• Smooth muscle proliferation and fibrous cap formation (2 marks)',
          '• Plaque instability and rupture (2 marks)',
          '• Thrombosis leading to acute myocardial infarction (2 marks)',
          '(b) Role of hypertension:',
          '• Shear stress damages endothelial cells (2 marks)',
          '• Promotes vascular remodeling and stiffness (2 marks)',
          '• Activates the renin-angiotensin-aldosterone system (RAAS) (2 marks)',
          '• Increases afterload on the heart, leading to hypertrophy (2 marks)',
          '• Elevates risk for ischemic and hemorrhagic strokes (2 marks)',
        ],
      },
      {
        question:
          'Critically analyze the pathological changes in Chronic Obstructive Pulmonary Disease (COPD), and discuss the systemic complications associated with this condition. (20 marks)',
        answer: [
          'Pathological changes:',
          '• Chronic inflammation damages airway epithelium (2 marks)',
          '• Goblet cell hyperplasia increases mucus production (2 marks)',
          '• Destruction of alveoli reduces gas exchange (2 marks)',
          '• Airway remodeling leads to airflow limitation (2 marks)',
          '• Hypoxic pulmonary vasoconstriction causes pulmonary hypertension (2 marks)',
          'Systemic complications:',
          '• Muscle wasting and weight loss due to systemic inflammation (2 marks)',
          '• Secondary polycythemia from chronic hypoxia (2 marks)',
          '• Increased cardiovascular risk (2 marks)',
          '• Anxiety and depression due to breathlessness (2 marks)',
          '• Increased susceptibility to respiratory infections (2 marks)',
        ],
      },
      {
        question:
          'Discuss the pathological mechanisms underlying osteoarthritis and explain the clinical manifestations of this condition. (20 marks)',
        answer: [
          'Pathological mechanisms:',
          '• Imbalance between cartilage degradation and repair (2 marks)',
          '• Pro-inflammatory cytokines accelerate cartilage breakdown (2 marks)',
          '• Subchondral bone changes (sclerosis, osteophytes) (2 marks)',
          '• Synovial inflammation contributes to pain (2 marks)',
          '• Loss of joint space leads to reduced mobility (2 marks)',
          'Clinical manifestations:',
          '• Joint pain, especially with activity (2 marks)',
          '• Morning stiffness lasting less than 30 minutes (2 marks)',
          '• Crepitus during joint movement (2 marks)',
          '• Limited range of motion (2 marks)',
          '• Swelling or deformity in affected joints (2 marks)',
        ],
      },
      {
        question:
          'Discuss the role of genetic mutations and microenvironmental factors in the pathophysiology of cancer. (20 marks)',
        answer: [
          'Genetic mutations:',
          '• Oncogene activation promotes cell proliferation (2 marks)',
          '• Loss of tumor suppressor gene function (e.g., TP53) (2 marks)',
          '• Genomic instability increases mutation rates (2 marks)',
          '• DNA repair defects lead to accumulation of mutations (2 marks)',
          '• Evasion of apoptosis through altered signaling (2 marks)',
          'Microenvironmental factors:',
          '• Tumor angiogenesis supports growth and metastasis (2 marks)',
          '• Immune evasion mechanisms allow tumor survival (2 marks)',
          '• Hypoxic conditions activate adaptive survival pathways (2 marks)',
          '• Cancer-associated fibroblasts promote tumor progression (2 marks)',
          '• Chronic inflammation fosters tumor initiation and growth (2 marks)',
        ],
      },
      {
        question:
          'Describe the pathophysiology of ischemic stroke and discuss the mechanisms underlying post-stroke recovery. (20 marks)',
        answer: [
          'Pathophysiology of ischemic stroke:',
          '• Vessel occlusion reduces cerebral blood flow (2 marks)',
          '• Ischemia leads to neuronal energy failure and death (2 marks)',
          '• Glutamate excitotoxicity damages neurons (2 marks)',
          '• Inflammation exacerbates secondary injury (2 marks)',
          '• Formation of a penumbra surrounding the infarcted area (2 marks)',
          'Post-stroke recovery:',
          '• Neuroplasticity and synaptogenesis aid recovery (2 marks)',
          '• Rehabilitation enhances functional reorganization (2 marks)',
          '• Angiogenesis improves blood supply to ischemic regions (2 marks)',
          '• Brain-derived neurotrophic factor (BDNF) promotes repair (2 marks)',
          '• Physical therapy restores motor function and prevents atrophy (2 marks)',
        ],
      },
    ],
  };

export default function LEQQuestions() {
  const params = useLocalSearchParams(); // Fetch the `id` from the local search params
  const id = params.id?.toString(); // Ensure `id` is a valid string

  const questions = id && leqQuestions[id] ? leqQuestions[id] : []; // Retrieve questions or fallback
  const [userAnswers, setUserAnswers] = useState({}); // Store user answers

  const handleSubmit = (index) => {
    // Handle the submission of a specific question
    const correctAnswer = questions[index]?.answer || [];
    const userAnswer = userAnswers[index]?.trim();

    if (!userAnswer) {
      Alert.alert('Error', 'Please write your answer before submitting.');
      return;
    }

    Alert.alert(
      'Correct Answer',
      `Correct Answer:\n${correctAnswer.map((ans) => `- ${ans}`).join('\n')}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Long Essay Questions</Text>
      <Text style={styles.subtitle}>Module ID: {id || 'Unknown'}</Text>

      {questions.length > 0 ? (
        questions.map((q, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>
              {index + 1}. {q.question}
            </Text>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Write your answer here..."
              value={userAnswers[index] || ''}
              onChangeText={(text) =>
                setUserAnswers({ ...userAnswers, [index]: text })
              }
            />
            <Button
              title="Submit"
              onPress={() => handleSubmit(index)}
              color="#1D3D47"
            />
          </View>
        ))
      ) : (
        <Text style={styles.noQuestions}>
          No LEQ questions available for this module.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInput: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
  },
  noQuestions: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});
