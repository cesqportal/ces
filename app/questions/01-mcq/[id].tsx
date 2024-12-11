import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function MCQQuestions() {
  const { id } = useLocalSearchParams(); // Retrieve the module ID from route parameters

  // Define questions for each module
  const moduleQuestions = {
    '1': [
        {
          question: 'Which of the following is a hallmark feature of type 2 diabetes mellitus?',
          options: [
            'Insulin resistance',
            'Decreased glycogen synthesis in the liver',
            'Hyperthyroidism',
            'Autoimmune destruction of beta cells',
          ],
          answer: 'Insulin resistance',
        },
        
        {
          question: 'Which biomarker is most commonly associated with chronic inflammation in cardiovascular diseases?',
          options: [
            'Tumor Necrosis Factor-alpha (TNF-α)',
            'C-reactive protein (CRP)',
            'Interleukin-10 (IL-10)',
            'Ferritin',
          ],
          answer: 'C-reactive protein (CRP)',
        },
        {
          question: 'Hypertension is defined by a persistent systolic blood pressure greater than:',
          options: ['130 mmHg', '140 mmHg', '120 mmHg', '160 mmHg'],
          answer: '140 mmHg',
        },
        {
          question: 'What is the main pathophysiological mechanism leading to ischemic stroke?',
          options: [
            'Hemorrhage in the brain',
            'Embolism or thrombosis obstructing cerebral arteries',
            'Increased cerebrospinal fluid pressure',
            'Autoimmune attack on brain tissue',
          ],
          answer: 'Embolism or thrombosis obstructing cerebral arteries',
        },
        {
          question: 'Atherosclerosis primarily affects which layer of the blood vessel wall?',
          options: ['Tunica adventitia', 'Tunica intima', 'Tunica media', 'Endocardium'],
          answer: 'Tunica intima',
        },
        {
          question: 'The primary dysfunction in chronic obstructive pulmonary disease (COPD) is:',
          options: [
            'Restriction of lung expansion',
            'Obstruction of airflow',
            'Overproduction of surfactant',
            'Pulmonary fibrosis',
          ],
          answer: 'Obstruction of airflow',
        },
        {
          question: 'In metabolic syndrome, elevated waist circumference indicates:',
          options: [
            'Increased bone density',
            'Excessive visceral fat deposition',
            'Poor muscle mass distribution',
            'High glycogen storage',
          ],
          answer: 'Excessive visceral fat deposition',
        },
        {
          question: 'Non-alcoholic fatty liver disease (NAFLD) can progress to which severe condition?',
          options: ['Cirrhosis', 'Hepatic adenoma', 'Wilson’s disease', 'Gallstones'],
          answer: 'Cirrhosis',
        },
        {
          question: 'Which enzyme is primarily responsible for breaking down alcohol in the liver?',
          options: ['Lactase', 'Catalase', 'Alcohol dehydrogenase', 'Amylase'],
          answer: 'Alcohol dehydrogenase',
        },
        {
          question: 'What is the most significant risk factor for developing chronic kidney disease (CKD)?',
          options: ['Smoking', 'Diabetes mellitus', 'Dyslipidemia', 'Vitamin D deficiency'],
          answer: 'Diabetes mellitus',
        },
      ],
    '2': [
        {
          question: 'The glycemic index (GI) measures:',
          options: [
            'The caloric density of a food item',
            'The rate at which a carbohydrate-containing food raises blood glucose levels',
            'The amount of protein in a diet',
            'The thermic effect of food',
          ],
          answer: 'The rate at which a carbohydrate-containing food raises blood glucose levels',
        },
        {
          question: 'Which vitamin is crucial for blood clotting?',
          options: ['Vitamin A', 'Vitamin K', 'Vitamin C', 'Vitamin E'],
          answer: 'Vitamin K',
        },
        {
          question:
            'A diet high in saturated fat is primarily associated with an increased risk of:',
          options: ['Cancer', 'Cardiovascular disease', 'Osteoporosis', 'Alzheimer’s disease'],
          answer: 'Cardiovascular disease',
        },
        {
          question: 'Which macronutrient has the highest caloric density?',
          options: ['Carbohydrates', 'Proteins', 'Fats', 'Alcohol'],
          answer: 'Fats',
        },
        {
          question: 'Iron absorption is enhanced by the intake of:',
          options: ['Vitamin D', 'Calcium', 'Vitamin C', 'Fiber'],
          answer: 'Vitamin C',
        },
        {
          question: 'Which is the most common nutritional deficiency worldwide?',
          options: [
            'Vitamin A deficiency',
            'Iron deficiency anemia',
            'Iodine deficiency',
            'Vitamin D deficiency',
          ],
          answer: 'Iron deficiency anemia',
        },
        {
          question: 'A BMI of 30 or above is classified as:',
          options: ['Overweight', 'Obese', 'Underweight', 'Normal weight'],
          answer: 'Obese',
        },
        {
          question:
            'Which dietary pattern is associated with reduced inflammation and chronic disease risk?',
          options: ['Western diet', 'Mediterranean diet', 'Ketogenic diet', 'High-protein diet'],
          answer: 'Mediterranean diet',
        },
        {
          question: 'Which is a symptom of kwashiorkor?',
          options: ['Wasting of muscle', 'Edema', 'Hair loss', 'Fatigue'],
          answer: 'Edema',
        },
        {
          question: 'A key feature of the DASH diet is:',
          options: [
            'High sodium intake',
            'High potassium and low sodium intake',
            'Emphasis on red meats',
            'High protein and low carbohydrate intake',
          ],
          answer: 'High potassium and low sodium intake',
        },
      ],
    '3': [
       {
          question: 'Which psychological concept involves the belief in one’s ability to perform a task?',
          options: ['Self-efficacy', 'Intrinsic motivation', 'Learned helplessness', 'Emotional intelligence'],
          answer: 'Self-efficacy',
        },
        {
          question: "According to Maslow's hierarchy of needs, which is considered a basic physiological need?",
          options: ['Safety', 'Love and belonging', 'Food and water', 'Esteem'],
          answer: 'Food and water',
        },
        {
          question: 'Which psychological theory focuses on the relationship between thoughts, feelings, and behaviors?',
          options: ['Psychoanalytic theory', 'Cognitive-behavioral theory', 'Social learning theory', 'Humanistic theory'],
          answer: 'Cognitive-behavioral theory',
        },
        {
          question: 'What is the primary focus of positive psychology?',
          options: ['Treating mental illness', 'Enhancing well-being and resilience', 'Understanding unconscious conflicts', 'Managing workplace stress'],
          answer: 'Enhancing well-being and resilience',
        },
        {
          question: 'In sports psychology, mental imagery is a technique used to:',
          options: ['Improve physical strength', 'Visualize success and enhance performance', 'Increase muscle memory', 'Develop mindfulness'],
          answer: 'Visualize success and enhance performance',
        },
        {
          question: 'The concept of "flow" in psychology refers to:',
          options: ['A state of complete immersion in an activity', 'A gradual improvement in learning', 'Emotional regulation during stress', 'A continuous stream of consciousness'],
          answer: 'A state of complete immersion in an activity',
        },
        {
          question: 'Which is an example of extrinsic motivation?',
          options: ['Participating in a sport for enjoyment', 'Exercising to win a medal', 'Studying because of curiosity', 'Practicing yoga for inner peace'],
          answer: 'Exercising to win a medal',
        },
        {
          question: 'Which personality trait is most associated with resilience?',
          options: ['Neuroticism', 'Openness', 'Conscientiousness', 'Emotional stability'],
          answer: 'Emotional stability',
        },
        {
          question: 'What is the psychological term for the fear of failure?',
          options: ['Anxiety', 'Atychiphobia', 'Procrastination', 'Avoidance'],
          answer: 'Atychiphobia',
        },
        {
          question: 'Which intervention is most effective for reducing performance anxiety in athletes?',
          options: ['Cognitive restructuring', 'Deep breathing exercises', 'Visualization techniques', 'All of the above'],
          answer: 'All of the above',
        }
      ],   
   '4': [
      {
        question: 'A research study where participants are observed without intervention is known as:',
        options: ['Experimental research', 'Observational research', 'Longitudinal research', 'Case study'],
        answer: 'Observational research',
      },
      {
        question: 'The dependent variable in a research study is:',
        options: [
          'The factor manipulated by the researcher',
          'The outcome measured',
          'The variable held constant',
          'The confounding variable',
        ],
        answer: 'The outcome measured',
      },
      {
        question: 'A p-value less than 0.05 indicates:',
        options: [
          'Statistical insignificance',
          'Statistical significance',
          'No effect',
          'A null hypothesis is accepted',
        ],
        answer: 'Statistical significance',
      },
      {
        question: 'Randomization in a clinical trial helps to:',
        options: ['Increase sample size', 'Minimize selection bias', 'Increase variability', 'Test multiple hypotheses'],
        answer: 'Minimize selection bias',
      },
      {
        question: 'Which statistical test is used to compare means between two groups?',
        options: ['Chi-square test', 'ANOVA', 't-test', 'Regression analysis'],
        answer: 't-test',
      },
      {
        question: 'A systematic review differs from a narrative review in that it:',
        options: [
          'Includes meta-analysis',
          'Focuses on a single study',
          'Is less structured',
          'Provides expert opinion',
        ],
        answer: 'Includes meta-analysis',
      },
      {
        question: 'The primary purpose of a pilot study is to:',
        options: ['Collect large-scale data', 'Refine research methodology', 'Validate findings', 'Test hypotheses'],
        answer: 'Refine research methodology',
      },
      {
        question: 'Which sampling method ensures every individual has an equal chance of being selected?',
        options: ['Convenience sampling', 'Stratified sampling', 'Random sampling', 'Quota sampling'],
        answer: 'Random sampling',
      },
      {
        question: 'A high correlation coefficient (r) close to 1 indicates:',
        options: ['Strong positive correlation', 'Strong negative correlation', 'No correlation', 'Weak correlation'],
        answer: 'Strong positive correlation',
      },
      {
        question: 'What is the gold standard for testing causal relationships?',
        options: [
          'Randomized controlled trial',
          'Cross-sectional study',
          'Observational study',
          'Cohort study',
        ],
        answer: 'Randomized controlled trial',
        },
      ],

    '5': [
        {
          question: 'The Bruce Protocol is primarily used to assess:',
          options: ['Strength endurance', 'Cardiovascular fitness', 'Flexibility', 'Anaerobic capacity'],
          answer: 'Cardiovascular fitness',
        },
        {
          question: 'What is the primary determinant of maximal oxygen uptake (VO2 max)?',
          options: ['Cardiac output', 'Tidal volume', 'Resting heart rate', 'Blood pressure'],
          answer: 'Cardiac output',
        },
        {
          question: 'When prescribing exercise intensity using heart rate, the Karvonen formula accounts for:',
          options: [
            'Maximal oxygen uptake',
            'Resting heart rate',
            'Blood pressure',
            'Body mass index',
          ],
          answer: 'Resting heart rate',
        },
        {
          question: 'Which of the following tests is best suited to measure muscular strength?',
          options: ['Sit-and-reach test', 'One-repetition maximum (1RM) test', 'Wingate anaerobic test', 'Timed up-and-go test'],
          answer: 'One-repetition maximum (1RM) test',
        },
        {
          question: 'During a submaximal exercise test, heart rate and oxygen uptake are assumed to have what type of relationship?',
          options: ['Exponential', 'Linear', 'Inverse', 'Quadratic'],
          answer: 'Linear',
        },
        {
          question: 'The FITT principle in exercise prescription stands for:',
          options: [
            'Frequency, Intensity, Type, Time',
            'Frequency, Interval, Training, Target',
            'Flexibility, Intensity, Time, Technique',
            'Frequency, Impact, Type, Target',
          ],
          answer: 'Frequency, Intensity, Type, Time',
        },
        {
          question: 'Which exercise testing protocol is most appropriate for individuals with limited mobility?',
          options: ['6-minute walk test', 'Bruce treadmill test', 'Wingate anaerobic test', 'VO2 max ramp test'],
          answer: '6-minute walk test',
        },
        {
          question: 'Which of the following is an absolute contraindication for exercise testing?',
          options: [
            'Recent myocardial infarction (within 2 days)',
            'Controlled hypertension',
            'Stable angina',
            'Diabetes mellitus',
          ],
          answer: 'Recent myocardial infarction (within 2 days)',
        },
        {
          question: 'A target heart rate zone for moderate-intensity exercise is typically set at:',
          options: ['30-40% of HRmax', '50-70% of HRmax', '70-85% of HRmax', '90-100% of HRmax'],
          answer: '50-70% of HRmax',
        },
        {
          question: 'Which test is used to evaluate anaerobic power?',
          options: ['VO2 max test', 'Wingate test', '12-minute Cooper test', 'Sit-and-reach test'],
          answer: 'Wingate test',
        },
      ],
    '6': [
        {
          question: 'The biopsychosocial model of health emphasizes:',
          options: [
            'Biological factors only',
            'Psychological and social factors only',
            'Interactions among biological, psychological, and social factors',
            'A purely medical approach to health',
          ],
          answer: 'Interactions among biological, psychological, and social factors',
        },
        {
          question: 'Perceived control in health psychology is most closely related to:',
          options: ['Self-efficacy', 'Stress levels', 'Personality traits', 'Physical fitness'],
          answer: 'Self-efficacy',
        },
        {
          question: 'Chronic stress can lead to dysregulation of which body system?',
          options: ['Musculoskeletal system', 'Immune system', 'Digestive system', 'Skeletal system'],
          answer: 'Immune system',
        },
        {
          question:
            'Which theory explains health behavior change through stages such as precontemplation, contemplation, and action?',
          options: [
            'Social Cognitive Theory',
            'Health Belief Model',
            'Transtheoretical Model',
            'Theory of Planned Behavior',
          ],
          answer: 'Transtheoretical Model',
        },
        {
          question: 'Coping strategies are classified into which two main types?',
          options: [
            'Emotional and psychological',
            'Active and passive',
            'Problem-focused and emotion-focused',
            'Internal and external',
          ],
          answer: 'Problem-focused and emotion-focused',
        },
        {
          question: 'A person’s belief that they are susceptible to a disease is a component of:',
          options: [
            'Social Cognitive Theory',
            'Health Belief Model',
            'Transtheoretical Model',
            'Self-Determination Theory',
          ],
          answer: 'Health Belief Model',
        },
        {
          question: 'What is the primary purpose of motivational interviewing in health psychology?',
          options: [
            'To confront unhealthy behaviors',
            'To explore and resolve ambivalence toward behavior change',
            'To provide a fixed action plan for the client',
            'To assess psychological disorders',
          ],
          answer: 'To explore and resolve ambivalence toward behavior change',
        },
        {
          question: 'Stress inoculation training is designed to:',
          options: [
            'Reduce physiological stress responses through medication',
            'Teach coping mechanisms to handle future stressors',
            'Identify sources of stress and eliminate them',
            'Provide emotional support to stressed individuals',
          ],
          answer: 'Teach coping mechanisms to handle future stressors',
        },
        {
          question: 'Which psychological factor is most associated with adherence to exercise programs?',
          options: ['Intrinsic motivation', 'Fear of failure', 'Neuroticism', 'External rewards'],
          answer: 'Intrinsic motivation',
        },
        {
          question: 'Which type of social support involves providing material resources or financial aid?',
          options: [
            'Emotional support',
            'Informational support',
            'Tangible support',
            'Network support',
          ],
          answer: 'Tangible support',
        },
      ],

    '7': [
        {
          question: 'Which principle is most critical in designing therapeutic exercise for musculoskeletal injuries?',
          options: ['Specificity', 'Overload', 'Reversibility', 'Individualization'],
          answer: 'Individualization',
        },
        {
          question: 'The primary goal of therapeutic exercise in the acute phase of injury is to:',
          options: [
            'Increase strength',
            'Reduce inflammation and protect the injured tissue',
            'Improve joint range of motion',
            'Enhance neuromuscular control',
          ],
          answer: 'Reduce inflammation and protect the injured tissue',
        },
        {
          question: 'Proprioceptive neuromuscular facilitation (PNF) stretching is best used to:',
          options: [
            'Increase muscle power',
            'Improve flexibility and range of motion',
            'Reduce inflammation',
            'Enhance aerobic endurance',
          ],
          answer: 'Improve flexibility and range of motion',
        },
        {
          question: 'Which type of muscle contraction is emphasized in eccentric strengthening?',
          options: [
            'Shortening of the muscle',
            'Lengthening of the muscle',
            'Static contraction',
            'Rapid contraction',
          ],
          answer: 'Lengthening of the muscle',
        },
        {
          question: 'Which therapeutic exercise is most effective for reducing lower back pain?',
          options: ['Spinal traction', 'McKenzie exercises', 'Plyometric drills', 'Sprint intervals'],
          answer: 'McKenzie exercises',
        },
        {
          question: 'Tendon healing typically benefits most from which type of exercise?',
          options: ['Isometric', 'Plyometric', 'Concentric', 'Aerobic'],
          answer: 'Isometric',
        },
        {
          question:
            'What is the primary purpose of closed kinetic chain exercises in musculoskeletal rehabilitation?',
          options: [
            'Isolating specific muscles',
            'Mimicking functional movements',
            'Reducing energy expenditure',
            'Enhancing cardiorespiratory fitness',
          ],
          answer: 'Mimicking functional movements',
        },
        {
          question: 'The primary contraindication for using heat therapy in musculoskeletal conditions is:',
          options: ['Chronic inflammation', 'Acute injury', 'Muscle spasm', 'Joint stiffness'],
          answer: 'Acute injury',
        },
        {
          question: 'Therapeutic ultrasound is primarily used to:',
          options: [
            'Improve circulation',
            'Reduce joint pain',
            'Promote tissue healing and repair',
            'Enhance muscle endurance',
          ],
          answer: 'Promote tissue healing and repair',
        },
        {
          question:
            'Which muscle group should be prioritized in rehabilitation after anterior cruciate ligament (ACL) surgery?',
          options: ['Quadriceps', 'Hamstrings', 'Calf muscles', 'Gluteus maximus'],
          answer: 'Quadriceps',
        },
      ],

    '8': [
        {
          question: 'Which type of exercise is recommended early in cardiac rehabilitation?',
          options: [
            'High-intensity interval training',
            'Low-intensity aerobic exercise',
            'Resistance training',
            'Plyometric training',
          ],
          answer: 'Low-intensity aerobic exercise',
        },
        {
          question: 'In phase II cardiac rehabilitation, patients typically participate in:',
          options: [
            'Home-based unsupervised exercise',
            'Supervised, monitored exercise programs',
            'High-intensity interval training',
            'Preoperative training',
          ],
          answer: 'Supervised, monitored exercise programs',
        },
        {
          question:
            'What is the primary goal of musculoskeletal rehabilitation after joint replacement surgery?',
          options: [
            'Reducing systemic inflammation',
            'Preventing joint stiffness and improving range of motion',
            'Enhancing cardiovascular fitness',
            'Decreasing muscle hypertrophy',
          ],
          answer: 'Preventing joint stiffness and improving range of motion',
        },
        {
          question: 'Which parameter is monitored during exercise testing in cardiac rehabilitation?',
          options: ['VO2 max', 'Blood pressure', 'Heart rate', 'All of the above'],
          answer: 'All of the above',
        },
        {
          question:
            'Which scale is commonly used to monitor exercise intensity in cardiac rehabilitation?',
          options: [
            'Borg Rating of Perceived Exertion (RPE) scale',
            'Visual Analog Scale',
            'Likert scale',
            'Disability of the Arm, Shoulder, and Hand (DASH) score',
          ],
          answer: 'Borg Rating of Perceived Exertion (RPE) scale',
        },
        {
          question: 'Resistance training in cardiac rehabilitation is contraindicated in:',
          options: ['Stable angina', 'Uncontrolled hypertension', 'Controlled diabetes', 'Mild arrhythmia'],
          answer: 'Uncontrolled hypertension',
        },
        {
          question: 'Which exercise is most suitable for patients with osteoporosis?',
          options: [
            'Weight-bearing aerobic exercise',
            'High-impact plyometric training',
            'Sprint intervals',
            'Long-distance running',
          ],
          answer: 'Weight-bearing aerobic exercise',
        },
        {
          question: 'A key consideration in prescribing exercise for heart failure patients is:',
          options: [
            'Avoiding all physical activity',
            'Using a gradual progression to avoid fatigue',
            'Focusing solely on flexibility exercises',
            'Performing only high-intensity interval training',
          ],
          answer: 'Using a gradual progression to avoid fatigue',
        },
        {
          question: 'The Six-Minute Walk Test (6MWT) is commonly used to assess:',
          options: [
            'Aerobic endurance in cardiac and musculoskeletal rehabilitation',
            'Strength and power',
            'Flexibility',
            'Neuromuscular control',
          ],
          answer: 'Aerobic endurance in cardiac and musculoskeletal rehabilitation',
        },
        {
          question: 'Patients with coronary artery disease are advised to avoid:',
          options: [
            'Strenuous resistance exercises',
            'Moderate-intensity aerobic exercises',
            'Walking programs',
            'Controlled circuit training',
          ],
          answer: 'Strenuous resistance exercises',
        },
      ],

    '9': [
        {
          question: 'Clinical exercise physiologists primarily work with:',
          options: [
            'Healthy individuals',
            'Athletes',
            'Individuals with chronic diseases or disabilities',
            'Pediatric populations',
          ],
          answer: 'Individuals with chronic diseases or disabilities',
        },
        {
          question: 'Exercise is considered safe for patients with diabetes if their blood glucose level is:',
          options: [
            'Below 3.9 mmol/L',
            'Between 5.6 and 13.9 mmol/L',
            'Above 16.7 mmol/L',
            'Above 20 mmol/L',
          ],
          answer: 'Between 5.6 and 13.9 mmol/L',
        },
        {
          question:
            'Which parameter is most important to monitor in patients with chronic obstructive pulmonary disease (COPD) during exercise?',
          options: ['Heart rate', 'Oxygen saturation', 'Blood pressure', 'Blood glucose'],
          answer: 'Oxygen saturation',
        },
        {
          question: 'Which exercise modality is contraindicated in patients with osteoporosis?',
          options: [
            'High-impact aerobic exercises',
            'Weight-bearing activities',
            'Resistance training',
            'Swimming',
          ],
          answer: 'High-impact aerobic exercises',
        },
        {
          question: 'Which medication class can affect heart rate response during exercise?',
          options: ['Beta-blockers', 'ACE inhibitors', 'Diuretics', 'Statins'],
          answer: 'Beta-blockers',
        },
        {
          question: 'Exercise is most beneficial for patients with depression due to its ability to:',
          options: [
            'Increase serotonin and endorphin levels',
            'Enhance cognitive function',
            'Promote better sleep patterns',
            'All of the above',
          ],
          answer: 'All of the above',
        },
        {
          question:
            'What is the recommended duration of moderate-intensity aerobic exercise for individuals with hypertension?',
          options: [
            '10 minutes per session, 1 day a week',
            '30 minutes per session, 5 days a week',
            '60 minutes per session, 7 days a week',
            '15 minutes per session, 2 days a week',
          ],
          answer: '30 minutes per session, 5 days a week',
        },
        {
          question:
            'Which is the most appropriate test for assessing cardiovascular fitness in a clinical population?',
          options: [
            'Treadmill VO2 max test',
            '6-minute walk test',
            'Wingate anaerobic test',
            'Harvard step test',
          ],
          answer: '6-minute walk test',
        },
        {
          question: 'A common goal of exercise in patients with metabolic syndrome is to:',
          options: [
            'Reduce visceral fat',
            'Improve insulin sensitivity',
            'Lower blood pressure',
            'All of the above',
          ],
          answer: 'All of the above',
        },
        {
          question: 'Which exercise intervention is most effective for improving balance in older adults?',
          options: ['Tai Chi', 'High-impact aerobic exercise', 'Weightlifting', 'Swimming'],
          answer: 'Tai Chi',
        },
      ],

    '10': [
        {
          question: 'Clinical exercise physiologists primarily work with:',
          options: [
            'Healthy individuals',
            'Athletes',
            'Individuals with chronic diseases or disabilities',
            'Pediatric populations',
          ],
          answer: 'Individuals with chronic diseases or disabilities',
        },
        {
          question: 'Exercise is considered safe for patients with diabetes if their blood glucose level is:',
          options: [
            'Below 3.9 mmol/L',
            'Between 5.6 and 13.9 mmol/L',
            'Above 16.7 mmol/L',
            'Above 20 mmol/L',
          ],
          answer: 'Between 5.6 and 13.9 mmol/L',
        },
        {
          question:
            'Which parameter is most important to monitor in patients with chronic obstructive pulmonary disease (COPD) during exercise?',
          options: ['Heart rate', 'Oxygen saturation', 'Blood pressure', 'Blood glucose'],
          answer: 'Oxygen saturation',
        },
        {
          question: 'Which exercise modality is contraindicated in patients with osteoporosis?',
          options: [
            'High-impact aerobic exercises',
            'Weight-bearing activities',
            'Resistance training',
            'Swimming',
          ],
          answer: 'High-impact aerobic exercises',
        },
        {
          question: 'Which medication class can affect heart rate response during exercise?',
          options: ['Beta-blockers', 'ACE inhibitors', 'Diuretics', 'Statins'],
          answer: 'Beta-blockers',
        },
        {
          question: 'Exercise is most beneficial for patients with depression due to its ability to:',
          options: [
            'Increase serotonin and endorphin levels',
            'Enhance cognitive function',
            'Promote better sleep patterns',
            'All of the above',
          ],
          answer: 'All of the above',
        },
        {
          question:
            'What is the recommended duration of moderate-intensity aerobic exercise for individuals with hypertension?',
          options: [
            '10 minutes per session, 1 day a week',
            '30 minutes per session, 5 days a week',
            '60 minutes per session, 7 days a week',
            '15 minutes per session, 2 days a week',
          ],
          answer: '30 minutes per session, 5 days a week',
        },
        {
          question:
            'Which is the most appropriate test for assessing cardiovascular fitness in a clinical population?',
          options: [
            'Treadmill VO2 max test',
            '6-minute walk test',
            'Wingate anaerobic test',
            'Harvard step test',
          ],
          answer: '6-minute walk test',
        },
        {
          question: 'A common goal of exercise in patients with metabolic syndrome is to:',
          options: [
            'Reduce visceral fat',
            'Improve insulin sensitivity',
            'Lower blood pressure',
            'All of the above',
          ],
          answer: 'All of the above',
        },
        {
          question: 'Which exercise intervention is most effective for improving balance in older adults?',
          options: ['Tai Chi', 'High-impact aerobic exercise', 'Weightlifting', 'Swimming'],
          answer: 'Tai Chi',
        },
      ],

    '11': [
        {
          question: 'The ACSM recommends resistance training for clinical populations at least:',
          options: [
            '1 day per week',
            '2 days per week',
            '3 days per week',
            '5 days per week',
          ],
          answer: '2 days per week',
        },
        {
          question: 'Which is the first step in designing an exercise program for clinical populations?',
          options: [
            'Conducting a fitness test',
            'Setting realistic goals',
            'Conducting a pre-exercise health screening',
            'Prescribing exercise intensity',
          ],
          answer: 'Conducting a pre-exercise health screening',
        },
        {
          question: 'Which exercise is most suitable for patients with arthritis?',
          options: ['High-impact running', 'Swimming', 'Jump rope', 'Plyometric training'],
          answer: 'Swimming',
        },
        {
          question:
            'For individuals with peripheral arterial disease, the primary focus of exercise programming should be:',
          options: [
            'Resistance training',
            'Flexibility exercises',
            'Aerobic walking to near-maximal pain',
            'High-intensity interval training',
          ],
          answer: 'Aerobic walking to near-maximal pain',
        },
        {
          question: 'Which factor is most critical in ensuring exercise adherence in clinical populations?',
          options: [
            'Exercise variety',
            'Intensity progression',
            'Supervision and support',
            'Advanced exercise modalities',
          ],
          answer: 'Supervision and support',
        },
        {
          question:
            'Exercise programming for individuals with heart failure typically emphasizes:',
          options: [
            'Resistance training only',
            'Aerobic training with gradual progression',
            'Vigorous-intensity activities',
            'Flexibility training only',
          ],
          answer: 'Aerobic training with gradual progression',
        },
        {
          question:
            'In patients with Parkinson’s disease, which exercise modality has shown the most benefit?',
          options: [
            'Resistance training',
            'Treadmill walking with body weight support',
            'Yoga',
            'High-intensity interval training',
          ],
          answer: 'Treadmill walking with body weight support',
        },
        {
          question:
            'Which exercise prescription guideline is appropriate for a patient with hypertension?',
          options: [
            'Avoid moderate-intensity aerobic exercise',
            'Perform isometric exercises exclusively',
            'Focus on moderate-intensity aerobic exercise, 30 minutes per session',
            'Restrict flexibility training',
          ],
          answer: 'Focus on moderate-intensity aerobic exercise, 30 minutes per session',
        },
        {
          question: 'For clinical populations, the warm-up phase should last at least:',
          options: ['3 minutes', '5 minutes', '10 minutes', '15 minutes'],
          answer: '5 minutes',
        },
        {
          question: 'Exercise testing is contraindicated in which condition?',
          options: [
            'Controlled diabetes',
            'Acute myocardial infarction within 2 days',
            'Chronic stable angina',
            'Mild peripheral neuropathy',
          ],
          answer: 'Acute myocardial infarction within 2 days',
        },
      ],
    };
    
// Retrieve questions based on module ID
    
  const questions = moduleQuestions[id] || []; // Retrieve questions here

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const handleAnswer = (selected, correctAnswer, questionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: selected }));
    if (selected === correctAnswer) {
      setFeedbacks((prev) => ({ ...prev, [questionIndex]: 'Correct!' }));
      Alert.alert('Correct', 'Your answer is correct!', [{ text: 'OK' }]);
    } else {
      setFeedbacks((prev) => ({
        ...prev,
        [questionIndex]: `Wrong! Correct answer: ${correctAnswer}`,
      }));
      Alert.alert('Wrong', `The correct answer is: ${correctAnswer}`, [{ text: 'OK' }]);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Module ID: {id}</Text>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{question.question}</Text>
            {question.options.map((option, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.option,
                  selectedAnswers[index] === option && styles.selectedOption,
                ]}
                onPress={() => handleAnswer(option, question.answer, index)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            {feedbacks[index] && <Text style={styles.feedback}>{feedbacks[index]}</Text>}
          </View>
        ))
      ) : (
        <Text style={styles.noQuestionsText}>
          No questions available for this module.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 24,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    backgroundColor: '#1D3D47',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  selectedOption: {
    backgroundColor: '#0A2C37',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  feedback: {
    marginTop: 8,
    fontSize: 16,
    color: '#ff0000',
    fontWeight: 'bold',
  },
  noQuestionsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});