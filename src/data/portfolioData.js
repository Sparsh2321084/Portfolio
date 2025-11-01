export const projectsData = [
  {
    id: 1,
    title: "IoT Environmental Monitoring System",
    subtitle: "Real-time sensor network with cloud integration",
    description: "Modular IoT system for environmental monitoring using ESP32 with multiple sensors. Features real-time data logging, cloud integration, and mobile alerts for critical conditions.",
    longDescription: "A field-ready environmental monitoring system capable of tracking temperature, humidity, air quality, and light levels. The system uses MQTT for reliable communication and implements power-efficient sleep modes for extended battery operation.",
    techStack: ["ESP32", "MQTT", "Arduino", "Firebase", "PCB Design", "Power Management"],
    features: [
      "Real-time sensor data collection (DHT22, BMP280, MQ-135)",
      "Low-power design with deep sleep (< 100µA idle)",
      "Cloud data logging with Firebase",
      "SMS/Email alerts for threshold violations",
      "Custom PCB with modular sensor connections",
      "OTA firmware updates"
    ],
    problemSolved: "Traditional monitoring systems were expensive and inflexible. This solution provides a cost-effective, modular platform that can be deployed in harsh field conditions with minimal maintenance.",
    image: "/projects/iot-system.jpg",
    schematic: "/projects/iot-schematic.png",
    video: "/projects/iot-demo.mp4",
    github: "https://github.com/Sparsh2321084/iot-monitoring",
    bom: [
      { component: "ESP32-DevKitC", quantity: 1, cost: "$8.00" },
      { component: "DHT22 Sensor", quantity: 1, cost: "$4.50" },
      { component: "BMP280 Sensor", quantity: 1, cost: "$3.00" },
      { component: "MQ-135 Gas Sensor", quantity: 1, cost: "$5.00" },
      { component: "18650 Li-ion Battery", quantity: 2, cost: "$8.00" },
      { component: "TP4056 Charger Module", quantity: 1, cost: "$1.50" }
    ],
    powerBudget: {
      active: "180mA @ 3.3V",
      sleep: "85µA @ 3.3V",
      batteryLife: "~45 days (with 2x 3000mAh cells, 15-min sampling)"
    },
    status: "deployed"
  },
  {
    id: 2,
    title: "Autonomous Line Following Robot",
    subtitle: "STM32-based robotics platform with PID control",
    description: "High-speed line following robot using STM32F4 microcontroller with IR sensor array and PID control algorithm for smooth path tracking.",
    longDescription: "Competition-grade line following robot featuring precise motor control, adaptive PID tuning, and real-time debugging capabilities. Achieved sub-20 second lap times on standard competition tracks.",
    techStack: ["STM32F4", "C/C++", "PID Control", "Motor Drivers", "IR Sensors", "UART Debugging"],
    features: [
      "8-channel IR sensor array for precise line detection",
      "Dual DC motor control with PWM",
      "Adaptive PID controller with auto-tuning",
      "Real-time telemetry via UART",
      "Logic analyzer verified timing (< 2ms loop time)",
      "Lithium polymer battery with protection circuit"
    ],
    problemSolved: "Existing line following robots lacked precision and speed. This implementation uses STM32's advanced timers and DMA for microsecond-level control, resulting in smooth, fast navigation.",
    image: "/projects/robot.jpg",
    schematic: "/projects/robot-schematic.png",
    video: "/projects/robot-demo.mp4",
    github: "https://github.com/Sparsh2321084/line-robot",
    bom: [
      { component: "STM32F411CEU6", quantity: 1, cost: "$5.50" },
      { component: "L298N Motor Driver", quantity: 1, cost: "$3.00" },
      { component: "TCRT5000 IR Sensors", quantity: 8, cost: "$8.00" },
      { component: "N20 Gear Motors", quantity: 2, cost: "$10.00" },
      { component: "3S LiPo Battery (11.1V)", quantity: 1, cost: "$15.00" }
    ],
    powerBudget: {
      active: "1.2A @ 11.1V (motors under load)",
      idle: "150mA @ 11.1V",
      batteryLife: "~25 minutes continuous operation (2200mAh battery)"
    },
    status: "completed"
  },
  {
    id: 3,
    title: "Smart Home Automation Hub",
    subtitle: "Raspberry Pi-based home automation with voice control",
    description: "Centralized home automation system using Raspberry Pi, integrating multiple smart devices with voice control and mobile app interface.",
    longDescription: "A comprehensive home automation solution featuring custom Python backend, RESTful API, and integration with various IoT protocols (MQTT, HTTP, BLE). Supports voice commands through custom wake word detection.",
    techStack: ["Raspberry Pi 4", "Python", "Flask", "MQTT", "React Native", "SQLite", "Docker"],
    features: [
      "Multi-protocol device integration (WiFi, BLE, Zigbee)",
      "Custom voice assistant with wake word detection",
      "Mobile app for remote control (React Native)",
      "Automated routines and scheduling",
      "Energy consumption monitoring",
      "Secure local-first architecture"
    ],
    problemSolved: "Commercial smart home solutions require cloud connectivity and subscriptions. This local-first approach ensures privacy, reliability, and zero recurring costs.",
    image: "/projects/smart-home.jpg",
    schematic: "/projects/smart-home-architecture.png",
    video: "/projects/smart-home-demo.mp4",
    github: "https://github.com/Sparsh2321084/smart-home-hub",
    bom: [
      { component: "Raspberry Pi 4 (4GB)", quantity: 1, cost: "$55.00" },
      { component: "USB Microphone Array", quantity: 1, cost: "$15.00" },
      { component: "Zigbee USB Dongle", quantity: 1, cost: "$25.00" },
      { component: "32GB MicroSD Card", quantity: 1, cost: "$8.00" },
      { component: "Official RPi Power Supply", quantity: 1, cost: "$8.00" }
    ],
    powerBudget: {
      active: "3.5W @ 5V (typical load)",
      idle: "2.8W @ 5V",
      batteryLife: "N/A (powered via adapter)"
    },
    status: "in-progress"
  }
];

