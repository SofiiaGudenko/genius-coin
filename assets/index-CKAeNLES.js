(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();class d{constructor(){this.init()}init(){this.setupCoinEffects(),this.initAnimations()}setupCoinEffects(){document.querySelectorAll(".buy-button").forEach(o=>{o.addEventListener("mousemove",e=>{this.createCoins(e,5)})})}createCoins(r,o){for(let e=0;e<o;e++)setTimeout(()=>{const t=document.createElement("div");t.className="coin";const n=window.scrollY||window.pageYOffset,s=r.clientX+(Math.random()*40-20),i=r.clientY+n+(Math.random()*40-20);t.style.left=`${s}px`,t.style.top=`${i}px`,t.style.opacity="1",t.style.transform=`scale(${Math.random()*.7+.5}) rotate(${Math.random()*360}deg)`,document.body.appendChild(t);const c=Math.random()*1+.5,l=t.animate([{top:`${i}px`,opacity:1,transform:`scale(${Math.random()*.7+.5}) rotate(${Math.random()*360}deg)`},{top:`${i+150}px`,opacity:0,transform:`scale(0.3) rotate(${Math.random()*360}deg)`}],{duration:c*1e3});l.onfinish=()=>t.remove()},e*100)}initAnimations(){document.addEventListener("DOMContentLoaded",()=>{this.animateHeroElements(),this.initScrollAnimation(),this.initFooterAnimation(),this.setupFeatureCards(),this.initSmoothScroll()})}animateHeroElements(){document.querySelectorAll(".logo, .slogan, .buttons").forEach((o,e)=>{o.style.opacity="0",o.style.transform="translateY(20px)",o.style.transition="opacity 0.8s ease, transform 0.8s ease",setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},e*200)})}initScrollAnimation(){const r=document.querySelectorAll(".scroll-animate"),o=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("animated")})},{threshold:.1,rootMargin:"0px 0px -100px 0px"});r.forEach(e=>{o.observe(e)})}initFooterAnimation(){const r=document.querySelector(".footer__content");if(!r)return;const o=document.querySelectorAll(".reveal-element");new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("animated"),o.forEach(s=>s.classList.add("visible")))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"}).observe(r)}setupFeatureCards(){document.querySelectorAll(".feature-card").forEach((o,e)=>{o.style.transition=`all 0.5s ease ${e*.1}s`})}initSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(o){o.preventDefault();const e=this.getAttribute("href");if(e==="#")return;const t=document.querySelector(e);t&&(history.pushState?history.pushState(null,null,e):location.hash=e,t.scrollIntoView({behavior:"smooth",block:"start"}))})})}}new d;
