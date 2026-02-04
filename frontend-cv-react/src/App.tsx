/*
 * Author: Hỏi Dân IT - @hoidanit
 *
 * This source code is developed for the course
 * "Deploy Siêu Tốc".
 * It is intended for educational purposes only.
 * Unauthorized distribution, reproduction, or modification is strictly prohibited.
 *
 * Copyright (c) 2026 Hỏi Dân IT. All Rights Reserved.
 */

interface Skill {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

interface Project {
  icon: string;
  title: string;
  description: string;
  tech: string[];
  gradient: string;
}

const skills: Skill[] = [
  {
    icon: '🎨',
    title: 'Fullstack Development',
    description: 'Xây dựng hiện đại và responsive',
    tags: ['Frontend', 'Backend', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    description: 'Triển khai và quản lý ứng dụng trên cloud',
    tags: ['Docker', 'AWS', 'CI/CD', 'Kubernetes'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Phát triển ứng dụng di động cross-platform',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  }
];

const projects: Project[] = [
  {
    icon: '📝',
    title: 'Blog Platform',
    description: 'Nền tảng blog với Vue.js và NestJS, hỗ trợ CRUD đầy đủ',
    tech: ['Vue.js', 'NestJS', 'PostgreSQL', 'Docker'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: '🛒',
    title: 'E-Commerce App',
    description: 'Ứng dụng thương mại điện tử với giỏ hàng và thanh toán',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: '📊',
    title: 'Dashboard Analytics',
    description: 'Bảng điều khiển phân tích dữ liệu real-time',
    tech: ['Angular', 'D3.js', 'WebSocket', 'Redis'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  }
];

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Trang chủ</a></li>
            <li><a href="#about">Giới thiệu</a></li>
            <li><a href="#skills">Kỹ năng</a></li>
            <li><a href="#projects">Dự án</a></li>
            <li><a href="#contact">Liên hệ</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>
              Xin chào, tôi là<br />
              <span>Hỏi Dân IT</span>
            </h1>
            <p className="subtitle">
              Full-stack Developer với đam mê tạo ra những sản phẩm web
              chất lượng cao. Ghét Code & Cũng Không Biết Code _._
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Liên hệ ngay
              </a>
              <a href="#projects" className="btn btn-outline">
                Xem dự án
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar">👨‍💻</div>
            <div className="floating-badge badge-1">
              <div className="icon vue">V</div>
              <span>Vue.js</span>
            </div>
            <div className="floating-badge badge-2">
              <div className="icon react">R</div>
              <span>React</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Về <span>Tôi</span></h2>
            <p>Tìm hiểu thêm về kinh nghiệm và hành trình của tôi</p>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="image-wrapper">💼</div>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Năm kinh nghiệm</div>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Dự án hoàn thành</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Học viên</div>
                </div>
              </div>
            </div>
            <div className="about-text">
              <h3>Full-stack Developer & Instructor</h3>
              <p>
                Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển web,
                tôi đã làm việc với nhiều công nghệ và framework khác nhau.
                Từ frontend với React, Vue.js, Angular đến backend với
                Node.js, NestJS, và các hệ thống database.
              </p>
              <p>
                Ngoài công việc development, tôi còn đam mê chia sẻ kiến thức
                thông qua các khóa học online. Mục tiêu của tôi là giúp đỡ
                các developer mới bắt đầu hành trình của họ.
              </p>
              <a href="#contact" className="btn btn-primary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'rgba(99, 102, 241, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Kỹ <span>Năng</span></h2>
            <p>Các công nghệ và kỹ năng tôi sử dụng</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon" style={{ background: skill.gradient }}>
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Dự <span>Án</span></h2>
            <p>Một số dự án tiêu biểu tôi đã thực hiện</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image" style={{ background: project.gradient }}>
                  {project.icon}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href="#">🔗 Demo</a>
                    <a href="#">📂 Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'rgba(99, 102, 241, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Liên <span>Hệ</span></h2>
            <p>Hãy kết nối với tôi</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Thông tin liên hệ</h3>
              <p>
                Nếu bạn có dự án cần phát triển hoặc muốn trao đổi về công nghệ,
                đừng ngần ngại liên hệ với tôi!
              </p>
              <div className="contact-links">
                <a href="mailto:admin@hoidanit.vn" className="contact-link">
                  <div className="icon">📧</div>
                  <div>
                    <strong>Email</strong>
                    <p>admin@hoidanit.vn</p>
                  </div>
                </a>
                <a href="https://hoidanit.vn" className="contact-link">
                  <div className="icon">🌐</div>
                  <div>
                    <strong>Website</strong>
                    <p>hoidanit.vn</p>
                  </div>
                </a>
                <a href="#" className="contact-link">
                  <div className="icon">📍</div>
                  <div>
                    <strong>Địa chỉ</strong>
                    <p>Việt Nam</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input type="text" id="name" placeholder="Nhập họ tên của bạn" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Nhập email của bạn" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tin nhắn</label>
                  <textarea id="message" placeholder="Nhập tin nhắn của bạn"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; Hỏi Dân IT @hoidanit. All rights reserved.</p>
          <div className="footer-links">
            <a target="_blank" href="https://hoidanit.vn">Website</a>
            <a target="_blank" href="https://youtube.com/@hoidanit">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
