<template>
  <div class="projects-page">
    <div class="projects-header">
      <p class="section-label">Portfolio</p>
      <h1 class="section-title">All Projects</h1>
      <p class="section-desc">{{ filtered.length }} project{{ filtered.length !== 1 ? 's' : '' }} found</p>
    </div>

    <div class="projects-controls">
      <div class="search-wrap">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input v-model="query" type="text" placeholder="Search projects…" class="search-input" />
        <button v-if="query" class="search-clear" @click="query = ''">✕</button>
      </div>
      <div class="filters">
        <button
          v-for="f in filters" :key="f"
          class="filter-btn" :class="{ active: activeFilter === f }"
          @click="activeFilter = f"
        >{{ f }}</button>
      </div>
    </div>

    <div class="projects-grid" v-if="filtered.length">
      <RouterLink
        v-for="p in filtered" :key="p.url"
        :to="'/projects/' + p.url"
        class="project-card"
      >
        <div class="project-card-img">
          <img :src="'/img/contents/' + p.img" :alt="p.name" loading="lazy" />
          <div class="project-card-date">{{ p.date.slice(0,4) }}</div>
        </div>
        <div class="project-card-body">
          <h2>{{ p.name }}</h2>
          <p>{{ p.desc }}</p>
          <div class="project-card-tags">
            <span v-for="c in p.category.slice(0,4)" :key="c" class="tag">{{ c }}</span>
          </div>
        </div>
      </RouterLink>
    </div>

    <div v-else class="projects-empty">
      <p>No projects found for <strong>{{ query || activeFilter }}</strong>.</p>
      <button class="btn btn-ghost" @click="query = ''; activeFilter = 'All'">Clear filters</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../content.js'

const route = useRoute()
const query = ref('')
const activeFilter = ref('All')

const filters = ['All', 'code', 'teaching', 'business', 'IoT', 'movie', 'game']

const filtered = computed(() => {
  let list = projects
  if (activeFilter.value !== 'All') {
    list = list.filter(p => p.category.map(c => c.toLowerCase()).includes(activeFilter.value.toLowerCase()))
  }
  if (query.value.trim()) {
    const q = query.value.toLowerCase()
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.category.map(c => c.toLowerCase()).some(c => c.includes(q)) ||
      p.content.some(c => c.toLowerCase().includes(q))
    )
  }
  return list
})

onMounted(() => {
  if (route.query.q) { query.value = route.query.q }
})
watch(() => route.query.q, v => { if (v) query.value = v })
</script>

<style scoped>
.projects-page {
  padding-top: var(--nav-h);
  min-height: 100vh;
}

.projects-header {
  padding: 4rem clamp(1.5rem, 5vw, 4rem) 2rem;
  max-width: 1200px; margin: 0 auto;
}

.projects-controls {
  padding: 0 clamp(1.5rem, 5vw, 4rem) 2rem;
  max-width: 1200px; margin: 0 auto;
  display: flex; flex-direction: column; gap: 1rem;
}

.search-wrap {
  display: flex; align-items: center; gap: .75rem;
  padding: .75rem 1rem; border-radius: var(--radius);
  border: 1px solid var(--border); background: var(--surface);
  transition: border-color .2s;
  color: var(--muted); max-width: 480px;
}
.search-wrap:focus-within { border-color: var(--accent); color: var(--text); }
.search-input {
  flex: 1; background: none; border: none; outline: none;
  color: var(--text); font: inherit; font-size: .9rem;
}
.search-input::placeholder { color: var(--muted); }
.search-clear { color: var(--muted); font-size: .8rem; transition: color .2s; }
.search-clear:hover { color: var(--text); }

.filters { display: flex; flex-wrap: wrap; gap: .5rem; }
.filter-btn {
  padding: .4rem 1rem; border-radius: 40px;
  font-size: .8rem; font-weight: 500;
  border: 1px solid var(--border); color: var(--muted);
  transition: all .2s;
}
.filter-btn:hover, .filter-btn.active {
  border-color: var(--accent); color: var(--text);
  background: rgba(124,111,255,.12);
}

.projects-grid {
  padding: 0 clamp(1.5rem, 5vw, 4rem) 5rem;
  max-width: 1200px; margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex; flex-direction: column;
  border: 1px solid var(--border); border-radius: var(--radius);
  overflow: hidden; background: var(--surface);
  transition: border-color .25s, transform .25s;
}
.project-card:hover { border-color: rgba(124,111,255,.5); transform: translateY(-4px); }

.project-card-img {
  position: relative; aspect-ratio: 16/9; overflow: hidden;
}
.project-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.project-card:hover .project-card-img img { transform: scale(1.04); }
.project-card-date {
  position: absolute; top: .75rem; right: .75rem;
  font-size: .7rem; font-weight: 600; letter-spacing: .08em;
  background: rgba(0,0,0,.7); backdrop-filter: blur(8px);
  padding: .2rem .5rem; border-radius: 4px; color: var(--muted);
}

.project-card-body { padding: 1.2rem; display: flex; flex-direction: column; gap: .6rem; flex: 1; }
.project-card-body h2 { font-size: 1rem; font-weight: 600; }
.project-card-body > p { font-size: .85rem; color: var(--muted); flex: 1; }
.project-card-tags { display: flex; flex-wrap: wrap; gap: .3rem; margin-top: .2rem; }

.projects-empty {
  padding: 4rem clamp(1.5rem, 5vw, 4rem);
  text-align: center; color: var(--muted);
  display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
}
</style>
