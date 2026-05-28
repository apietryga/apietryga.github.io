<template>
  <div class="app">
    <!-- Cursor gradient -->
    <div class="blob" ref="blob"></div>
    <!-- Fixed parallax bg orbs -->
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>

    <!-- Topbar (master style) -->
    <header class="nav-header">
      <div class="nav-left">
        <div class="menu">
          <input type="checkbox" id="toggler" v-model="menuOpen">
          <label for="toggler" class="toggler" ref="togglerLabel">
            <div /><div /><div />
          </label>
          <nav @click="menuOpen = false">
            <RouterLink to="/" exact-active-class="router-link-exact-active">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 6.031 6.031">
                <path d="m0 2.9826h6.0312l-3.0575-2.9626zm0.79284 2e-3v3.022h1.5978v-1.4066h1.2392v1.4066h1.5286v-3.022z" fill="currentColor"/>
              </svg>
              <span>Home</span>
            </RouterLink>
            <RouterLink to="/projects">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 7.476 7.476">
                <path d="m0.00496 1.3496-0.004-0.896c0.043-0.253 0.185-0.416 0.462-0.454h3.474c0.206 0.012 0.432 0.158 0.47 0.442v0.908z" fill="currentColor"/>
                <path d="m0 1.57v5.399c-0.001 0.241 0.205 0.442 0.48 0.442h6.499c0.29 0 0.498-0.202 0.497-0.502v-4.836c0.005-0.306-0.253-0.502-0.558-0.5z" fill="currentColor"/>
              </svg>
              <span>Projects</span>
            </RouterLink>
            <RouterLink to="/contact">
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 7.899 7.899">
                <path d="m0 0.147v7.517c0 0.148 0.138 0.286 0.284 0.286h7.32c0.172 0 0.293-0.137 0.294-0.291v-7.499l-3.96 4.814s-3.868-4.84-3.938-4.827z" fill="currentColor"/>
                <path d="m0.033 0 3.889 4.716 3.947-4.716z" fill="currentColor"/>
              </svg>
              <span>Contact</span>
            </RouterLink>
          </nav>
        </div>
      </div>
      <RouterLink class="logo-link" to="/">
        <svg width="2rem" height="2rem" viewBox="0 0 137.63 137.46">
          <g fill="currentColor">
            <path d="m43.227 5.2063 52.73 126.43c84.464-40.872 27.058-157.53-52.73-126.43z"/>
            <path d="m53.734 87.228-21.523-51.449-21.746 51.453z"/>
            <path d="m75.254 137.09-20.461-46.383-45.879-0.0039-2.9258 6.2812c10.471 23.622 36.646 43.469 69.266 40.105z"/>
            <path d="m4.328 92.939 37.172-87.035c-31.381 12.84-50.569 50.759-37.172 87.035z"/>
          </g>
        </svg>
      </RouterLink>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer (master style) -->
    <footer>
      <nav class="footer-nav">
        <div class="footer-col">
          <RouterLink to="/">
            <svg width="2.5rem" height="2.5rem" viewBox="0 0 137.63 137.46">
              <g fill="currentColor">
                <path d="m43.227 5.2063 52.73 126.43c84.464-40.872 27.058-157.53-52.73-126.43z"/>
                <path d="m53.734 87.228-21.523-51.449-21.746 51.453z"/>
                <path d="m75.254 137.09-20.461-46.383-45.879-0.0039-2.9258 6.2812c10.471 23.622 36.646 43.469 69.266 40.105z"/>
                <path d="m4.328 92.939 37.172-87.035c-31.381 12.84-50.569 50.759-37.172 87.035z"/>
              </g>
            </svg>
          </RouterLink>
        </div>
        <div class="footer-col">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/cv">Curriculum Vitae</RouterLink>
        </div>
        <div class="footer-col">
          <RouterLink to="/projects?q=code">Code</RouterLink>
          <RouterLink to="/projects?q=teaching">Teaching</RouterLink>
          <RouterLink to="/projects?q=business">Business</RouterLink>
        </div>
      </nav>
      <div class="footer-copy">
        <p>&copy; apietryga 2023</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const blob = ref(null)
const togglerLabel = ref(null)

