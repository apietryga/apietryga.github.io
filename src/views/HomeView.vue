<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-label">Antoni Pietryga</p>
        <h1 class="hero-title">Product Builder &amp; Tech Educator</h1>
        <div class="hero-actions">
          <RouterLink to="/projects" class="btn">See my work</RouterLink>
          <RouterLink to="/contact" class="btn btn-ghost">Contact me</RouterLink>
        </div>
      </div>

      <div class="hero-live-header">
        <span class="live-pulse"><span class="live-pulse-dot" /></span>
        currently shipping
      </div>
      <div class="hero-live">
        <a class="live-card" href="https://speedwaygame.online/" target="_blank" rel="noopener">
          <div class="live-card-img">
            <img src="https://speedwaygame.online/images/og-image.jpg" alt="SpeedwayGame" />
            <div class="live-card-caption">
              <h3 class="live-card-name">SpeedwayGame</h3>
              <p class="live-card-tech">bun · colyseus · android</p>
            </div>
          </div>
        </a>
        <a class="live-card" href="https://game.degengames.space/" target="_blank" rel="noopener">
          <div class="live-card-img">
            <img src="https://media.degengames.space/assets/images/main-menu_new-big.png" alt="Degen.gg" />
            <div class="live-card-caption">
              <h3 class="live-card-name">Degen.gg</h3>
              <p class="live-card-tech">bun · vue3 · telegram mini app</p>
            </div>
          </div>
        </a>
        <a class="live-card" href="https://waitlistener.com/" target="_blank" rel="noopener">
          <div class="live-card-img">
            <img src="https://waitlistener.com/og_en.png" alt="Waitlistener" />
            <div class="live-card-caption">
              <h3 class="live-card-name">Waitlistener</h3>
              <p class="live-card-tech">laravel · inertia</p>
            </div>
          </div>
        </a>
      </div>
    </section>

    <!-- CODE -->
    <section class="section feat">
      <div class="feat-inner">
        <div class="feat-text">
          <p class="section-label">Development</p>
          <h2 class="section-title">Code was my<br><span class="grad-text">first love</span></h2>
          <p class="section-desc">
            In 2010, I started Googling in order to create a game. Since then,
            web development has captured me completely.
          </p>
          <RouterLink to="/projects?q=code" class="btn btn-ghost mt">see code projects →</RouterLink>
        </div>
        <div class="feat-cards">
          <div v-for="p in codeProjects" :key="p.url" class="mini-card" @click="go('/projects/' + p.url)">
            <div class="mini-card-img">
              <img :src="'/img/contents/' + p.img" :alt="p.name" loading="lazy" />
            </div>
            <div class="mini-card-body">
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEACHING -->
    <section class="section feat feat-rev">
      <div class="feat-inner">
        <div class="feat-text">
          <p class="section-label">Education</p>
          <h2 class="section-title">Teaching —<br><span class="grad-text">best way to learn</span></h2>
          <p class="section-desc">
            Over 1000 hours of programming and digital skills training.
            From seniors to professional programmers.
          </p>
          <RouterLink to="/projects?q=teaching" class="btn btn-ghost mt">see teaching projects →</RouterLink>
        </div>
        <div class="reviews">
          <div class="reviews-track" :style="trackStyle">
            <div v-for="(r, i) in reviews" :key="i" class="review-card">
              <p class="review-text">"{{ r.content }}"</p>
              <p class="review-name">— {{ r.name }}</p>
            </div>
          </div>
          <div class="reviews-dots">
            <button
              v-for="(_, i) in reviews" :key="i"
              class="dot" :class="{ active: reviewIdx === i }"
              @click="reviewIdx = i"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- BUSINESS -->
    <section class="section biz">
      <div class="biz-inner">
        <div class="biz-text">
          <p class="section-label">Entrepreneurship</p>
          <h2 class="section-title">Business<br><span class="grad-text">is business</span></h2>
          <p class="section-desc">
            In 2018, I started my first business, which resulted in some of the projects
            and a lot of experience featured on this page.
          </p>
          <RouterLink to="/projects?q=business" class="btn btn-ghost mt">see business projects →</RouterLink>
        </div>
        <div class="biz-grid">
          <div v-for="p in bizProjects" :key="p.url" class="biz-card" @click="go('/projects/' + p.url)">
            <img :src="'/img/contents/' + p.img" :alt="p.name" loading="lazy" />
            <div class="biz-card-overlay">
              <h3>{{ p.name }}</h3>
              <p>{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { projects, home } from '../content.js'

const router = useRouter()
const go = path => router.push(path)

const codeProjects = projects.filter(p => p.category.includes('code')).slice(0, 3)
const bizProjects  = projects.filter(p => p.category.includes('business')).slice(0, 4)
const reviews = home.teaching.reviews

const reviewIdx = ref(0)
const trackStyle = computed(() => ({ transform: `translateX(-${reviewIdx.value * 100}%)` }))

// auto-advance reviews
import { onMounted, onUnmounted } from 'vue'
let timer
onMounted(() => { timer = setInterval(() => { reviewIdx.value = (reviewIdx.value + 1) % reviews.length }, 4000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
/* HERO */
.hero {
  min-height: 100vh;
  display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
  padding: calc(var(--nav-h) + 2.5rem) clamp(1.5rem, 5vw, 4rem) 4rem;
  text-align: center;
}

.hero-content {
  display: flex; flex-direction: column; align-items: center;
  max-width: 680px;
}
.hero-label {
  font-size: .78rem; font-weight: 600; letter-spacing: .15em;
  text-transform: uppercase; color: var(--accent); margin-bottom: .5rem;
}
.hero-title {
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 700; line-height: 1.05;
  margin-bottom: 1.75rem;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }

/* LIVE HEADER */
.hero-live-header {
  display: flex; align-items: center; gap: .5rem;
  margin-top: 3.5rem; margin-bottom: .75rem;
  font-size: .72rem; font-weight: 600; letter-spacing: .1em;
  text-transform: uppercase; color: var(--muted);
}
.live-pulse {
  display: flex; align-items: center; justify-content: center;
  width: 18px; height: 18px;
}
.live-pulse-dot {
  display: block; width: 7px; height: 7px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgba(0,220,130,.5);
  animation: live-ring 2s ease-out infinite;
}
@keyframes live-ring {
  0%   { box-shadow: 0 0 0 0 rgba(0,220,130,.5); }
  70%  { box-shadow: 0 0 0 7px rgba(0,220,130,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,220,130,0); }
}

/* LIVE CARDS */
.hero-live {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
  width: 100%; max-width: 960px;
}

.live-card {
  text-decoration: none;
  transition: transform .3s ease;
}
.live-card:hover { transform: translateY(-6px); }

.live-card-img {
  position: relative;
  width: 100%; aspect-ratio: 16/9;
  overflow: hidden; border-radius: 10px;
  background: var(--surface2);
}
.live-card-img img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform .5s ease;
  display: block;
}
.live-card:hover .live-card-img img { transform: scale(1.06); }

.live-card-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: .9rem .85rem .75rem;
  background: linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 100%);
  border-radius: 0 0 10px 10px;
}
.live-card-name {
  font-size: .88rem; font-weight: 600; color: #fff;
}
.live-card-tech { font-size: .68rem; color: rgba(255,255,255,.65); margin-top: .1rem; }

@media (max-width: 700px) {
  .hero-live { grid-template-columns: 1fr; }
}

/* SECTIONS */
.feat { background: var(--surface); }
.feat + .feat { border-top: 1px solid var(--border); }

.feat-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
.feat-rev .feat-inner { direction: rtl; }
.feat-rev .feat-text { direction: ltr; }
.feat-rev .feat-cards { direction: ltr; }
.feat-rev .reviews { direction: ltr; }

.feat-text { display: flex; flex-direction: column; align-items: flex-start; }
.mt { margin-top: 1.5rem; }

.grad-text { background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* MINI CARDS */
.feat-cards { display: flex; flex-direction: column; gap: 1rem; }
.mini-card {
  display: flex; gap: 1rem; align-items: center;
  padding: 1rem; border-radius: var(--radius);
  border: 1px solid var(--border); background: var(--bg);
  cursor: pointer; transition: border-color .2s, transform .2s;
}
.mini-card:hover { border-color: rgba(124,111,255,.4); transform: translateX(4px); }
.mini-card-img { width: 64px; height: 64px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
.mini-card-img img { width: 100%; height: 100%; object-fit: cover; }
.mini-card-body h3 { font-size: .95rem; font-weight: 600; margin-bottom: .2rem; }
.mini-card-body p { font-size: .82rem; color: var(--muted); }

/* REVIEWS */
.reviews { overflow: hidden; border-radius: var(--radius); }
.reviews-track { display: flex; transition: transform .4s cubic-bezier(.4,0,.2,1); }
.review-card {
  min-width: 100%; padding: 2rem;
  background: var(--surface2); border-radius: var(--radius);
  border: 1px solid var(--border);
}
.review-text { font-size: 1rem; line-height: 1.7; color: var(--text); margin-bottom: 1.2rem; font-style: italic; }
.review-name { font-size: .8rem; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: .08em; }
.reviews-dots { display: flex; gap: .5rem; margin-top: 1rem; justify-content: center; }
.dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--border); transition: background .2s, transform .2s;
}
.dot.active { background: var(--accent); transform: scale(1.4); }

/* BUSINESS */
.biz { background: var(--bg); }
.biz-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
.biz-text { display: flex; flex-direction: column; align-items: flex-start; position: sticky; top: calc(var(--nav-h) + 2rem); }

.biz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.biz-card {
  position: relative; aspect-ratio: 4/3; overflow: hidden;
  border-radius: var(--radius); cursor: pointer;
  border: 1px solid var(--border);
}
.biz-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.biz-card:hover img { transform: scale(1.05); }
.biz-card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.85), transparent);
  padding: 1.2rem; display: flex; flex-direction: column; justify-content: flex-end;
  opacity: 0; transition: opacity .3s;
}
.biz-card:hover .biz-card-overlay { opacity: 1; }
.biz-card-overlay h3 { font-size: .95rem; font-weight: 600; margin-bottom: .2rem; }
.biz-card-overlay p { font-size: .78rem; color: rgba(255,255,255,.7); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .feat-inner, .feat-rev .feat-inner { grid-template-columns: 1fr; direction: ltr; gap: 2.5rem; }
  .biz-inner { grid-template-columns: 1fr; }
  .biz-text { position: static; }
}
@media (max-width: 480px) {
  .biz-grid { grid-template-columns: 1fr; }
  .hero-br { display: block; }
}
</style>
