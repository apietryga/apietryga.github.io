<!-- Landing hero section: intro copy (from data/i18n) + a catalog of projects
     grouped by category. The 3D logo object is commented out below. -->
<template>
  <section class="hero">
    <div class="hero__content">
      <p class="hero__eyebrow" data-aos="fade-up">{{ $t('author') }}</p>
      <h1 class="hero__title heroText"
        data-aos="fade-up" data-aos-delay="100"
        v-html="$t('home.title')"></h1>
      <p class="hero__desc"
        data-aos="fade-up" data-aos-delay="200"
        v-html="$t('home.description')"></p>

      <!-- Category catalog: one group per category (order from data/categories.js),
           each tile carries the project's logo, name and status. -->
      <div class="hero__catalog" data-aos="fade-up" data-aos-delay="250">
        <section
          v-for="group in categoryGroups"
          :key="group.key"
          class="catalog__group">
          <h2 class="catalog__heading">{{ group.label }}</h2>
          <ul class="catalog__tiles">
            <li v-for="project in group.projects" :key="project.url" class="tile">
              <router-link :to="'/projects/' + project.url" class="tile__link">
                <img class="tile__logo"
                  :src="'/img/contents/' + project.img"
                  :alt="project.name" loading="lazy" />
                <span class="tile__name">{{ project.name }}</span>
                <span class="tile__status" :data-status="project.status">
                  {{ project.statusLabel }}
                </span>
              </router-link>
            </li>
          </ul>
        </section>
      </div>

      <router-link
        to="/projects" class="btn hero__cta"
        data-aos="fade-up" data-aos-delay="300"
        data-aos-disable="false">{{ $t('home.cta') }}</router-link>
    </div>

    <!-- 3D logo object (loads /img/frontPage/logo_white.glb) — commented out.
    <div class="hero__visual" data-aos="zoom-in">
      <homeLogo3d class="hero__logo" />
    </div>
    -->
  </section>
</template>

<script>
  import categories from '../../../data/categories.js'

  export default {
    data() {
      // Only surface active-ish projects in the hero catalog.
      const VISIBLE_STATUSES = ['online', 'development']
      const projects = (this.$t('projects') || [])
        .filter(p => VISIBLE_STATUSES.includes(p.status))
      // Group projects under each category, in the order declared in categories.js.
      // A category's resolved label is what lands on project.category, so we match on that.
      const categoryGroups = Object.entries(categories)
        .map(([key, label]) => ({
          key,
          label,
          projects: projects.filter(p => (p.category || []).includes(label)),
        }))
        .filter(group => group.projects.length > 0)
      return { categoryGroups }
    },
  }
</script>

<style lang="scss">
.hero{
  align-items: center;
  color:#fff;
  display:flex;
  gap:2rem;
  justify-content: center;
  min-height: 20svh;
  width:100%;
  &__content{
    align-items: flex-end;
    display:flex;
    flex:2;
    flex-direction: column;
    gap:1rem;
    max-width: 1000px;
    padding-left:2rem;
    position: relative;
    text-align: right;
    z-index:1;
  }
  &__eyebrow{
    font-size:1rem;
    margin:0;
    opacity:.8;
  }
  &__desc{
    margin:0;
    max-width: 1000px;
  }
  &__cta{
    margin-top:.5rem;
  }

  /* --- Category catalog --- */
  &__catalog{
    display:flex;
    flex-direction: column;
    gap:1.25rem;
    text-align:left;
    width:100%;
  }
  .catalog{
    &__group{
      display:flex;
      flex-direction: column;
      gap:.6rem;
    }
    &__heading{
      border-bottom:1px solid rgba(255,255,255,.15);
      font-size:.8rem;
      font-weight:700;
      letter-spacing:.12em;
      margin:0;
      opacity:.7;
      padding-bottom:.35rem;
      text-transform: uppercase;
    }
    &__tiles{
      display:flex;
      flex-wrap:wrap;
      gap:.6rem;
      list-style:none;
      margin:0;
      padding:0;
    }
  }
  .tile{
    &__link{
      align-items:center;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.1);
      border-radius:.75rem;
      display:flex;
      gap:.55rem;
      padding:.4rem .7rem .4rem .45rem;
      transition:transform .15s ease, background .15s ease, border-color .15s ease;
      &:hover{
        background:rgba(255,255,255,.1);
        border-color:rgba(255,255,255,.25);
        transform:translateY(-2px);
      }
    }
    &__logo{
      background:#fff;
      border-radius:.4rem;
      flex-shrink:0;
      height:32px;
      object-fit:contain;
      padding:3px;
      width:32px;
    }
    &__name{
      font-size:.85rem;
      font-weight:600;
      white-space:nowrap;
    }
    &__status{
      border-radius:1rem;
      font-size:.6rem;
      font-weight:700;
      letter-spacing:.05em;
      padding:.15rem .5rem;
      text-transform:uppercase;
      white-space:nowrap;
      // status-specific accents
      background:rgba(255,255,255,.12);
      color:#fff;
      &[data-status="online"]{      background:rgba(46,204,113,.22); color:#7ef0a8; }
      &[data-status="development"]{ background:rgba(52,152,219,.22); color:#7ec8f0; }
      &[data-status="completed"]{   background:rgba(155,155,155,.22); color:#d9d9d9; }
      &[data-status="archived"]{    background:rgba(231,76,60,.18);  color:#f0a79e; }
    }
  }
}
@media(max-width: 768px){
  .hero{
    flex-direction: column-reverse;
    min-height: 80vh;
    &__content{
      align-items: center;
      padding:2rem;
      text-align: center;
      .heroText{
        font-size: 1rem;
        padding:0;
        b{
          font-size: 2rem;
        }
      }
    }
    &__catalog{
      text-align:center;
    }
    .catalog__tiles{
      justify-content:center;
    }
  }
}
</style>
