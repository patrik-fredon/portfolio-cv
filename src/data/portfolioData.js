const portfolioData = {
  basic: {
    name: "John Doe",
    title: "Full Stack Developer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Passionate full-stack developer with expertise in building modern web applications. I enjoy solving complex problems and creating user-friendly experiences.",
    avatar: "/images/avatar.jpg",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/johndoe",
        icon: "github"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: "linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/johndoe",
        icon: "twitter"
      }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: ["JavaScript", "React", "Next.js", "HTML5", "CSS3", "TailwindCSS", "TypeScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    }
  ],
  experience: [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Frontend Developer",
      duration: "2021 - Present",
      location: "New York, NY",
      description: "Leading frontend development for SaaS products, implementing new features, and optimizing performance.",
      achievements: [
        "Reduced load time by 40% through code optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Led team of 5 developers for major product redesign"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Full Stack Developer",
      duration: "2018 - 2021",
      location: "Boston, MA",
      description: "Developed full-stack applications for various clients in finance and healthcare sectors.",
      achievements: [
        "Built responsive web applications with React and Node.js",
        "Integrated third-party APIs for payment processing and data analysis",
        "Maintained and optimized MongoDB databases"
      ]
    },
    {
      company: "StartUp Vision",
      position: "Junior Developer",
      duration: "2016 - 2018",
      location: "San Francisco, CA",
      description: "Contributed to developing MVP for early-stage startups.",
      achievements: [
        "Created responsive UI components using React",
        "Collaborated with UX team to implement design systems",
        "Participated in daily scrum meetings and sprint planning"
      ]
    }
  ],
  education: [
    {
      institution: "Massachusetts Institute of Technology",
      degree: "Master of Science in Computer Science",
      duration: "2014 - 2016",
      location: "Cambridge, MA",
      achievements: ["Specialized in Artificial Intelligence", "GPA: 3.9/4.0"]
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2010 - 2014",
      location: "Berkeley, CA",
      achievements: ["Dean's List: 8 semesters", "Graduated with Honors"]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "/images/projects/ecommerce.jpg",
      link: "https://github.com/johndoe/ecommerce-platform",
      demo: "https://ecommerce-platform-demo.vercel.app"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team functionality.",
      technologies: ["Next.js", "Firebase", "TailwindCSS", "React Context API"],
      image: "/images/projects/taskmanager.jpg",
      link: "https://github.com/johndoe/task-manager",
      demo: "https://task-manager-demo.vercel.app"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
      image: "/images/projects/weather.jpg",
      link: "https://github.com/johndoe/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app"
    }
  ],
  testimonials: [
    {
      name: "Jane Smith",
      position: "Product Manager at Tech Innovations",
      text: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      avatar: "/images/testimonials/jane.jpg"
    },
    {
      name: "Michael Johnson",
      position: "CTO at Digital Solutions",
      text: "Working with John was a pleasure. He understands complex requirements quickly and implements elegant solutions.",
      avatar: "/images/testimonials/michael.jpg"
    },
    {
      name: "Sarah Williams",
      position: "Lead Designer at Creative Agency",
      text: "John's ability to translate designs into functional interfaces is remarkable. He's a true professional with excellent communication skills.",
      avatar: "/images/testimonials/sarah.jpg"
    }
  ],
  contact: {
    email: "contact@johndoe.com",
    phone: "+1 (555) 123-4567",
    address: "New York, NY 10001",
    formspreeId: "xvoyqpdw" // Replace with your actual Formspree form ID
  }
};

export default portfolioData; 