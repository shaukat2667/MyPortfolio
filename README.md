# Shaukat Ali - Portfolio Website

A modern, responsive portfolio website showcasing my experience as a Technical Project Manager, AI/ML Engineer, and Senior .NET Engineer.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🎯 Easy navigation with active section highlighting
- 📧 Contact form integration ready
- 🚀 Optimized for GitHub Pages deployment

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Professional summary and key statistics
3. **Experience** - Timeline of professional experience
4. **Projects** - Showcase of signature projects
5. **Skills** - Core competencies and technologies
6. **Contact** - Contact information and form

## Deployment on GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `shaukat-portfolio` (or any name you prefer)
3. Make it public (required for free GitHub Pages)
4. Initialize with a README (optional)

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all files from this folder
3. Commit the changes

**Option B: Using Git Command Line**
```bash
# Navigate to the project folder
cd shaukat-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/shaukat-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **/ (root)** folder
6. Click **Save**
7. Your site will be live at: `https://YOUR_USERNAME.github.io/shaukat-portfolio/`

### Step 4: Update Contact Form (Optional)

If you want to use the contact form:

1. Sign up at [Formspree](https://formspree.io/) (free tier available)
2. Create a new form
3. Copy the form ID
4. Open `index.html`
5. Find the contact form and replace `YOUR_FORM_ID` with your Formspree form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Uncomment the fetch code in `script.js` (lines with Formspree integration)

Alternatively, you can use:
- [EmailJS](https://www.emailjs.com/)
- Your own backend API
- Or remove the form and keep only contact information

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #1a1a1a;
    --accent-color: #e8f4f8;
    /* ... */
}
```

### Content
- Update personal information in `index.html`
- Modify project details, experience, and skills
- Add or remove sections as needed

### Styling
- All styles are in `styles.css`
- Responsive breakpoints: 768px (tablet), 480px (mobile)

## File Structure

```
shaukat-portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md          # This file
└── assets/            # (Optional) For images, etc.
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lightweight (no heavy frameworks)
- Fast loading times
- Optimized animations
- Lazy loading ready

## License

This project is open source and available for personal use.

## Contact

- **Email:** shaukat2667@gmail.com
- **LinkedIn:** [linkedin.com/in/shaukat-ali-ai-developer](https://www.linkedin.com/in/shaukat-ali-ai-developer/)
- **WhatsApp:** +92 321 6587448

---

Made with ❤️ by Shaukat Ali
