<template>
  <div class="home">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1" />
        <div class="hero-orb hero-orb-2" />
      </div>
      <div class="hero-content">
        <p class="hero-label">Antoni Pietryga</p>
        <h1 class="hero-title">
          Software Developer<br>
          <span class="hero-accent">which will do</span> the job.
        </h1>
        <p class="hero-desc">
          Self-taught programmer working with WEB and IoT projects,<br class="hero-br">
          additionally teaching web application programming.
        </p>
        <div class="hero-actions">
          <RouterLink to="/projects" class="btn">See my work</RouterLink>
          <RouterLink to="/contact" class="btn btn-ghost">Contact me</RouterLink>
        </div>
      </div>
      <div class="hero-stack">
        <span v-for="s in stack" :key="s" class="hero-stack-tag">{{ s }}</span>
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
import { projects, stack, home } from '../content.js'

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
  display: flex; flex-direction: column; justify-content: center;
  padding: calc(var(--nav-h) + 4rem) clamp(1.5rem, 5vw, 4rem) 5rem;
  position: relative; overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.hero-orb {
  position: absolute; border-radius: 50%;
  filter: blur(120px); opacity: .25;
}
.hero-orb-1 {
  width: 600px; height: 600px; top: -100px; right: -100px;
  background: radial-gradient(circle, #7c6fff, transparent 70%);
}
.hero-orb-2 {
  width: 400px; height: 400px; bottom: -50px; left: -50px;
  background: radial-gradient(circle, #00d4ff, transparent 70%);
}

.hero-content { position: relative; max-width: 800px; }
.hero-label {
  font-size: .8rem; font-weight: 600; letter-spacing: .15em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
}
.hero-title {
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 700; line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-accent { background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-desc { color: var(--muted); font-size: 1.05rem; max-width: 480px; margin-bottom: 2.5rem; }
.hero-br { display: none; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

.hero-stack {
  position: relative; display: flex; flex-wrap: wrap; gap: .5rem;
  margin-top: 4rem; max-width: 700px;
}
.hero-stack-tag {
  font-size: .72rem; font-weight: 500; letter-spacing: .06em; text-transform: uppercase;
  padding: .25rem .6rem; border-radius: 4px;
  border: 1px solid var(--border); color: var(--muted);
  transition: border-color .2s, color .2s;
}
.hero-stack-tag:hover { border-color: var(--accent); color: var(--text); }

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
