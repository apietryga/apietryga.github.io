<template>
  <Topbar />

  <main class="page">
    <section class="hero">
      <div class="mark"><Logo /></div>
      <div>
        <h1>{{ common.common }}</h1>
        <p class="role">{{ common.author }} — {{ common.role }}</p>
      </div>
      <div class="langSwitch">
        <button :class="{ active: lang === 'en' }" @click="lang = 'en'">EN</button>
        <button :class="{ active: lang === 'pl' }" @click="lang = 'pl'">PL</button>
      </div>
    </section>

    <section>
      <h2>Stack</h2>
      <ul class="stack">
        <li v-for="tech in stack" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section>
      <h2>Projects ({{ projects.length }})</h2>
      <div class="grid">
        <article v-for="p in projects" :key="p.url" class="card">
          <picture>
            <img :src="'/img/contents/' + p.img" :alt="p.name" loading="lazy" />
          </picture>
          <div class="meta">
            <h3>{{ p.name }}</h3>
            <p>{{ p.desc }}</p>
            <ul class="tags">
              <li v-for="c in (p.category || []).slice(0, 4)" :key="c">{{ c }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { common, stack, localizedProjects } from '@data/index.js'
import Topbar from './components/Topbar.vue'
import Logo from './components/Logo.vue'

const lang = ref('en')
// Draft projects (active: false) are shown only on local/dev.
const projects = computed(() => localizedProjects(lang.value, { includeInactive: import.meta.env.DEV }))
</script>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.5rem 1rem 4rem;
}
section { margin-top: 2.5rem; }
h1 { margin: 0; color: var(--font-primary-color); }
h2 { color: var(--font-primary-color); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: .4rem; }
.role { margin: .2rem 0 0; color: var(--accent); }

.hero {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
.hero .mark svg { width: 3rem; height: 3rem; }
.langSwitch { margin-left: auto; display: flex; gap: .3rem; }
.langSwitch button {
  cursor: pointer;
  padding: .35rem .7rem;
  border-radius: .5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: var(--font-primary-color);
  font: inherit;
}
.langSwitch button.active { background: var(--accent); color: #111; border-color: var(--accent); }

.stack, .tags { list-style: none; padding: 0; margin: .8rem 0 0; display: flex; flex-wrap: wrap; gap: .4rem; }
.stack li { padding: .25rem .6rem; border-radius: 1rem; background: rgba(255, 255, 255, 0.06); font-size: .8rem; }
.tags li { font-size: .65rem; color: var(--accent); }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.card {
  display: flex;
  gap: .8rem;
  padding: .8rem;
  border-radius: .8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.card picture {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: .5rem;
  background: var(--accent);
  padding: 8px;
}
.card img { width: 100%; height: 100%; object-fit: contain; }
.card .meta h3 { margin: 0 0 .2rem; color: var(--font-primary-color); font-size: .95rem; }
.card .meta p { margin: 0; font-size: .8rem; }
</style>
