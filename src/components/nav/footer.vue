<template>
  <footer>
    <nav>
      <p>
        <NuxtLink to="/">
	        <navLogo />
				</NuxtLink>
      </p>
      <p>
        <NuxtLink to="/">
          <span>{{ $t('nav.home') }}</span>
        </NuxtLink>
        <NuxtLink to="/projects">
          <span>{{ $t('nav.projects') }}</span>
        </NuxtLink>
        <NuxtLink to="/contact">
          <span>{{ $t('nav.contact') }}</span> 
        </NuxtLink>
        <NuxtLink :to="'/cv'">
          Curriculum Vitae
        </NuxtLink>
      </p>
      <p>
        <NuxtLink :to="{name: 'projects', query: {q: 'code'}}">
          <span>{{ $t('nav.code') }}</span> 
        </NuxtLink>
        <NuxtLink to="/projects?q=teaching">
          <span>{{ $t('nav.teaching') }}</span> 
        </NuxtLink>
        <NuxtLink to="/projects?q=business">
          <span>{{ $t('nav.business') }}</span> 
        </NuxtLink>
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