// ACHIEVEMENTS DATA - Certifications, Hackathons, Awards
// Add YOUR real achievements here!
export const achievementsData = [
  // HACKATHONS
  {
    id: 1,
    category: 'hackathon',
    title: 'Smart India Hackathon 2024',
    issuer: 'Government of India',
    description: 'Developed IoT-based waste management system. Secured 2nd place among 500+ teams nationwide.',
    date: 'September 2024',
    link: 'https://sih.gov.in', // Add your certificate/project link
    skills: ['ESP32', 'IoT', 'Cloud Integration', 'Team Leadership']
  },
  {
    id: 2,
    category: 'hackathon',
    title: 'MLH Local Hack Day',
    issuer: 'Major League Hacking',
    description: 'Built automated home security system using Raspberry Pi and machine learning for facial recognition.',
    date: 'August 2024',
    link: '#',
    skills: ['Raspberry Pi', 'Python', 'OpenCV', 'ML']
  },

  // TECHNICAL CERTIFICATIONS
  {
    id: 3,
    category: 'certification',
    title: 'Embedded Systems Certification',
    issuer: 'Coursera - University of Colorado',
    description: 'Comprehensive course covering ARM Cortex-M, RTOS, and bare-metal programming.',
    date: 'July 2024',
    link: 'https://coursera.org/verify/XXXXX', // Add your certificate link
    skills: ['ARM', 'RTOS', 'C/C++']
  },
  {
    id: 4,
    category: 'certification',
    title: 'IoT Specialization',
    issuer: 'Udacity',
    description: 'Specialized training in IoT protocols, cloud platforms, and sensor integration.',
    date: 'June 2024',
    link: '#',
    skills: ['MQTT', 'AWS IoT', 'Sensors']
  },
  {
    id: 5,
    category: 'certification',
    title: 'PCB Design Professional',
    issuer: 'Altium Academy',
    description: 'Advanced PCB design, layout optimization, and manufacturing preparation.',
    date: 'May 2024',
    link: '#',
    skills: ['KiCad', 'PCB Design', 'Hardware']
  },

  // NON-TECHNICAL CERTIFICATIONS
  {
    id: 6,
    category: 'certification',
    title: 'Project Management Fundamentals',
    issuer: 'Google',
    description: 'Project planning, team coordination, and Agile methodologies for technical projects.',
    date: 'April 2024',
    link: '#',
    skills: ['Agile', 'Leadership', 'Planning']
  },
  {
    id: 7,
    category: 'certification',
    title: 'Technical Writing',
    issuer: 'Technical Writer HQ',
    description: 'Documentation, API guides, and technical communication for engineering projects.',
    date: 'March 2024',
    link: '#',
    skills: ['Documentation', 'Communication']
  },

  // AWARDS & COMPETITIONS
  {
    id: 8,
    category: 'award',
    title: 'Best Innovation Award',
    issuer: 'College Tech Fest 2024',
    description: 'Awarded for innovative approach to low-cost environmental monitoring system.',
    date: 'October 2024',
    link: '#',
    skills: ['Innovation', 'Problem Solving']
  },
  {
    id: 9,
    category: 'competition',
    title: 'Robotics Competition - 1st Place',
    issuer: 'National Robotics Challenge',
    description: 'Line following robot competition. Fastest completion time with 100% accuracy.',
    date: 'September 2024',
    link: '#',
    skills: ['Robotics', 'STM32', 'Control Systems']
  },
  {
    id: 10,
    category: 'award',
    title: 'Dean\'s List Excellence',
    issuer: 'University Name',
    description: 'Recognized for outstanding academic performance in Electronics Engineering.',
    date: 'August 2024',
    link: null, // No link available
    skills: null // No specific skills
  }
];

