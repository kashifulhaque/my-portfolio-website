<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">
        <g-image
          alt="My logo"
          src="~/assets/namaiwa_dark.png"
          width="128"
          title="ICYMI That's my logo!"
        />
      </g-link>

      <a href="https://bulma.io" target="_blank">
        <g-image
          alt="Bulma logo"
          src="~/assets/head/bulma.png"
          width="128"
          title="Built using Gridsome and Vue.js too!"
        />
      </a>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 72px;
}

.nav__link {
  margin-left: 20px;
}
</style>
