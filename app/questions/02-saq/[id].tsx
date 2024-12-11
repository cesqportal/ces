import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // For dynamic route handling

// SAQ questions and answer schemes
const saqQuestions = {
  '1': [
    {
      question: 'Explain how chronic low-grade inflammation contributes to the pathophysiology of obesity.',
      answer: [
        'Adipose tissue expansion leads to hypoxia and mechanical stress.',
        'Recruitment and activation of immune cells, including macrophages and T cells, in adipose tissue.',
        'Increased production of pro-inflammatory cytokines such as TNF-α, IL-6, and MCP-1.',
        'Chronic activation of inflammatory pathways exacerbates systemic insulin resistance.',
        'Dysregulated adipokine secretion (e.g., increased leptin, reduced adiponectin) promotes metabolic dysfunction.',
      ],
    },
    {
      question: 'Describe the role of insulin resistance in the development of Type 2 Diabetes Mellitus.',
      answer: [
        'Impaired insulin receptor signaling leads to reduced glucose uptake in muscle and adipose tissue.',
        'Hepatic insulin resistance results in increased gluconeogenesis and fasting hyperglycemia.',
        'Chronic hyperglycemia induces oxidative stress and β-cell apoptosis.',
        'Pro-inflammatory cytokines (e.g., TNF-α, IL-6) further impair insulin sensitivity.',
        'Lipotoxicity from elevated free fatty acids contributes to β-cell dysfunction.',
      ],
    },
    {
      question: 'Summarize the process of atherosclerosis in coronary artery disease.',
      answer: [
        'Endothelial injury occurs due to risk factors like hypertension, smoking, or hyperlipidemia.',
        'LDL cholesterol penetrates the endothelial layer and undergoes oxidation.',
        'Recruitment of monocytes, which differentiate into macrophages and form foam cells.',
        'Smooth muscle cells proliferate, and extracellular matrix deposition forms a fibrous plaque.',
        'Plaque rupture exposes thrombogenic material, leading to clot formation and potential myocardial infarction.',
      ],
    },
    {
      question: 'What are the key pathological changes in Chronic Obstructive Pulmonary Disease (COPD)?',
      answer: [
        'Chronic inflammation leads to structural damage in the airways and alveoli.',
        'Goblet cell hyperplasia increases mucus production, obstructing airflow.',
        'Impaired ciliary function reduces mucociliary clearance.',
        'Alveolar wall destruction results in emphysema and reduced surface area for gas exchange.',
        'Pulmonary hypertension develops due to hypoxic vasoconstriction and vascular remodeling.',
      ],
    },
    {
      question: 'Discuss the pathophysiological mechanisms of osteoarthritis.',
      answer: [
        'Imbalance between cartilage synthesis and degradation leads to cartilage loss.',
        'Release of pro-inflammatory cytokines (e.g., IL-1, TNF-α) accelerates cartilage breakdown.',
        'Subchondral bone remodeling results in sclerosis and osteophyte formation.',
        'Synovial inflammation (synovitis) contributes to pain and joint stiffness.',
        'Loss of cartilage and joint space leads to impaired joint function and mobility.',
      ],
    },
    {
      question: 'Explain the role of genetic mutations in the pathophysiology of cancer.',
      answer: [
        'Mutations in proto-oncogenes convert them into oncogenes, driving unregulated cell proliferation.',
        'Loss of function in tumor suppressor genes (e.g., TP53) prevents apoptosis.',
        'DNA repair mechanisms fail, leading to genomic instability.',
        'Angiogenesis is promoted through factors like VEGF to support tumor growth.',
        'Immune evasion mechanisms allow cancer cells to escape immune surveillance.',
      ],
    },
    {
      question: 'Describe the pathophysiology of ischemic stroke.',
      answer: [
        'Blockage of cerebral blood flow occurs due to thrombosis or embolism.',
        'Deprivation of oxygen and glucose causes neuronal ischemia and energy failure.',
        'Excess glutamate release leads to excitotoxicity and neuronal death.',
        'Blood-brain barrier breakdown exacerbates inflammation and edema.',
        'Secondary injury from free radical production and inflammation worsens the damage.',
      ],
    },
    {
      question: 'What are the systemic complications associated with chronic kidney disease?',
      answer: [
        'Anemia due to decreased erythropoietin production by the kidneys.',
        'Secondary hyperparathyroidism results from imbalanced calcium-phosphorus metabolism.',
        'Cardiovascular disease due to uremic toxins and chronic hypertension.',
        'Accumulation of waste products (uremia) leads to systemic toxicity.',
        'Fluid and electrolyte imbalances (e.g., hyperkalemia, acidosis) disrupt homeostasis.',
      ],
    },
    {
      question: 'What is the pathophysiology of sickle cell anemia?',
      answer: [
        'Mutation in the β-globin gene produces abnormal hemoglobin S (HbS).',
        'HbS polymerizes under low oxygen conditions, causing red blood cell sickling.',
        'Sickled cells have reduced deformability and lifespan, leading to anemia.',
        'Vaso-occlusion by sickled cells causes ischemia and pain crises.',
        'Chronic hemolysis and microvascular obstruction lead to organ damage.',
      ],
    },
    {
      question: 'How does autoimmunity contribute to the pathophysiology of systemic lupus erythematosus (SLE)?',
      answer: [
        'Loss of self-tolerance leads to the production of autoantibodies (e.g., anti-dsDNA).',
        'Formation and deposition of immune complexes in tissues trigger inflammation.',
        'Dysregulated cytokine production amplifies the inflammatory response.',
        'Chronic inflammation damages multiple organs, particularly kidneys (lupus nephritis).',
        'Activation of complement pathways exacerbates tissue injury.',
      ],
    },
    {
      question: 'What are the molecular mechanisms of aging according to the free radical theory?',
      answer: [
        'Accumulation of reactive oxygen species (ROS) damages cellular components like DNA and proteins.',
        'Mitochondrial dysfunction reduces energy production and exacerbates ROS generation.',
        'Impaired autophagy leads to the accumulation of damaged organelles and proteins.',
        'Chronic low-grade inflammation ("inflammaging") promotes tissue degeneration.',
        'Shortening of telomeres results in cellular senescence and reduced regenerative capacity.',
      ],
    },
    {
      question: 'Describe the pathophysiology of Down syndrome.',
      answer: [
        'Trisomy 21 results in overexpression of genes on chromosome 21.',
        'Oxidative stress and altered protein metabolism contribute to cognitive impairment.',
        'Congenital heart defects (e.g., atrioventricular septal defect) arise from abnormal development.',
        'Impaired immune function increases susceptibility to infections and autoimmune diseases.',
        'Altered brain development leads to intellectual disability and delayed milestones.',
      ],
    },
  ],
};

