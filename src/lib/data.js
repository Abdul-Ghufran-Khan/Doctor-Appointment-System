
export const categories =[
    "Heart Diseases", "Hypertension", "Arrhythmias",
    "Skin Disorders", "Acne", "Eczema", "Psoriasis",
    "Brain Disorders", "Epilepsy", "Stroke", "Migraines",
    "Child Health", "Vaccinations", "Developmental Disorders",
    "Bone Fractures", "Joint Disorders", "Spinal Surgery",
    "Eye Diseases", "Cataracts", "Glaucoma", "Vision Correction",
    "Women's Health", "Pregnancy", "Menstrual Disorders",
    "Cancer Diagnosis", "Chemotherapy", "Radiation Therapy",
    "Mental Health", "Depression", "Anxiety", "Bipolar Disorder",
    "Hormonal Disorders", "Diabetes", "Thyroid Diseases",
    "Digestive System", "Liver Diseases", "Irritable Bowel Syndrome",
    "Lung Diseases", "Asthma", "COPD", "Sleep Apnea",
    "Arthritis", "Autoimmune Disorders", "Chronic Pain"
  ];

  export const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      appointmentTime: "10:00 AM - 2:00 PM",
      fees: 2000,
      category: "Cardiologist",
      hospital: "City Heart Clinic",
      gender: "Female"
    },
    {
      id: 2,
      name: "Dr. John Smith",
      appointmentTime: "3:00 PM - 6:00 PM",
      fees: 2500,
      category: "Dermatologist",
      hospital: "Skin Care Hospital",
      gender: "Male"
    },
    {
      id: 3,
      name: "Dr. Aisha Khan",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 3000,
      category: "Neurologist",
      hospital: "NeuroHealth Center",
      gender: "Female"
    },
    {
      id: 4,
      name: "Dr. Robert Wilson",
      appointmentTime: "1:00 PM - 5:00 PM",
      fees: 1500,
      category: "Pediatrician",
      hospital: "Children's Health Hospital",
      gender: "Male"
    },
    {
      id: 5,
      name: "Dr. Maria Lopez",
      appointmentTime: "10:00 AM - 4:00 PM",
      fees: 4000,
      category: "Orthopedic Surgeon",
      hospital: "Bone Care Clinic",
      gender: "Female"
    },
    {
      id: 6,
      name: "Dr. Anil Kapoor",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 2200,
      category: "Ophthalmologist",
      hospital: "Vision Plus Hospital",
      gender: "Male"
    },
    {
      id: 7,
      name: "Dr. Lisa Brown",
      appointmentTime: "11:00 AM - 3:00 PM",
      fees: 2700,
      category: "Gynecologist",
      hospital: "Women's Health Clinic",
      gender: "Female"
    },
    {
      id: 8,
      name: "Dr. Ahmed Siddiqui",
      appointmentTime: "9:00 AM - 1:00 PM",
      fees: 3500,
      category: "Oncologist",
      hospital: "Cancer Care Institute",
      gender: "Male"
    },
    {
      id: 9,
      name: "Dr. Emily Davis",
      appointmentTime: "12:00 PM - 4:00 PM",
      fees: 1800,
      category: "Psychiatrist",
      hospital: "Mind Wellness Clinic",
      gender: "Female"
    },
    {
      id: 10,
      name: "Dr. James Brown",
      appointmentTime: "9:00 AM - 12:00 PM",
      fees: 2500,
      category: "Endocrinologist",
      hospital: "Hormone Health Center",
      gender: "Male"
    },
    {
      id: 11,
      name: "Dr. Sophie Taylor",
      appointmentTime: "10:00 AM - 2:00 PM",
      fees: 2300,
      category: "Gastroenterologist",
      hospital: "Digestive Health Hospital",
      gender: "Female"
    },
    {
      id: 12,
      name: "Dr. Omar Aziz",
      appointmentTime: "8:00 AM - 11:00 AM",
      fees: 2800,
      category: "Pulmonologist",
      hospital: "Lung Care Center",
      gender: "Male"
    },
    {
      id: 13,
      name: "Dr. Rebecca Carter",
      appointmentTime: "2:00 PM - 6:00 PM",
      fees: 3200,
      category: "Rheumatologist",
      hospital: "Chronic Pain Clinic",
      gender: "Female"
    },
    {
      id: 14,
      name: "Dr. Rajesh Gupta",
      appointmentTime: "7:00 AM - 10:00 AM",
      fees: 2400,
      category: "Cardiologist",
      hospital: "HeartCare Hospital",
      gender: "Male"
    },
    {
      id: 15,
      name: "Dr. Katherine Lee",
      appointmentTime: "1:00 PM - 5:00 PM",
      fees: 3000,
      category: "Dermatologist",
      hospital: "ClearSkin Clinic",
      gender: "Female"
    },
    {
      id: 16,
      name: "Dr. Hassan Raza",
      appointmentTime: "8:00 AM - 12:00 PM",
      fees: 2900,
      category: "Neurologist",
      hospital: "Brain Health Center",
      gender: "Male"
    },
    {
      id: 17,
      name: "Dr. Olivia Martinez",
      appointmentTime: "2:00 PM - 6:00 PM",
      fees: 2700,
      category: "Gynecologist",
      hospital: "Women's Wellness Clinic",
      gender: "Female"
    },
    {
      id: 18,
      name: "Dr. Michael Allen",
      appointmentTime: "9:00 AM - 1:00 PM",
      fees: 3300,
      category: "Orthopedic Surgeon",
      hospital: "Joint Care Hospital",
      gender: "Male"
    },
    {
      id: 19,
      name: "Dr. Zara Shah",
      appointmentTime: "11:00 AM - 3:00 PM",
      fees: 2100,
      category: "Psychiatrist",
      hospital: "Mental Health Institute",
      gender: "Female"
    }
  ];


  export const currentUser = {
    name: "John Doe",
    role: "doctor",
    email: "john.doe@example.com",
    }


   export const appointments = [
      {
        user: {
          name: "Ali Khan",
          email: "alikhan@example.com",
        },
        appointmentTime: "10:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-12-05",
        doctor: {
          name: "Dr. Sarah Ahmed",
          hospital: "City Hospital",
        },
      },
      {
        user: {
          name: "Maria Ali",
          email: "mariaali@example.com",
        },
        appointmentTime: "03:00 PM",
        status: "Pending",
        appointmentDate: "2024-12-06",
        doctor: {
          name: "Dr. Hamza Iqbal",
          hospital: "National Medical Center",
        },
      },
      {
        user: {
          name: "Usman Siddiqui",
          email: "usmans@example.com",
        },
        appointmentTime: "11:00 AM",
        status: "Cancelled",
        appointmentDate: "2024-12-07",
        doctor: {
          name: "Dr. Nadia Hassan",
          hospital: "Dow Medical Complex",
        },
      },
      {
        user: {
          name: "Ayesha Noor",
          email: "ayeshan@example.com",
        },
        appointmentTime: "09:00 AM",
        status: "Confirmed",
        appointmentDate: "2024-12-08",
        doctor: {
          name: "Dr. Zafar Malik",
          hospital: "Agha Khan Hospital",
        },
      },
      {
        user: {
          name: "Hamid Raza",
          email: "hamidr@example.com",
        },
        appointmentTime: "02:30 PM",
        status: "Rescheduled",
        appointmentDate: "2024-12-09",
        doctor: {
          name: "Dr. Farah Khan",
          hospital: "Medicare Hospital",
        },
      },
      {
        user: {
          name: "Sana Tariq",
          email: "sanat@example.com",
        },
        appointmentTime: "01:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-12-10",
        doctor: {
          name: "Dr. Ahmed Qureshi",
          hospital: "Liaquat National Hospital",
        },
      },
      {
        user: {
          name: "Bilal Ahmed",
          email: "bilala@example.com",
        },
        appointmentTime: "10:00 AM",
        status: "Pending",
        appointmentDate: "2024-12-11",
        doctor: {
          name: "Dr. Zainab Shah",
          hospital: "Shifa International",
        },
      },
      {
        user: {
          name: "Rabia Hassan",
          email: "rabiah@example.com",
        },
        appointmentTime: "04:00 PM",
        status: "Confirmed",
        appointmentDate: "2024-12-12",
        doctor: {
          name: "Dr. Yasir Ansari",
          hospital: "Civil Hospital",
        },
      },
      {
        user: {
          name: "Omar Javed",
          email: "omarj@example.com",
        },
        appointmentTime: "12:00 PM",
        status: "Cancelled",
        appointmentDate: "2024-12-13",
        doctor: {
          name: "Dr. Mehwish Ali",
          hospital: "Ziauddin Hospital",
        },
      },
      {
        user: {
          name: "Anum Rafiq",
          email: "anumr@example.com",
        },
        appointmentTime: "03:30 PM",
        status: "Rescheduled",
        appointmentDate: "2024-12-14",
        doctor: {
          name: "Dr. Salman Farooq",
          hospital: "Altamash General Hospital",
        },
      },
      {
        user: {
          name: "Farhan Aziz",
          email: "farhana@example.com",
        },
        appointmentTime: "08:30 AM",
        status: "Confirmed",
        appointmentDate: "2024-12-15",
        doctor: {
          name: "Dr. Lubna Sheikh",
          hospital: "Indus Hospital",
        },
      },
      {
        user: {
          name: "Madiha Saeed",
          email: "madihas@example.com",
        },
        appointmentTime: "05:00 PM",
        status: "Pending",
        appointmentDate: "2024-12-16",
        doctor: {
          name: "Dr. Usman Tariq",
          hospital: "OMI Hospital",
        },
      },
    ];
    
  
  