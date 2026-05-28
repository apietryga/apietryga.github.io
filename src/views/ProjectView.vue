<template>
  <div class="project-page" v-if="project">
    <!-- HERO -->
    <div class="project-hero" :style="heroStyle">
      <div class="project-hero-bg" />
      <div class="project-hero-content">
        <RouterLink to="/projects" class="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
          All Projects
        </RouterLink>
        <div class="project-hero-tags">
          <span v-for="c in project.category.slice(0,5)" :key="c" class="tag">{{ c }}</span>
        </div>
        <h1>{{ project.name }}</h1>
        <p class="project-hero-desc">{{ project.desc }}</p>
        <p class="project-hero-date">{{ project.date }}</p>
      </div>
    </div>

    <div class="project-body">

      <!-- MEDIA -->
      <section class="project-media" v-if="project.media?.length">
        <div class="media-grid" :class="'media-grid-' + Math.min(project.media.length, 3)">
          <template v-for="(m, i) in project.media" :key="i">
            <!-- local image -->
            <div v-if="isImg(m)" class="media-img" @click="lightbox = m">
              <img :src="mediaPath(m)" :alt="project.name" loading="lazy" />
              <div class="media-img-zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
            <!-- youtube embed -->
            <div v-else-if="isYoutube(m)" class="media-video">
              <iframe :src="m" frameborder="0" allowfullscreen loading="lazy" />
            </div>
            <!-- instagram post embed -->
            <div v-else-if="m?.type === 'igpost'" class="media-igpost">
              <iframe
                :src="'https://www.instagram.com/p/' + m.id + '/embed/'"
                frameborder="0" scrolling="no" allowtransparency="true" loading="lazy"
              />
            </div>
            <!-- github / instagram profile / external link -->
            <a v-else-if="isLink(m)" :href="m.href || m" target="_blank" rel="noopener" class="media-link" :class="m?.type === 'instagram' ? 'media-link--ig' : ''">
              <svg v-if="m?.type === 'github'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .269.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <svg v-else-if="m?.type === 'instagram'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>{{ linkLabel(m) }}</span>
            </a>
          </template>
        </div>
      </section>

      <!-- CONTENT -->
      <section class="project-content">
        <div
          v-for="(para, i) in project.content"
          :key="i"
          class="project-para"
          v-html="para"
        />
      </section>

      <!-- NAV -->
      <nav class="project-nav">
        <RouterLink v-if="prev" :to="'/projects/' + prev.url" class="project-nav-item project-nav-prev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M5 12l7 7M5 12l7-7"/></svg>
          <span>
            <small>Previous</small>
            <strong>{{ prev.name }}</strong>
          </span>
        </RouterLink>
        <RouterLink v-if="next" :to="'/projects/' + next.url" class="project-nav-item project-nav-next">
          <span>
            <small>Next</small>
            <strong>{{ next.name }}</strong>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M14 5l7 7-7 7"/></svg>
        </RouterLink>
      </nav>
    </div>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <div class="lightbox" v-if="lightbox" @click="lightbox = null">
        <button class="lightbox-close">✕</button>
        <img :src="mediaPath(lightbox)" />
      </div>
    </Teleport>
  </div>

  <div class="project-not-found" v-else>
    <p>Project not found.</p>
    <RouterLink to="/projects" class="btn">All Projects</RouterLink>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../content.js'

const route = useRoute()
const lightbox = ref(null)

const idx = computed(() => projects.findIndex(p => p.url === route.params.url))
const project = computed(() => projects[idx.value])
const prev = computed(() => idx.value > 0 ? projects[idx.value - 1] : null)
const next = computed(() => idx.value < projects.length - 1 ? projects[idx.value + 1] : null)

const heroStyle = computed(() => ({
  '--project-color': project.value?.color || '#7c6fff',
}))

const isImg    = m => typeof m === 'string' && !m.startsWith('http')
const isYoutube = m => typeof m === 'string' && m.includes('youtube.com/embed')
const isLink   = m => typeof m === 'object' && m?.type !== 'igpost'
const mediaPath = m => m.startsWith('/') || m.startsWith('http') ? m : '/img/contents/' + m

const linkLabel = m => {
  if (m?.type === 'github') return 'GitHub Repository'
  if (m?.type === 'instagram') return '@' + (m.href.replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/$/, ''))
  if (m?.label) return m.label
  if (m?.href) return m.href.replace(/^https?:\/\//, '').split('/')[0]
  return 'External Link'
}
</script>

<style scoped>
.project-page { padding-top: var(--nav-h); }

