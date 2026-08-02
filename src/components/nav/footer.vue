<template>
  <footer>
    <nav>
      <p>
        <RouterLink to="/">
	        <navLogo />
				</RouterLink>
      </p>
      <p>
        <RouterLink to="/">
          <span>{{ $t('nav.home') }}</span>
        </RouterLink>
        <RouterLink to="/projects">
          <span>{{ $t('nav.projects') }}</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span>{{ $t('nav.contact') }}</span> 
        </RouterLink>
        <RouterLink :to="'/cv'">
          Curriculum Vitae
        </RouterLink>
      </p>
      <p>
        <RouterLink :to="{name: 'projects', query: {q: 'app'}}">
          <span>{{ $t('nav.app') }}</span>
        </RouterLink>
        <RouterLink to="/projects?q=education">
          <span>{{ $t('nav.education') }}</span>
        </RouterLink>
        <RouterLink to="/projects?q=video">
          <span>{{ $t('nav.video') }}</span>
        </RouterLink>
        <RouterLink to="/projects?q=game">
          <span>{{ $t('nav.game') }}</span>
        </RouterLink>
      </p>
    </nav>
    <div class="cp">
      <p>&copy; apietryga 2023</p>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer{
  align-items: flex-end;
  background:var(--dark-primary);
  color: var(--font-primary-color);
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  padding:.5rem;
  position:relative;
  bottom:0;
  width:100%;
  nav{
    display:flex;
    height:100%;
    justify-content: flex-start;
    width:100%;
    font-family: var(--font-secondary);
    p{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      padding:1rem;
      font-size:.9rem;
      &:nth-child(2){
        justify-content: flex-end;
      }
      a{
				margin-bottom:.25rem;
        font-size:inherit;
      }
    }
    .cp{
      display:flex;
      justify-content:flex-end;
      align-items:flex-end;
    }
  }
}
</style>