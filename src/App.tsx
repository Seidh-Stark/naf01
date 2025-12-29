import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, Github, Mail, Phone, MapPin } from 'lucide-react';
import './portfolio.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Fathima_Nafla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    technical: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Git', level: 85 },
    ],
    languages: [
      { name: 'Sinhala', level: 100 },
      { name: 'English', level: 85 },
    ],
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website with payment integration and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with geolocation and 7-day forecast.',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio with dark mode and smooth animations.',
      technologies: ['React', 'TypeScript', 'CSS3'],
    },
  ];

  return (
    <div className="portfolio">
      <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">
            <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              Nafla.dev
            </a>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <button
                className="theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Hi, I'm <span className="highlight">Fathima Nafla</span>
                </h1>
                <p className="hero-subtitle">Full Stack Developer & Creative Designer</p>
                <p className="hero-description">
                  Passionate about creating beautiful, functional, and user-friendly digital experiences.
                  Specialized in modern web technologies and responsive design.
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                    Get in Touch
                  </button>
                  <button className="btn btn-secondary" onClick={handleDownloadResume}>
                    <Download size={18} />
                    Download Resume
                  </button>
                </div>
                <div className="social-links">
                  <a href="https://github.com/TMCB-2025" target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={20} />
                  </a>
                  <a href="mailto:Fathimanafla882@gmail.com" className="social-link">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-placeholder">FN</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Full Stack Developer based in Galle, Sri Lanka, with a strong foundation in
                  both front-end and back-end technologies. I love turning complex problems into simple,
                  beautiful, and intuitive designs.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or learning about the latest trends in web development.
                </p>
              </div>
              <div className="about-info">
                <div className="info-item">
                  <Mail className="info-icon" size={20} />
                  <div>
                    <span className="info-label">Email</span>
                    <a href="mailto:Fathimanafla882@gmail.com">Fathimanafla882@gmail.com</a>
                  </div>
                </div>
                <div className="info-item">
                  <Phone className="info-icon" size={20} />
                  <div>
                    <span className="info-label">Phone</span>
                    <a href="tel:0759399144">0759399144</a>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin className="info-icon" size={20} />
                  <div>
                    <span className="info-label">Address</span>
                    <span>529, Heli Road, Haliwela, Galle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="education">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Bachelor of Science in Computer Science</h3>
                  <p className="timeline-subtitle">University of Sri Lanka</p>
                  <p className="timeline-date">2020 - 2024</p>
                  <p>Focused on web development, software engineering, and database management systems.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Advanced Level Education</h3>
                  <p className="timeline-subtitle">Mathematics Stream</p>
                  <p className="timeline-date">2018 - 2020</p>
                  <p>Specialized in Mathematics, Physics, and Information Technology.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Certifications</h3>
                  <p className="timeline-subtitle">Online Learning Platforms</p>
                  <p className="timeline-date">2021 - Present</p>
                  <ul>
                    <li>Full Stack Web Development - Udemy</li>
                    <li>React Advanced Concepts - Coursera</li>
                    <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Skills & Expertise</h2>

            <div className="skills-grid">
              <div className="skills-category">
                <h3 className="skills-category-title">Technical Skills</h3>
                <div className="skills-list">
                  {skills.technical.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-category">
                <h3 className="skills-category-title">Languages</h3>
                <div className="skills-list">
                  {skills.languages.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-number">0{index + 1}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>

            <div className="contact-content">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={6} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>

              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:Fathimanafla882@gmail.com">Fathimanafla882@gmail.com</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:0759399144">0759399144</a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>529, Heli Road<br />Haliwela, Galle</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/TMCB-2025" target="_blank" rel="noopener noreferrer">
                      @TMCB-2025
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Fathima Nafla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