.project-hero {
  position: relative;
  padding: 4rem clamp(1.5rem, 5vw, 4rem) 3rem;
  overflow: hidden;
}
.project-hero-bg {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(124,111,255,.15), rgba(0,212,255,.08));
  border-bottom: 1px solid var(--border);
}

.project-hero-content { position: relative; max-width: 800px; margin: 0 auto; }

.back-link {
  display: inline-flex; align-items: center; gap: .5rem;
  font-size: .82rem; font-weight: 500; color: var(--muted);
  margin-bottom: 1.5rem; transition: color .2s;
}
.back-link:hover { color: var(--text); }

.project-hero-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1rem; }

.project-hero h1 {
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 700; line-height: 1.15; margin-bottom: .75rem;
}
.project-hero-desc { font-size: 1.05rem; color: var(--muted); max-width: 560px; margin-bottom: .75rem; }
.project-hero-date { font-size: .78rem; color: var(--muted); font-weight: 500; letter-spacing: .06em; }

/* BODY */
.project-body { max-width: 880px; margin: 0 auto; padding: 3rem clamp(1.5rem, 5vw, 4rem) 5rem; }

/* MEDIA */
.project-media { margin-bottom: 3rem; }

.media-grid {
  display: grid;
  gap: 1rem;
  grid-auto-rows: 280px;
}
.media-grid-1 { grid-template-columns: 1fr; }
.media-grid-2 { grid-template-columns: 1fr 1fr; }
.media-grid-3 { grid-template-columns: 1fr 1fr 1fr; }

/* shared: every cell fills its row */
.media-img,
.media-video,
.media-igpost,
.media-link {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  position: relative;
  height: 100%;
}

.media-video iframe,
.media-igpost iframe {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  border: none;
}

.media-img { cursor: zoom-in; }
.media-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .3s; }
.media-img:hover img { transform: scale(1.03); }
.media-img-zoom {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0,0,0,.4); opacity: 0; transition: opacity .2s; color: #fff;
}
.media-img:hover .media-img-zoom { opacity: 1; }

.media-igpost { background: #000; }

.media-link {
  display: flex; align-items: center; justify-content: center; gap: .75rem;
  background: var(--surface); color: var(--accent);
  font-size: .9rem; font-weight: 500;
  transition: border-color .2s, background .2s; text-decoration: none;
}
.media-link:hover { border-color: var(--accent); background: rgba(0,220,130,.06); }
.media-link--ig { color: #c13584; }
.media-link--ig:hover { border-color: #c13584; background: rgba(193,53,132,.06); }

/* CONTENT */
.project-content { margin-bottom: 3rem; }
.project-para {
  font-size: 1rem; line-height: 1.8; color: var(--muted);
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}
.project-para:first-child { padding-top: 0; }
.project-para:last-child { border-bottom: none; }
.project-para :deep(a) { color: var(--accent); text-decoration: underline; }
.project-para :deep(b) { color: var(--text); }
.project-para :deep(h3) { color: var(--text); margin-bottom: .5rem; }
.project-para :deep(ul) { padding-left: 1.5rem; margin-top: .5rem; }
.project-para :deep(li) { margin-bottom: .25rem; }

/* NAV */
.project-nav {
  display: flex; gap: 1rem; flex-wrap: wrap;
  border-top: 1px solid var(--border); padding-top: 2rem;
  justify-content: space-between;
}
.project-nav-item {
  display: flex; align-items: center; gap: .75rem;
  padding: 1rem 1.25rem; border-radius: var(--radius);
  border: 1px solid var(--border); flex: 1;
  min-width: 160px; transition: border-color .2s;
}
.project-nav-item:hover { border-color: var(--accent); }
.project-nav-item span { display: flex; flex-direction: column; gap: .1rem; }
.project-nav-item small { font-size: .72rem; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
.project-nav-item strong { font-size: .9rem; font-weight: 600; }
.project-nav-next { justify-content: flex-end; text-align: right; }
.project-nav-next span { align-items: flex-end; }

/* LIGHTBOX */
.lightbox {
  position: fixed; inset: 0; z-index: 999;
  background: rgba(0,0,0,.92); backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
  padding: 2rem; cursor: zoom-out;
}
.lightbox img { max-width: 100%; max-height: 90vh; border-radius: var(--radius); }
.lightbox-close {
  position: absolute; top: 1.5rem; right: 1.5rem;
  font-size: 1.4rem; color: var(--muted); transition: color .2s;
}
.lightbox-close:hover { color: var(--text); }

.project-not-found {
  padding-top: calc(var(--nav-h) + 5rem); text-align: center;
  display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
  color: var(--muted);
}

@media (max-width: 640px) {
  .media-grid-2, .media-grid-3 { grid-template-columns: 1fr; }
  .media-video { grid-column: span 1; }
}
</style>
