<!--
  Topbar extracted from the site's components/nav/header.vue.
  Nuxt <NuxtLink> is replaced with plain <a>; labels come from the unified
  data (data/i18n/common.js -> nav).
-->
<template>
  <header class="navHeader">
    <a class="linkLogo" href="/" aria-label="Home">
      <Logo />
      <span class="brand">{{ common.common }}</span>
    </a>

    <nav>
      <a href="/">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 6.031 6.031">
          <path d="m0 2.9826h6.0312l-3.0575-2.9626zm0.79284 2e-3v3.022h1.5978v-1.4066h1.2392v1.4066h1.5286v-3.022z" stroke-linecap="round" stroke-linejoin="round" stroke-width=".11559" fill="var(--font-primary-color)"/>
        </svg>
        <span>{{ common.nav.home }}</span>
      </a>
      <a href="/projects">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 7.476 7.476">
          <path d="m0.00496 1.3496-0.0040162-0.89572c0.043515-0.25255 0.18469-0.41558 0.46192-0.45388h3.4744c0.20556 0.012296 0.43234 0.15777 0.46995 0.44183v0.90777z" fill="var(--font-primary-color)"/>
          <path d="m7.8738e-6 1.5698v5.399c-0.0014764 0.24134 0.20483 0.44241 0.47956 0.44235h6.4988c0.2905 5.423e-4 0.49807-0.2021 0.49713-0.50229v-4.8357c0.00508-0.30561-0.25317-0.5015-0.55811-0.50023z" fill="var(--font-primary-color)"/>
        </svg>
        <span>{{ common.nav.projects }}</span>
      </a>
      <a href="/contact">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 7.899 7.899">
          <path d="m4.5916e-6 0.14748v7.5169c-9.25e-4 0.14767 0.13805 0.28619 0.28384 0.28619h7.3205c0.17243-6.71e-4 0.29333-0.13744 0.29436-0.29106v-7.499l-3.96 4.8137s-3.8684-4.8401-3.9387-4.8267z" fill="var(--font-primary-color)"/>
          <path d="m0.033107 0 3.8891 4.716 3.9468-4.7z" fill="var(--font-primary-color)"/>
        </svg>
        <span>{{ common.nav.contact }}</span>
      </a>
    </nav>

    <form class="search" action="/projects" method="get">
      <label for="search" aria-label="Search">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 13.425 13.229">
          <g transform="translate(48.371 -75.481)" stroke="var(--font-primary-color)" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="-42.914" cy="81.458" r="2.9783" fill="none"/>
            <rect transform="rotate(-52.957)" x="-91.356" y="17.877" width=".15743" height="4.127" fill="var(--font-primary-color)"/>
          </g>
        </svg>
      </label>
      <input type="text" name="q" id="search" placeholder="Search" />
    </form>
  </header>
</template>

<script setup>
import { common } from '@data/index.js'
import Logo from './Logo.vue'
</script>

<style scoped>
.navHeader {
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: var(--navHeaderHeight);
  padding: 0 1rem;
  background: var(--dark-primary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.linkLogo {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.linkLogo .brand {
  color: var(--font-primary-color);
  font-weight: 600;
  letter-spacing: .02em;
}
nav {
  display: flex;
  align-items: center;
  gap: .25rem;
  margin-left: auto;
}
nav a {
  display: flex;
  align-items: center;
  gap: .35rem;
  padding: .35rem .6rem;
  border-radius: 1rem;
  color: var(--font-primary-color);
  text-transform: uppercase;
  font-size: .8rem;
}
nav a:hover { background: var(--hover-color); }
nav a:active { background: var(--clickedColor); }
.search {
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 0 .3rem;
  transition: background .3s;
}
.search:hover, .search:focus-within { background: var(--hover-color); }
.search input {
  width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: var(--font-primary-color);
  font-size: .7rem;
  text-transform: uppercase;
  transition: width .4s;
}
.search input:focus { width: 8rem; }

@media (max-width: 600px) {
  nav a span { display: none; }
}
</style>