export const skillsData = {
  hardware: [
    { name: "ESP32/ESP8266", level: 95, icon: "🔌" },
    { name: "STM32 (ARM Cortex)", level: 90, icon: "⚡" },
    { name: "Raspberry Pi", level: 85, icon: "🥧" },
    { name: "Arduino", level: 95, icon: "🤖" },
    { name: "PCB Design (KiCad)", level: 80, icon: "🔧" },
    { name: "Sensor Integration", level: 90, icon: "📡" }
  ],
  software: [
    { name: "C/C++ (Embedded)", level: 90, icon: "💻" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "MQTT/IoT Protocols", level: 85, icon: "📨" },
    { name: "FreeRTOS", level: 75, icon: "⚙️" },
    { name: "Git/Version Control", level: 90, icon: "📚" },
    { name: "Linux/Shell Scripting", level: 80, icon: "🐧" }
  ],
  tools: [
    { name: "Logic Analyzer", level: 85, icon: "📊" },
    { name: "Oscilloscope", level: 80, icon: "〰️" },
    { name: "Multimeter", level: 95, icon: "⚡" },
    { name: "Soldering", level: 90, icon: "🔥" },
    { name: "3D Printing (Fusion 360)", level: 75, icon: "🖨️" },
    { name: "Power Analysis", level: 85, icon: "🔋" }
  ],
  protocols: [
    { name: "I2C", level: 90 },
    { name: "SPI", level: 90 },
    { name: "UART", level: 95 },
    { name: "WiFi", level: 85 },
    { name: "Bluetooth/BLE", level: 80 },
    { name: "LoRa", level: 70 }
  ]
};

export const galleryData = [
  {
    id: 1,
    title: "Custom ESP32 PCB - Top View",
    category: "pcb",
    image: "/gallery/pcb-top.jpg",
    description: "4-layer PCB with optimized power distribution"
  },
  {
    id: 2,
    title: "Custom ESP32 PCB - Bottom View",
    category: "pcb",
    image: "/gallery/pcb-bottom.jpg",
    description: "Ground plane and signal routing"
  },
  {
    id: 3,
    title: "IoT System Schematic",
    category: "schematic",
    image: "/gallery/schematic-1.png",
    description: "Complete system architecture and connections"
  },
  {
    id: 4,
    title: "Logic Analyzer Trace",
    category: "debug",
    image: "/gallery/logic-trace.png",
    description: "I2C communication timing analysis"
  },
  {
    id: 5,
    title: "Robot Assembly",
    category: "assembly",
    image: "/gallery/robot-assembly.jpg",
    description: "Complete robot with sensors and motors"
  },
  {
    id: 6,
    title: "3D Printed Enclosure",
    category: "cad",
    image: "/gallery/enclosure.jpg",
    description: "Custom enclosure designed in Fusion 360"
  }
];
