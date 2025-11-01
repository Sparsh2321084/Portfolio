# 📘 Portfolio Customization Guide

This guide will help you personalize your portfolio with your own content, images, and information.

## 🎯 Step-by-Step Customization

### 1. Update Personal Information

#### Hero Section (`src/components/Hero.jsx`)

**Lines to update:**
```jsx
// Line 29-31: Update your name
<h1 className="hero-title">
  Hi, I'm <span className="gradient-text">Sparsh</span>
</h1>

// Line 37-39: Update your title
<h2 className="hero-subtitle">
  Embedded Systems Engineer & IoT Builder
</h2>

// Line 45-49: Update your description
<p className="hero-description">
  Your custom description here...
</p>

// Line 10-12: Update social links
const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/YourUsername', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: <FaTelegram />, url: 'https://t.me/yourusername', label: 'Telegram' }
];
```

### 2. Add Your Projects

#### Project Data (`src/data/portfolioData.js`)

**Template for adding a new project:**
```javascript
{
  id: 4, // Increment the ID
  title: "Your Project Name",
  subtitle: "One-line technical description",
  description: "Brief 2-3 sentence description of the project",
  longDescription: "Detailed explanation of the project, its architecture, and implementation",
  techStack: ["ESP32", "Python", "MQTT", "etc"],
  features: [
    "Feature 1 description",
    "Feature 2 description",
    "Feature 3 description",
    // Add 4-6 features
  ],
  problemSolved: "Explain what real-world problem this solves",
  image: "/projects/your-image.jpg",
  schematic: "/projects/your-schematic.png",
  video: "/projects/your-demo.mp4",
  github: "https://github.com/yourusername/project-repo",
  bom: [
    { component: "Component Name", quantity: 1, cost: "$10.00" },
    // Add all major components
  ],
  powerBudget: {
    active: "180mA @ 3.3V",
    sleep: "85µA @ 3.3V",
    batteryLife: "~45 days (with conditions)"
  },
  status: "deployed" // or "completed" or "in-progress"
}
```

### 3. Update Skills

#### Skills Data (`src/data/portfolioData.js`)

**Modify skill levels (0-100):**
```javascript
hardware: [
  { name: "Your Platform", level: 90, icon: "🔌" },
  // Add/remove platforms as needed
],
software: [
  { name: "Your Language", level: 85, icon: "💻" },
  // Add/remove languages
],
tools: [
  { name: "Your Tool", level: 80, icon: "🔧" },
  // Add/remove tools
],
protocols: [
  { name: "Protocol Name", level: 85 },
  // Add/remove protocols
]
```

### 4. Add Gallery Items

#### Gallery Data (`src/data/portfolioData.js`)

**Template:**
```javascript
{
  id: 7,
  title: "Image Title",
  category: "pcb", // or "schematic", "debug", "assembly", "cad"
  image: "/gallery/your-image.jpg",
  description: "Brief description of the image"
}
```

**Category options:**
- `pcb` - PCB designs (top/bottom views)
- `schematic` - Circuit schematics
- `debug` - Logic analyzer traces, oscilloscope captures
- `assembly` - Physical assembly photos
- `cad` - 3D CAD renders, enclosures

### 5. Update Contact Information

#### Contact Component (`src/components/Contact.jsx`)

**Lines to update:**
```jsx
// Line 22-41: Update contact info
const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'YourUsername',
    link: 'https://github.com/YourUsername'
  },
  // Update LinkedIn and Telegram
];
```

### 6. Add Images to Your Portfolio

#### Create folder structure:
```
public/
├── projects/
│   ├── project1-main.jpg
│   ├── project1-schematic.png
│   ├── project1-demo.mp4
│   ├── project2-main.jpg
│   └── ...
├── gallery/
│   ├── pcb-top-1.jpg
│   ├── pcb-bottom-1.jpg
│   ├── schematic-1.png
│   ├── logic-trace-1.png
│   ├── assembly-1.jpg
│   └── ...
└── resume.pdf
```

#### Image Guidelines:
- **Format**: JPG for photos, PNG for schematics
- **Size**: Max 2MB per image (compress using TinyPNG)
- **Dimensions**: 
  - Project images: 1200x800px
  - Gallery images: 800x600px
  - Keep aspect ratio 4:3 or 16:9

### 7. Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `/public/` folder
4. The download button will automatically work

### 8. Customize Colors (Optional)

#### Main color palette:

**Current gradient:**
- Primary: `#667eea` (blue-purple)
- Secondary: `#764ba2` (purple)

**To change colors globally:**

1. Open any `.css` file
2. Find and replace:
   - `#667eea` → Your primary color
   - `#764ba2` → Your secondary color

**Background colors:**
- Dark: `#0f172a`
- Medium: `#1e293b`
- Light: `#334155`

### 9. SEO Optimization

#### Update `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Update these -->
  <title>Your Name - Embedded Systems Engineer</title>
  <meta name="description" content="Your custom description for search engines" />
  <meta name="keywords" content="embedded systems, IoT, robotics, ESP32, STM32" />
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="/og-image.jpg" />
</head>
```

### 10. Favicon

1. Create or generate a favicon
2. Save as `favicon.svg` or `favicon.ico`
3. Place in `/public/` folder

## 🎨 Design Tips

### Project Descriptions
- **Keep it concise**: 2-3 sentences max
- **Highlight impact**: What problem did you solve?
- **Use numbers**: "Reduced power by 40%" vs "Reduced power"
- **Show expertise**: Mention specific tools/techniques

### About Me Section
- **Be authentic**: Show your personality
- **Be specific**: Name exact tools and platforms
- **Show passion**: Why do you love building?
- **Keep it professional**: Avoid overly casual language

### Photography Tips
- **Good lighting**: Natural light or well-lit workspace
- **Clean background**: Remove clutter
- **Multiple angles**: Top, side, detail shots
- **Show scale**: Include familiar objects for reference
- **Document process**: Photos of assembly, debugging

## 🚀 Advanced Customizations

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Connect Contact Form to Backend

The form currently shows a success message. To connect it:

**Option 1: Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: EmailJS**
```bash
npm install emailjs-com
```

### Add More Animations

Use Framer Motion variants for custom animations:
```jsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={variants} initial="hidden" animate="visible">
```

## ✅ Pre-Launch Checklist

Before deploying your portfolio:

- [ ] All personal information updated
- [ ] At least 3 projects added with complete details
- [ ] All images compressed and optimized
- [ ] Resume PDF added and tested
- [ ] Contact links verified and working
- [ ] Tested on mobile devices
- [ ] Tested in different browsers
- [ ] No console errors
- [ ] Fast load time (< 3 seconds)
- [ ] All links work (no 404s)

## 🐛 Common Issues

**Images not showing:**
- Check file path (case-sensitive)
- Ensure images are in `/public/` folder
- Clear browser cache

**Animations not working:**
- Check Framer Motion is installed
- Verify import statements

**Contact form not sending:**
- Currently just shows success message
- Connect to backend service (see Advanced section)

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Verify all file paths
3. Ensure all dependencies are installed
4. Try `npm install` and restart dev server

---

**Good luck with your portfolio! 🎉**
