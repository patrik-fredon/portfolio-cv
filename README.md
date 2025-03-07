# ✨ Portfolio CV Template

<div align="center">

![Portfolio CV Banner](https://github.com/patrik-fredon/portfolio-cv/blob/master/public/images/fredon-portfolio-banner.png)

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.1-black)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-blueviolet)](https://www.framer.com/motion/)

**A modern, responsive, and customizable portfolio template for professionals.**

[Demo](https://portfolio-cv-demo.vercel.app) • [Features](#features) • [Installation](#installation) • [Customization](#customization) • [Contributing](#contributing)

</div>

## 📋 Overview

Portfolio CV is a professionally designed, fully responsive portfolio template built with Next.js, JavaScript, and TailwindCSS. It's perfect for developers, designers, and other professionals looking to showcase their skills, experience, and projects in a clean, modern interface.

This template uses the Next.js App Router for optimal performance and SEO, with modern animations powered by Framer Motion to create an engaging user experience.

## ✨ Features

- **📱 Fully Responsive Design** - Looks great on all devices from mobile to desktop
- **🌓 Dark/Light Mode Support** - Automatic theme switching based on user preferences
- **⚡ Optimized Performance** - Built with Next.js App Router for superior loading speeds
- **🎨 Modern UI & Animations** - Smooth, subtle animations with Framer Motion
- **🧩 Component-Based Structure** - Well-organized, maintainable code architecture
- **📝 JSON-Driven Content** - Easy to customize via a single configuration file
- **🔍 SEO Optimized** - Built-in meta tags for better search engine visibility
- **🔄 Interactive Elements** - Engaging UI components for better user experience
- **📊 Comprehensive Sections** - Hero, About, Experience, Skills, Projects, and Contact
- **📬 Contact Form** - Ready-to-use contact form for potential clients or employers
- **🛠️ Easy to Extend** - Add new sections or customize existing ones with minimal effort

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/patrik-fredon/portfolio-cv.git
cd portfolio-cv
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

## 🎨 Customization

### Personal Information

Edit the `src/data/portfolioData.js` file to update your personal information:

```javascript
const portfolioData = {
  basic: {
    name: "Your Name",
    title: "Your Title",
    // ...other info
  },
  // ...other sections
};
```

### Styling

This project uses TailwindCSS for styling. You can customize the colors, fonts, and other design elements by editing:

- **TailwindCSS Configuration** - `tailwind.config.js`
- **Global Styles** - `src/app/globals.css`

### Images

Replace the placeholder images in the `public/images` directory with your own:

- **Profile Image** - `public/images/placeholder-profile.jpg`
- **About Image** - `public/images/about-image.jpg`
- **Project Images** - `public/images/projects/*.jpg`

## 📂 Project Structure

```
portfolio-cv/
│
├── public/                # Static files
│   └── images/            # Images and assets
│
├── src/
│   ├── app/               # Next.js App Router files
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout component
│   │   └── page.js        # Homepage component
│   │
│   ├── components/        # React components
│   │   ├── About.js       # About section
│   │   ├── Contact.js     # Contact section
│   │   ├── Experience.js  # Experience section
│   │   ├── Footer.js      # Footer component
│   │   ├── Header.js      # Header component
│   │   ├── Hero.js        # Hero section
│   │   ├── Projects.js    # Projects section
│   │   └── Skills.js      # Skills section
│   │
│   └── data/              # Data configuration
│       └── portfolioData.js # Portfolio content
│
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
├── README.md              # Project documentation
└── tailwind.config.js     # TailwindCSS configuration
```

## 📱 Responsive Design

The template is fully responsive and optimized for:

- **Mobile devices** - 320px and up
- **Tablets** - 768px and up
- **Desktops** - 1024px and up
- **Large screens** - 1280px and up

## 🚀 Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import your project to Vercel
3. Vercel will detect Next.js and set up the optimal build settings automatically

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bugs, features, or improvements.

## 👏 Acknowledgments

- [Next.js Team](https://nextjs.org/)
- [TailwindCSS Team](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

<div align="center">

Made with ❤️ by [Fredon Bytes](https://github.com/patrik-fredon)

</div>
