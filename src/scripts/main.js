// Элементы модального окна
const modal = document.getElementById('buyModal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.modal-close');

// Находим ВСЕ кнопки "Купить" (по классу или другим атрибутам)
const buyButtons = document.querySelectorAll('.buy-button'); // Используйте общий класс для всех кнопок

// Функция создания монеток
function createCoins(e, count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const coin = document.createElement('div');
      coin.className = 'coin';
      
      const scrollY = window.scrollY || window.pageYOffset;
      const x = e.clientX + (Math.random() * 40 - 20);
      const y = e.clientY + scrollY + (Math.random() * 40 - 20);
      
      coin.style.left = `${x}px`;
      coin.style.top = `${y}px`;
      coin.style.opacity = '1';
      coin.style.transform = `scale(${Math.random() * 0.7 + 0.5}) rotate(${Math.random() * 360}deg)`;
      
      document.body.appendChild(coin);
      
      const duration = Math.random() * 1 + 0.5;
      const animation = coin.animate(
        [
          { top: `${y}px`, opacity: 1, transform: `scale(${Math.random() * 0.7 + 0.5}) rotate(${Math.random() * 360}deg)` },
          { top: `${y + 150}px`, opacity: 0, transform: `scale(0.3) rotate(${Math.random() * 360}deg)` }
        ], 
        { duration: duration * 1000 }
      );
      
      animation.onfinish = () => coin.remove();
    }, i * 100);
  }
}

// Функция открытия модального окна
function openModal() {
  document.body.style.overflow = 'hidden';
  modal.style.display = 'block';
  
  setTimeout(() => {
    modalOverlay.style.opacity = '1';
    document.querySelector('.modal-container').style.transform = 'translateY(0)';
  }, 10);
}

// Функция закрытия модального окна
function closeModal() {
  document.body.style.overflow = '';
  modalOverlay.style.opacity = '0';
  document.querySelector('.modal-container').style.transform = 'translateY(-20px)';
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

// Назначаем обработчики для КАЖДОЙ кнопки
buyButtons.forEach(button => {
  // Эффект монеток при наведении
  button.addEventListener('mousemove', (e) => {
    createCoins(e, 5);
  });
  
  // Открытие модального окна при клике
  button.addEventListener('click', openModal);
});

// Обработчики закрытия модалки
closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});

// Плавное появление элементов при скролле
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Можно раскомментировать, если нужно анимировать только один раз
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Плавное появление элементов
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.logo, .slogan, .buttons');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Установка начальных стилей для анимации
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    initScrollAnimation()
    
    // Анимация для карточек features
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Анимация для карточек tokenomics
    const tokenCards = document.querySelectorAll('.token-card');
    tokenCards.forEach((card, index) => {
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
});

// Анимация футера
function initFooterAnimation() {
  const footerContent = document.querySelector('.footer__content');
  const footerElements = document.querySelectorAll('.reveal-element');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              
              // Анимация внутренних элементов с задержкой
              footerElements.forEach(el => {
                  el.classList.add('visible');
              });
          }
      });
  }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  });

  if (footerContent) {
      observer.observe(footerContent);
  }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  initFooterAnimation();
  
  // Плавная прокрутка для навигации
  document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });
});

// Плавная прокрутка для навигации
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              // Отключаем стандартное поведение
              if (history.pushState) {
                  history.pushState(null, null, targetId);
              } else {
                  location.hash = targetId;
              }
              
              // Плавная прокрутка
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
}

// Анимация счетчика в секции About
function initAboutBurnCounter() {
  const counter = document.getElementById('aboutBurnCounter');
  const progressBar = document.getElementById('burnProgress');
  const progressText = document.getElementById('burnProgressText');
  
  if (!counter || !progressBar || !progressText) return;
  
  // Устанавливаем начальные значения
  let currentCount = 42069000;
  let burnedPercent = 5.8;
  counter.textContent = formatNumber(currentCount);
  progressBar.style.width = `${burnedPercent}%`;
  progressText.textContent = `${burnedPercent.toFixed(1)}% от общей эмиссии`;
  
  // Функция форматирования числа с разделителями
  function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  // Функция парсинга числа из строки
  function parseNumber(str) {
      return parseInt(str.replace(/\D/g, '')) || 0;
  }
  
  // Функция обновления счетчика
  function updateCounter() {
      // Имитация сжигания токенов
      const burnAmount = Math.floor(Math.random() * 5000) + 1000;
      const startValue = parseNumber(counter.textContent);
      currentCount = startValue + burnAmount;
      
      // Обновление процента сожжения
      burnedPercent += (Math.random() * 0.1 - 0.05);
      burnedPercent = Math.max(5, Math.min(8, burnedPercent));
      
      // Анимация счетчика
      animateValue(counter, startValue, currentCount, 1000);
      
      // Анимация прогресс-бара
      animateProgress(progressBar, progressText, burnedPercent);
      
      // Следующее обновление
      setTimeout(updateCounter, 3000 + Math.random() * 3000);
  }
  
  // Функция анимации чисел
  function animateValue(element, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const value = Math.floor(progress * (end - start) + start);
          element.textContent = formatNumber(value);
          if (progress < 1) {
              window.requestAnimationFrame(step);
          }
      };
      window.requestAnimationFrame(step);
  }
  
  // Функция анимации прогресс-бара
  function animateProgress(bar, textElement, targetPercent) {
      const startPercent = parseFloat(bar.style.width) || 0;
      const startTime = performance.now();
      const duration = 1000;
      
      const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentPercent = startPercent + (targetPercent - startPercent) * progress;
          
          bar.style.width = `${currentPercent}%`;
          textElement.textContent = `${currentPercent.toFixed(1)}% от общей эмиссии`;
          
          if (progress < 1) {
              window.requestAnimationFrame(update);
          }
      };
      
      window.requestAnimationFrame(update);
  }
  
  // Запускаем обновление
  updateCounter();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initAboutBurnCounter);
