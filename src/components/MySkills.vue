<template>
  <div class="skills">
    <h2 class="title is-size-4">Languages 🌐</h2>
    <div class="languages columns is-centered is-mobile">
      <div class="column is-2">
        <figure class="image is-128" data-tooltip="Java">
          <a :href="mySkills.java" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/langs/java.png" alt="Java" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="JavaScript">
          <a :href="mySkills.javascript" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/langs/js.png" alt="JavaScript" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="Kotlin">
          <a :href="mySkills.kotlin" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/langs/kotlin.png" alt="Kotlin" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="C++">
          <a :href="mySkills.cpp" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/langs/cpp.png" alt="C++" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="HTML">
          <a :href="mySkills.html" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/html.png" alt="HTML" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="CSS">
          <a :href="mySkills.css" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/css.png" alt="CSS" />
          </a>
        </figure>
      </div>
    </div>

    <hr />

    <h2 class="title is-size-4">Technologies 🌠</h2>
    <div class="languages columns is-centered is-mobile">
      <div class="column is-2">
        <figure class="image is-128" data-tooltip="Firebase">
          <a :href="mySkills.firebase" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/firebase.png" alt="Firebase" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="Node.js">
          <a :href="mySkills.node" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/node.png" alt="Node.js" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="DigitalOcean">
          <a :href="mySkills.do" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/digital-ocean.png" alt="DigitalOcean" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="WordPress">
          <a :href="mySkills.wp" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/wordpress.png" alt="WordPress" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128" data-tooltip="GitHub">
          <a :href="mySkills.github" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/github.png" alt="GitHub" />
          </a>
        </figure>
      </div>
    </div>

    <hr />

    <h2 class="title is-size-4">Libraries & Frameworks 📚</h2>
    <br />
    <p class="subtitle is-size-5 is-centered p-text-centre">Web 🌐</p>
    <div class="languages columns is-centered is-mobile">
      <div class="column is-2">
        <figure class="image is-128" data-tooltip="Vue.js">
          <a :href="mySkills.vue" target="_blank" rel="noreferrer">
            <g-image class="is-rounded" src="~/assets/web/vue.png" alt="Vue.js" />
          </a>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mySkills: {
        java: "https://en.wikipedia.org/wiki/Java_(programming_language)",
        javascript: "https://en.wikipedia.org/wiki/JavaScript",
        cpp: "https://en.wikipedia.org/wiki/C%2B%2B",
        kotlin: "https://kotlinlang.org/",
        html: "https://en.wikipedia.org/wiki/HTML",
        css: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
        vue: "https://vuejs.org/",
        node: "https://nodejs.org/en/",
        firebase: "https://firebase.google.com",
        do: "https://www.digitalocean.com/",
        wp: "https://wordpress.org/",
        github: "https://github.com/"
      }
    };
  }
};
</script>

<style scoped>
.p-text-centre {
  text-align: center !important;
}
</style>
