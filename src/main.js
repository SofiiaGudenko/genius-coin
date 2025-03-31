class GeniusCoinApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupCoinEffects();
    this.initAnimations();
    this.initCounter();
  }

  setupCoinEffects() {
    const buyButtons = document.querySelectorAll(".buy-button");
    buyButtons.forEach((button) => {
      button.addEventListener("mousemove", (e) => {
        this.createCoins(e, 5);
      });
    });
  }

  createCoins(e, count) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const coin = document.createElement("div");
        coin.className = "coin";

        const scrollY = window.scrollY || window.pageYOffset;
        const x = e.clientX + (Math.random() * 40 - 20);
        const y = e.clientY + scrollY + (Math.random() * 40 - 20);

        coin.style.left = `${x}px`;
        coin.style.top = `${y}px`;
        coin.style.opacity = "1";
        coin.style.transform = `scale(${Math.random() * 0.7 + 0.5}) rotate(${
          Math.random() * 360
        }deg)`;

        document.body.appendChild(coin);

        const duration = Math.random() * 1 + 0.5;
        const animation = coin.animate(
          [
            {
              top: `${y}px`,
              opacity: 1,
              transform: `scale(${Math.random() * 0.7 + 0.5}) rotate(${
                Math.random() * 360
              }deg)`,
            },
            {
              top: `${y + 150}px`,
              opacity: 0,
              transform: `scale(0.3) rotate(${Math.random() * 360}deg)`,
            },
          ],
          { duration: duration * 1000 }
        );

        animation.onfinish = () => coin.remove();
      }, i * 100);
    }
  }

  initAnimations() {
    document.addEventListener("DOMContentLoaded", () => {
      this.animateHeroElements();
      this.initScrollAnimation();
      this.initFooterAnimation();
      this.setupFeatureCards();
      this.initSmoothScroll();
    });
  }

  animateHeroElements() {
    const elements = document.querySelectorAll(".logo, .slogan, .buttons");
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  initScrollAnimation() {
    const animatedElements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  initFooterAnimation() {
    const footerContent = document.querySelector(".footer__content");
    if (!footerContent) return;

    const footerElements = document.querySelectorAll(".reveal-element");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            footerElements.forEach((el) => el.classList.add("visible"));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(footerContent);
  }

  setupFeatureCards() {
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card, index) => {
      card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
  }

  // initCounter() {
  //   const counter = document.querySelector('.burn-counter .counter');
  //   const progressBar = document.getElementById('burnProgress');
  //   const progressText = document.getElementById('burnProgressText');

  //   if (!counter || !progressBar || !progressText) return;

  //   let currentCount = 42069000;
  //   let burnedPercent = 5.8;
  //   counter.textContent = this.formatNumber(currentCount);
  //   progressBar.style.width = `${burnedPercent}%`;
  //   progressText.textContent = `${burnedPercent.toFixed(1)}% от общей эмиссии`;

  //   this.updateCounter(counter, progressBar, progressText, currentCount, burnedPercent);
  // }

  // formatNumber(num) {
  //   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  // updateCounter(counter, progressBar, progressText, currentCount, burnedPercent) {
  //   const burnAmount = Math.floor(Math.random() * 5000) + 1000;
  //   const startValue = parseInt(counter.textContent.replace(/\D/g, '')) || 0;
  //   currentCount = startValue + burnAmount;

  //   burnedPercent += (Math.random() * 0.1 - 0.05);
  //   burnedPercent = Math.max(5, Math.min(8, burnedPercent));

  //   this.animateValue(counter, startValue, currentCount, 1000);
  //   this.animateProgress(progressBar, progressText, burnedPercent);

  //   setTimeout(() => {
  //     this.updateCounter(counter, progressBar, progressText, currentCount, burnedPercent);
  //   }, 3000 + Math.random() * 3000);
  // }

  // animateValue(element, start, end, duration) {
  //   let startTimestamp = null;
  //   const step = (timestamp) => {
  //     if (!startTimestamp) startTimestamp = timestamp;
  //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //     const value = Math.floor(progress * (end - start) + start);
  //     element.textContent = this.formatNumber(value);
  //     if (progress < 1) {
  //       window.requestAnimationFrame(step);
  //     }
  //   };
  //   window.requestAnimationFrame(step);
  // }

  // animateProgress(bar, textElement, targetPercent) {
  //   const startPercent = parseFloat(bar.style.width) || 0;
  //   const startTime = performance.now();
  //   const duration = 1000;

  //   const update = (currentTime) => {
  //     const elapsed = currentTime - startTime;
  //     const progress = Math.min(elapsed / duration, 1);
  //     const currentPercent = startPercent + (targetPercent - startPercent) * progress;

  //     bar.style.width = `${currentPercent}%`;
  //     textElement.textContent = `${currentPercent.toFixed(1)}% от общей эмиссии`;

  //     if (progress < 1) {
  //       window.requestAnimationFrame(update);
  //     }
  //   };

  //   window.requestAnimationFrame(update);
  // }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          if (history.pushState) {
            history.pushState(null, null, targetId);
          } else {
            location.hash = targetId;
          }

          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }
}

new GeniusCoinApp();