export default function SAQQuestions() {
  const params = useLocalSearchParams(); // Retrieve the module ID dynamically
  const id = params.id?.toString(); // Ensure `id` is a valid string

  const questions = id && saqQuestions[id] ? saqQuestions[id] : []; // Retrieve questions for the given module
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleInputChange = (text, index) => {
    setUserAnswers((prev) => ({
      ...prev,
      [index]: text,
    }));
  };

  const handleSubmit = (index) => {
    if (userAnswers[index]?.trim()) {
      setFeedback((prev) => ({
        ...prev,
        [index]: questions[index].answer,
      }));
    } else {
      Alert.alert('Please enter your answer before submitting.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Short Answer Questions</Text>
      <Text style={styles.subtitle}>Module ID: {id || 'Unknown'}</Text>

      {questions.length > 0 ? (
        questions.map((q, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>
              {index + 1}. {q.question}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Type your answer here"
              value={userAnswers[index] || ''}
              onChangeText={(text) => handleInputChange(text, index)}
              multiline
            />
            <Button
              title="Submit"
              onPress={() => handleSubmit(index)}
              color="#1D3D47"
            />
            {feedback[index] && (
              <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackTitle}>Correct Answer:</Text>
                {feedback[index].map((point, pointIndex) => (
                  <Text key={pointIndex} style={styles.answer}>
                    - {point}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.noQuestions}>No SAQ questions available for this module.</Text>
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
  input: {
    marginTop: 8,
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  feedbackContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    marginBottom: 4,
  },
  noQuestions: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});