const onMouseMove = (e) => {
  if (blob.value) {
    blob.value.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #07080f;
  --surface: #0d0f1e;
  --surface2: #13162a;
  --border: rgba(255,255,255,0.07);
  --text: #e8e8f2;
  --muted: #6b6b8a;
  --accent: #00DC82;
  --accent2: #1DE0B1;
  --accent-grad: linear-gradient(135deg, #00DC82, #1DE0B1);
  --radius: 14px;
  --nav-h: 3rem;
  --footer-h: 170px;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
button { cursor: pointer; border: none; background: none; font: inherit; color: inherit; }

/* Fixed parallax bg orbs */
.bg-orb {
  position: fixed; border-radius: 50%;
  filter: blur(140px); pointer-events: none; z-index: -2;
}
.bg-orb-1 {
  width: 700px; height: 700px; top: -150px; right: -100px;
  background: radial-gradient(circle, #00DC82, transparent 70%);
  opacity: 0.18;
}
.bg-orb-2 {
  width: 500px; height: 500px; top: 55%; left: -120px;
  background: radial-gradient(circle, #1DE0B1, transparent 70%);
  opacity: 0.15;
}
.bg-orb-3 {
  width: 380px; height: 380px; top: 28%; right: 5%;
  background: radial-gradient(circle, #36E4DA, transparent 70%);
  opacity: 0.10;
}

/* CURSOR GRADIENT — softer than original */
.blob {
  width: 500px;
  height: 500px;
  border-radius: 100%;
  background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
  filter: blur(300px);
  opacity: 0.45;
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: -1;
}

/* NAV HEADER */
.nav-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-h);
  background: rgba(7, 8, 15, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-left {
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: var(--text);
}

/* MENU */
.menu {
  display: flex;
  align-items: center;
  position: relative;
  height: var(--nav-h);
}

.menu input[type="checkbox"] { display: none; }

.toggler {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  z-index: 5;
  height: var(--nav-h);
}

.toggler div {
  width: 22px;
  height: 2px;
  background: var(--text);
  transition: transform 0.3s, opacity 0.2s;
}

.menu nav {
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-h));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background: rgba(7, 8, 15, 0.97);
  backdrop-filter: blur(20px);
  transition: top 0.5s;
  z-index: 3;
}

.menu nav a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.2s;
}

.menu nav a:hover,
.menu nav a.router-link-active { color: var(--text); }

/* Hamburger checked state */
#toggler:checked ~ .toggler div:nth-child(1) { transform: translateY(7px) rotate(45deg); }
#toggler:checked ~ .toggler div:nth-child(2) { opacity: 0; }
#toggler:checked ~ .toggler div:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
#toggler:checked ~ nav { top: var(--nav-h); }

/* Desktop: show links inline, hide hamburger */
@media (min-width: 749px) {
  .toggler { display: none !important; }

  .menu nav {
    position: static;
    height: auto;
    flex-direction: row;
    background: transparent;
    backdrop-filter: none;
    gap: 2rem;
    padding: 0 1rem;
    top: auto;
    width: auto;
  }

  .menu nav a {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .menu nav a svg { display: none; }
}

main { min-height: 100vh; }

/* FOOTER */
footer {
  background: #0b0c18;
  border-top: 1px solid var(--border);
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0.25rem 0.5rem 0.5rem;
  width: 100%;
}

.footer-nav {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.footer-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  font-size: 0.9rem;
}

.footer-col a {
  margin-bottom: 0.25rem;
  color: var(--muted);
  transition: color 0.2s;
}

.footer-col a:hover { color: var(--text); }

.footer-copy {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: var(--muted);
}

/* PAGE TRANSITIONS */
.fade-enter-active, .fade-leave-active { transition: opacity .25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* SHARED UTILITIES */
.section { padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem); }
.section-label {
  font-size: .75rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 1rem;
}
.section-title { font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 700; line-height: 1.2; margin-bottom: 1rem; }
.section-desc { color: var(--muted); max-width: 560px; }

.btn {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .7rem 1.6rem; border-radius: 40px;
  font-size: .875rem; font-weight: 600; letter-spacing: .02em;
  background: var(--accent-grad); color: #07080f;
  transition: opacity .2s, transform .2s;
}
.btn:hover { opacity: .85; transform: translateY(-1px); }

.btn-ghost {
  background: none; border: 1px solid var(--border);
  color: var(--muted); transition: border-color .2s, color .2s, transform .2s;
}
.btn-ghost:hover { border-color: var(--accent); color: var(--text); transform: translateY(-1px); }

.tag {
  display: inline-block; padding: .2rem .6rem; border-radius: 4px;
  font-size: .72rem; font-weight: 500; letter-spacing: .04em;
  background: rgba(0,220,130,0.1); color: var(--accent); border: 1px solid rgba(0,220,130,0.2);
}

.grad-text {
  background: var(--accent-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mt { margin-top: 1.5rem; }
</style>
