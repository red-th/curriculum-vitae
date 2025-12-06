/**
 * 主JavaScript文件
 * 实现主题切换、导航菜单、平滑滚动等功能
 */

(function() {
  'use strict';

  // ==================== 主题切换功能 ====================
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // 初始化主题（从localStorage读取或使用系统偏好）
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }
  
  // 更新主题图标
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  // 切换主题
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }
  
  // 监听主题切换按钮
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // 初始化主题
  initTheme();

  // ==================== 移动端导航菜单 ====================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
    
    // 点击导航链接后关闭菜单
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // 点击外部区域关闭菜单
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==================== 平滑滚动 ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || !href) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== 导航栏滚动效果 ====================
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });

  // ==================== 返回顶部按钮 ====================
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==================== 课程列表展开/收起 ====================
  const toggleButtons = document.querySelectorAll('.btn-toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetList = document.getElementById(targetId);
      
      if (targetList) {
        const isHidden = targetList.style.display === 'none';
        targetList.style.display = isHidden ? 'grid' : 'none';
        this.classList.toggle('active');
      }
    });
  });

  // ==================== 技能进度条动画 ====================
  const skillBars = document.querySelectorAll('.skill-progress');
  
  // 使用 Intersection Observer 实现滚动时动画
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
          progressBar.style.width = width;
        }, 100);
        observer.unobserve(progressBar);
      }
    });
  }, observerOptions);
  
  skillBars.forEach(bar => {
    observer.observe(bar);
  });

  // ==================== 邮箱防爬保护 ====================
  const emailLinks = document.querySelectorAll('[data-email]');
  
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.getAttribute('data-email');
      window.location.href = 'mailto:' + email;
    });
  });

  // ==================== 图片加载错误处理 ====================
  const avatarImg = document.getElementById('avatarImg');
  if (avatarImg) {
    avatarImg.addEventListener('error', function() {
      this.style.display = 'none';
      const placeholder = this.nextElementSibling;
      if (placeholder) {
        placeholder.style.display = 'flex';
      }
    });
  }

  // ==================== 页面加载完成后的初始化 ====================
  window.addEventListener('DOMContentLoaded', function() {
    // 添加淡入动画
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });

  // ==================== 控制台提示 ====================
  console.log('%c👋 欢迎查看我的简历网站！', 'color: #2563eb; font-size: 16px; font-weight: bold;');
  console.log('%c💡 提示：这是一个纯 HTML/CSS/JS 构建的网站，无框架依赖', 'color: #64748b; font-size: 12px;');

})();

