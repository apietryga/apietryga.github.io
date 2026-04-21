<template>
  <div class="app">
    <nav class="nav" :class="{ scrolled: isScrolled }">
      <RouterLink to="/" class="nav-logo">
        <span class="nav-logo-name">apietryga</span>
        <span class="nav-logo-dot">.</span>
      </RouterLink>
      <div class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/projects" active-class="active">Projects</RouterLink>
        <RouterLink to="/contact" active-class="active">Contact</RouterLink>
      </div>
      <button class="nav-burger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span /><span /><span />
      </button>
    </nav>

    <div class="nav-mobile" :class="{ open: menuOpen }" @click="menuOpen = false">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>

    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isScrolled = ref(false)
const menuOpen = ref(false)
const onScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
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
  --accent: #7c6fff;
  --accent2: #00d4ff;
  --accent-grad: linear-gradient(135deg, #7c6fff, #00d4ff);
  --radius: 14px;
  --nav-h: 64px;
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

/* NAV */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: var(--nav-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
  transition: background .3s, border-color .3s;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(7, 8, 15, 0.85);
  backdrop-filter: blur(20px);
  border-color: var(--border);
}

.nav-logo { display: flex; align-items: baseline; gap: 1px; font-size: 1.1rem; font-weight: 700; }
.nav-logo-dot { color: var(--accent); font-size: 1.4rem; line-height: 0; }

.nav-links { display: flex; gap: 2rem; }
.nav-links a {
  font-size: .9rem; font-weight: 500; color: var(--muted);
  transition: color .2s; position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 1px; background: var(--accent-grad);
  transform: scaleX(0); transition: transform .25s;
}
.nav-links a:hover, .nav-links a.active { color: var(--text); }
.nav-links a.active::after { transform: scaleX(1); }

.nav-burger {
  display: none; flex-direction: column; gap: 5px;
  width: 28px; padding: 4px 0;
}
.nav-burger span {
  display: block; height: 2px; background: var(--text);
  transition: transform .25s, opacity .25s;
}
.nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav-mobile {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(7, 8, 15, 0.97);
  backdrop-filter: blur(20px);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2.5rem;
  opacity: 0; pointer-events: none; transition: opacity .25s;
}
.nav-mobile.open { opacity: 1; pointer-events: all; }
.nav-mobile a { font-size: 2rem; font-weight: 700; color: var(--muted); transition: color .2s; }
.nav-mobile a:hover { color: var(--text); }

@media (max-width: 640px) {
  .nav-links { display: none; }
  .nav-burger { display: flex; }
}

main { min-height: 100vh; }

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
  background: var(--accent-grad); color: #fff;
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
  background: rgba(124,111,255,0.12); color: var(--accent); border: 1px solid rgba(124,111,255,0.2);
}
</style>
