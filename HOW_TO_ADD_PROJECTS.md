# 📘 How to Add Your Real Projects

This guide explains step-by-step how to replace the example projects with your own real projects.

---

## ⚠️ CRITICAL: Fix These First!

**Before deploying your portfolio, you MUST update these placeholder values:**

### **0. Profile Photo** 🚨 NEW!
**Location:** Hero section displays your profile photo

**Steps:**
1. Take a professional photo (or use existing headshot)
2. **Photo guidelines:**
   - Square aspect ratio (1:1) - crop to 800x800px
   - Professional setting (plain background preferred)
   - Good lighting, face clearly visible
   - Dress professionally (business casual or formal)
   - Smile naturally, look at camera
3. **Compress image:** Use [TinyPNG](https://tinypng.com) to reduce file size
4. **Save as:** `/public/profile.jpg`
5. **Test:** Refresh browser to see your photo

**Don't have a professional photo yet?**
- Use a clear selfie with good lighting
- Plain wall background works fine
- Remove distractions from background
- Can update with better photo later!

**No photo at all?**
- Portfolio will show your initial ("S") as fallback
- Still looks professional, but photo is HIGHLY recommended

### **1. Email Address** 🚨
**Location:** `src/components/Contact.jsx` (Line ~23)

```javascript
// ❌ CHANGE THIS:
value: 'your.email@example.com',
link: 'mailto:your.email@example.com'

// ✅ TO YOUR REAL EMAIL:
value: 'sparsh@example.com',
link: 'mailto:sparsh@example.com'
```

### **2. Social Media Links** 🚨
**Location:** `src/components/Hero.jsx` (Line ~9-11)

```javascript
// ❌ CHANGE THESE placeholder '#' links:
{ icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
{ icon: <FaTelegram />, url: '#', label: 'Telegram' }

// ✅ TO YOUR REAL LINKS:
{ icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
{ icon: <FaTelegram />, url: 'https://t.me/yourusername', label: 'Telegram' }

// OR REMOVE them if you don't use these platforms
```

**Also update in:** `src/components/Contact.jsx` (Line ~33-42)

### **3. Resume PDF** 🚨
**Locations:** `src/components/Hero.jsx` (Line ~75) and `src/components/Contact.jsx` (Line ~102)

**Option A - Add Resume:**
1. Save your resume as `resume.pdf`
2. Place it in `/public/` folder
3. Test download link works

**Option B - Remove Buttons (if no resume yet):**
```javascript
// Comment out or delete these lines:
<a href="/resume.pdf" download className="btn btn-secondary">
  <FaFileDownload /> Download Resume
</a>
```

### **4. Contact Form** ⚠️
**Location:** `src/components/Contact.jsx` (Line ~16-26)

**Current form is FAKE** - it doesn't actually send emails!

**Option A - Keep form only if you add backend:**
- Use [FormSpree](https://formspree.io/) (free)
- Use [EmailJS](https://www.emailjs.com/) (free tier available)
- Use [Netlify Forms](https://www.netlify.com/products/forms/) (if deploying to Netlify)

**Option B - Remove form, keep email link:**
- Delete the entire `<form>` section
- Keep only the contact info cards (email, GitHub, etc.)

### **5. Project Images** ⚠️
All projects currently show placeholder icons. Add real images:

1. Take photos of your projects
2. Compress with [TinyPNG](https://tinypng.com)
3. Upload to `/public/projects/` folder
4. Update image paths in `src/data/portfolioData.js`

**Minimum requirement:** 1 main image per project

### **6. Gallery Section** ⚠️
**Location:** `src/components/Gallery.jsx` and `src/data/portfolioData.js`

**Option A - Add images:**
- Add PCB photos, schematics, assembly photos
- Upload to `/public/gallery/`
- Update paths in `portfolioData.js`

**Option B - Hide section temporarily:**
In `src/pages/Home.jsx`, comment out:
```javascript
// <Gallery />
```

---

## � Adding Your Achievements (Certifications & Hackathons)

### **Location:** `src/data/portfolioData.js` - `achievementsData` array

Your portfolio now has a dedicated Achievements section showcasing:
- 🏅 **Hackathons** - Competitions you participated in
- 📜 **Technical Certifications** - Online courses, bootcamps
- 📜 **Non-Technical Certifications** - Soft skills, management
- 🏆 **Awards** - Recognition and prizes
- 🥇 **Competitions** - Robotics, coding contests

### **Achievement Template:**

```javascript
{
  id: 1,                           // Unique number
  category: 'hackathon',           // hackathon | certification | award | competition
  title: 'Smart India Hackathon 2024',
  issuer: 'Government of India',
  description: 'Brief description of what you did/learned',
  date: 'September 2024',          // Month Year format
  link: 'https://certificate-link', // Certificate URL or null
  skills: ['ESP32', 'IoT']         // Related skills or null
}
```

### **Categories Explained:**

**1. Hackathons:**
```javascript
{
  id: 1,
  category: 'hackathon',
  title: 'Smart India Hackathon 2024',
  issuer: 'Government of India',
  description: 'Developed IoT waste management system. Secured 2nd place among 500+ teams.',
  date: 'September 2024',
  link: 'https://sih.gov.in/certificate/123',
  skills: ['ESP32', 'IoT', 'Team Leadership']
}
```

**2. Technical Certifications:**
```javascript
{
  id: 2,
  category: 'certification',
  title: 'Embedded Systems Certification',
  issuer: 'Coursera',
  description: 'ARM Cortex-M programming and RTOS concepts',
  date: 'July 2024',
  link: 'https://coursera.org/verify/ABCD1234',
  skills: ['ARM', 'RTOS', 'C/C++']
}
```

**3. Non-Technical Certifications:**
```javascript
{
  id: 3,
  category: 'certification',
  title: 'Project Management Fundamentals',
  issuer: 'Google',
  description: 'Agile methodologies and team coordination',
  date: 'April 2024',
  link: 'https://grow.google/certificates',
  skills: ['Agile', 'Leadership']
}
```

**4. Awards:**
```javascript
{
  id: 4,
  category: 'award',
  title: 'Best Innovation Award',
  issuer: 'College Tech Fest 2024',
  description: 'Awarded for innovative low-cost monitoring system',
  date: 'October 2024',
  link: null,  // No link available
  skills: ['Innovation']
}
```

**5. Competitions:**
```javascript
{
  id: 5,
  category: 'competition',
  title: 'Robotics Competition - 1st Place',
  issuer: 'National Robotics Challenge',
  description: 'Line following robot - fastest time',
  date: 'September 2024',
  link: '#',
  skills: ['Robotics', 'STM32']
}
```

### **How to Add Your Achievements:**

1. **Open:** `src/data/portfolioData.js`
2. **Find:** `export const achievementsData = [`
3. **Replace** the 10 example achievements with YOUR real ones
4. **Keep the structure** - just change the values

### **Tips:**

**✅ DO:**
- List most recent achievements first
- Include verification links (Coursera, Udemy, etc.)
- Be specific in descriptions (numbers, results)
- Add relevant skills gained
- Include both technical and soft skills

**❌ DON'T:**
- Lie or exaggerate achievements
- Add irrelevant certifications
- Use vague descriptions
- Forget to update dates
- Leave broken links

### **Where to Get Certificate Links:**

- **Coursera:** Profile → Certificates → Share → Copy link
- **Udemy:** Profile → My learning → Certificate → Share
- **HackerRank:** Profile → Certificates → View certificate
- **Google:** Google Career Certificates → Download/Share
- **LinkedIn Learning:** Profile → Certificates → Share

### **If No Link Available:**

```javascript
link: null  // Don't use '#', use null
```

The "View" button won't show if link is null.

---

## �🎯 Quick Overview

**What you need:**
1. Project photos/images
2. Project details (description, tech stack, etc.)
3. Bill of Materials (BOM)
4. Power consumption data
5. GitHub repository link (optional)

**Files you'll edit:**
- `src/data/portfolioData.js` - All project data
- `public/projects/` - Your project images
- `public/gallery/` - Gallery images (PCBs, schematics, etc.)

---

## 📂 Step 1: Prepare Your Project Assets

### **Images Needed Per Project:**

Create a folder for each project:
```
public/
└── projects/
    ├── project-1-main.jpg          (Main hero image)
    ├── project-1-pcb-top.jpg       (PCB top view)
    ├── project-1-pcb-bottom.jpg    (PCB bottom view)
    ├── project-1-schematic.png     (Circuit schematic)
    ├── project-1-assembly.jpg      (Assembly photo)
    ├── project-1-testing.jpg       (Testing/debugging)
    ├── project-1-demo.mp4          (Demo video - optional)
    └── ...more images
```

### **Image Guidelines:**
- **Format**: JPG for photos, PNG for schematics/diagrams
- **Size**: 
  - Main images: 1200x800px (4:3 ratio)
  - Gallery images: 800x600px
  - Max file size: 2MB each (compress using [TinyPNG](https://tinypng.com))
- **Naming**: Use lowercase with hyphens: `iot-system-main.jpg`

---

## 📝 Step 2: Edit Project Data

### **Open `src/data/portfolioData.js`**

You'll see the `projectsData` array. Each project is an object with this structure:

```javascript
{
  id: 1,                    // Unique number (don't change)
  title: "Your Project Name",
  subtitle: "One-line description",
  description: "2-3 sentence overview",
  longDescription: "Detailed explanation (3-4 sentences)",
  techStack: ["ESP32", "MQTT", "Python"],
  features: [
    "Feature 1",
    "Feature 2",
    // Add 5-8 features
  ],
  problemSolved: "Explain what real-world problem this solves",
  image: "/projects/your-main-image.jpg",        // Main image
  schematic: "/projects/your-schematic.png",     // Optional
  video: "/projects/your-demo.mp4",              // Optional
  github: "https://github.com/yourusername/repo",
  bom: [
    { component: "ESP32-DevKit", quantity: 1, cost: "$8.00" },
    // Add all components
  ],
  powerBudget: {
    active: "180mA @ 3.3V",
    sleep: "85µA @ 3.3V",
    batteryLife: "~45 days"
  },
  status: "deployed"  // or "completed" or "in-progress"
}
```

---

## ✍️ Step 3: Replace Example Project #1

### **Example: IoT Environmental Monitoring System**

**Current example data:**
```javascript
{
  id: 1,
  title: "IoT Environmental Monitoring System",
  // ...
}
```

**Replace with YOUR project:**

```javascript
{
  id: 1,  // Keep the ID as 1
  
  // YOUR PROJECT NAME
  title: "Smart Agriculture Irrigation System",
  
  // One-line technical description
  subtitle: "Automated drip irrigation with soil moisture sensing",
  
  // Brief overview (2-3 sentences)
  description: "Solar-powered irrigation controller that monitors soil moisture, temperature, and humidity. Automatically waters plants based on sensor data and weather forecast. Features SMS alerts and remote control via mobile app.",
  
  // Detailed explanation (will appear on detail page)
  longDescription: "A complete IoT-based irrigation system designed for small-scale farms. Uses multiple soil moisture sensors placed at different depths to determine optimal watering schedules. Integrated with weather API to prevent watering before rain. Solar panel with battery backup ensures 24/7 operation even during power outages.",
  
  // List all technologies/tools used
  techStack: [
    "ESP32",
    "Soil Moisture Sensors",
    "DHT22",
    "Solar Panel + Battery",
    "MQTT",
    "Node-RED",
    "React Native App"
  ],
  
  // Key features (add 5-10)
  features: [
    "Real-time soil moisture monitoring at 3 depths",
    "Automatic irrigation based on sensor thresholds",
    "Weather API integration to skip watering before rain",
    "Solar powered with 7-day battery backup",
    "SMS alerts for low water level or system faults",
    "Mobile app for manual control and monitoring",
    "Data logging to SD card for analysis",
    "Low-power deep sleep mode (< 100µA)"
  ],
  
  // What problem does this solve?
  problemSolved: "Manual irrigation wastes 40% more water and requires constant monitoring. This system reduces water consumption by 60% through smart scheduling, saves farmers 2 hours daily, and prevents crop damage from over/under-watering. Cost-effective solution at $75 total vs $500+ commercial systems.",
  
  // YOUR IMAGE PATHS (make sure files exist in /public/projects/)
  image: "/projects/irrigation-main.jpg",
  schematic: "/projects/irrigation-schematic.png",
  video: "/projects/irrigation-demo.mp4",  // Optional
  
  // Your GitHub link
  github: "https://github.com/Sparsh2321084/smart-irrigation",
  
  // Full component list with costs
  bom: [
    { component: "ESP32-DevKitC", quantity: 1, cost: "$8.00" },
    { component: "Capacitive Soil Sensors", quantity: 3, cost: "$15.00" },
    { component: "DHT22 Temp/Humidity", quantity: 1, cost: "$4.50" },
    { component: "12V Water Pump", quantity: 1, cost: "$12.00" },
    { component: "5V Relay Module", quantity: 1, cost: "$3.00" },
    { component: "10W Solar Panel", quantity: 1, cost: "$15.00" },
    { component: "18650 Li-ion (3x)", quantity: 3, cost: "$12.00" },
    { component: "TP4056 Charger", quantity: 1, cost: "$1.50" },
    { component: "Waterproof Enclosure", quantity: 1, cost: "$8.00" }
  ],
  
  // Actual measured power consumption
  powerBudget: {
    active: "220mA @ 3.3V (pump off)",
    sleep: "95µA @ 3.3V",
    batteryLife: "~7 days backup (9000mAh total, sampling every 15 min)"
  },
  
  // Current status
  status: "deployed"  // or "completed" or "in-progress"
}
```

---

## 📸 Step 4: Add Project Images

1. **Take photos of your project:**
   - Main assembly photo (well-lit, clean background)
   - PCB top and bottom views
   - Schematic screenshot from KiCad/Eagle
   - Testing setup with multimeter/oscilloscope
   - Field deployment photos
   - Close-ups of interesting components

2. **Compress images:**
   - Go to [TinyPNG.com](https://tinypng.com)
   - Upload your images
   - Download compressed versions

3. **Upload to `/public/projects/` folder:**
   ```
   public/
   └── projects/
       ├── irrigation-main.jpg           ← Main image
       ├── irrigation-pcb-top.jpg
       ├── irrigation-pcb-bottom.jpg
       ├── irrigation-schematic.png
       ├── irrigation-testing.jpg
       └── irrigation-deployed.jpg
   ```

4. **Update image paths in `portfolioData.js`:**
   ```javascript
   image: "/projects/irrigation-main.jpg",
   ```

---

## 🔄 Step 5: Repeat for All Projects

**For each of your projects:**

1. Add a new object to the `projectsData` array
2. Increment the `id` (1, 2, 3, 4, etc.)
3. Fill in all fields with your data
4. Add images to `/public/projects/`
5. Update image paths

**Example with 4 projects:**

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Smart Irrigation System",
    // ... your data
  },
  {
    id: 2,
    title: "Home Automation Hub",
    // ... your data
  },
  {
    id: 3,
    title: "Line Following Robot",
    // ... your data
  },
  {
    id: 4,
    title: "Air Quality Monitor",
    // ... your data
  }
];
```

---

## 🎓 Step 6: Gather Technical Details

### **Power Budget - How to Measure:**

**What you need:**
- Multimeter or USB power meter
- Your project running

**Steps:**
1. **Active mode**: Measure current while project is working normally
   ```
   Example: 180mA @ 3.3V = 0.594W
   ```

2. **Sleep mode**: Measure during deep sleep (if applicable)
   ```
   Example: 85µA @ 3.3V = 0.0003W
   ```

3. **Calculate battery life:**
   ```
   Battery capacity: 3000mAh
   Average current: 120mA
   Battery life = 3000mAh / 120mA = 25 hours
   ```

### **Bill of Materials - How to Create:**

**Format:**
```javascript
bom: [
  { component: "Component Name", quantity: 1, cost: "$X.XX" },
]
```

**Where to get prices:**
- [Mouser](https://mouser.com)
- [DigiKey](https://digikey.com)
- [Amazon](https://amazon.com)
- [AliExpress](https://aliexpress.com) (for bulk)

**Tips:**
- Include major components only (not resistors/caps unless special)
- Use actual prices you paid
- Add shipping if significant
- Total will auto-calculate

---

## ✅ Step 7: Test Your Changes

1. **Save all files**
2. **Refresh browser** (Ctrl + Shift + R)
3. **Check main page:**
   - Do your project cards show?
   - Are images loading?
   - Do "View Full Details" buttons work?

4. **Check detail pages:**
   - Click "View Full Details" on each project
   - Verify all information displays correctly
   - Check that images load
   - Test "Back to Portfolio" button

---

## 🐛 Troubleshooting

### **Images not showing?**

**Problem:** Image paths are case-sensitive!

**Solution:**
```javascript
// ❌ Wrong
image: "/Projects/MyImage.JPG"

// ✅ Correct
image: "/projects/myimage.jpg"
```

### **Project detail page shows "Project Not Found"?**

**Problem:** Project ID in URL doesn't match data

**Solution:**
- Check the `id` field in your project data matches
- URL uses: `/project/1` → Needs project with `id: 1`

### **Cost total not calculating?**

**Problem:** Cost format must be exact

**Solution:**
```javascript
// ❌ Wrong
cost: "8.00"
cost: "$ 8.00"

// ✅ Correct
cost: "$8.00"
```

---

## 📊 Project Data Checklist

Use this checklist for each project:

- [ ] Unique ID number
- [ ] Project title (clear, descriptive)
- [ ] Subtitle (one-line description)
- [ ] Short description (2-3 sentences)
- [ ] Long description (3-4 sentences)
- [ ] Tech stack (5-10 items)
- [ ] Features list (5-10 items)
- [ ] Problem solved explanation
- [ ] Main image uploaded and path added
- [ ] Schematic uploaded (if available)
- [ ] GitHub link added
- [ ] BOM complete with all major components
- [ ] Power budget measured and added
- [ ] Status updated (deployed/completed/in-progress)

---

## 💡 Pro Tips

### **Make It Stand Out:**

1. **Use Real Numbers:**
   - ❌ "Low power consumption"
   - ✅ "85µA sleep mode, 45-day battery life"

2. **Show Real-World Impact:**
   - ❌ "Smart irrigation system"
   - ✅ "Reduced water usage by 60%, saves $200/month"

3. **Be Specific:**
   - ❌ "Uses sensors"
   - ✅ "3x capacitive soil sensors at 10cm, 20cm, 30cm depths"

4. **Include Challenges:**
   - "Overcame WiFi range issues by implementing mesh network"
   - "Optimized power from 500mA to 85µA through deep sleep"

### **Photo Tips:**

- **Good lighting** - Natural light or softbox
- **Clean background** - Solid color or clean desk
- **Show scale** - Include hand, ruler, or common objects
- **In-field photos** - Show your project deployed/working
- **Process shots** - PCB assembly, debugging, testing

---

## 🎯 Example: Minimal Project Entry

Don't have all details? Start with minimum:

```javascript
{
  id: 1,
  title: "Your Project Name",
  subtitle: "Brief one-line description",
  description: "What it does in 2 sentences.",
  longDescription: "More detailed explanation.",
  techStack: ["ESP32", "Sensors", "etc"],
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  problemSolved: "What problem it solves",
  image: "/projects/placeholder.jpg",  // Use a placeholder initially
  github: "https://github.com/yourusername/repo",
  bom: [
    { component: "Main Component", quantity: 1, cost: "$10.00" }
  ],
  powerBudget: {
    active: "TBD",
    sleep: "N/A",
    batteryLife: "TBD"
  },
  status: "in-progress"
}
```

**Then improve gradually:**
- Add better photos
- Measure actual power consumption
- Complete BOM
- Add more features

---

## 📞 Need Help?

**Common questions:**

**Q: How many projects should I add?**
A: 3-5 detailed projects is perfect. Quality > Quantity.

**Q: I don't have all measurements, what should I do?**
A: Add "TBD" or "To be measured" and update later. Better to launch with something than wait for perfection.

**Q: Can I add projects without images?**
A: Yes, placeholders will show. But add real images ASAP - they make a huge difference!

**Q: Should I include failed projects?**
A: Only if you learned valuable lessons. Focus on successful or in-progress projects.

---

## 🚀 Pre-Deployment Checklist

**Complete this before going live:**

### **Critical (Must Fix):**
- [ ] Professional profile photo added as `/public/profile.jpg` (800x800px recommended)
- [ ] Real email address added (not `your.email@example.com`)
- [ ] Social media links updated or removed (no '#' placeholder links)
- [ ] Resume PDF added to `/public/` folder OR download buttons removed
- [ ] Contact form connected to backend OR removed
- [ ] At least 1 real project image added per project

### **Important (Highly Recommended):**
- [ ] All 3 projects updated with YOUR real project data
- [ ] Project descriptions rewritten in your own words
- [ ] BOM (Bill of Materials) reflects actual components used
- [ ] Power budget shows measured values (not example data)
- [ ] GitHub repository links point to your actual repos
- [ ] Tech stack lists technologies YOU actually used
- [ ] Problem solved section explains YOUR project's impact
- [ ] Achievements section updated with real certifications/hackathons
- [ ] Certificate links verified and working
- [ ] Achievement descriptions are specific and quantified

### **Nice to Have:**
- [ ] Gallery images added (PCBs, schematics, etc.)
- [ ] Project photos are high quality and compressed
- [ ] Skills section percentages reflect your actual skill levels
- [ ] Hero section description customized to your story
- [ ] Favicon updated (currently generic)

### **Testing:**
- [ ] All links work (no 404 errors)
- [ ] Images load properly
- [ ] Navbar smooth scroll works
- [ ] Project detail pages load correctly
- [ ] Responsive on mobile (test on phone)
- [ ] No console errors in browser DevTools

---

## 🎉 You're Ready!

Once you've completed the critical checklist items:
1. Save all files
2. Test thoroughly locally
3. Push to GitHub
4. Deploy to Vercel/Netlify
5. Share your portfolio link!

**Remember:** It's better to launch with 2-3 real projects than 10 fake ones! Quality > Quantity.

**Your portfolio will now showcase YOUR work, not examples!** 🚀

---

**Quick Reference:**
- Project data: `src/data/portfolioData.js`
- Project images: `public/projects/`
- Detail page: `src/pages/ProjectDetail.jsx`
- Main cards: `src/components/Projects.jsx`
