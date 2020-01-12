<template>
  <div class="skills">
    <h2 class="title">Languages 🌐</h2>
    <div class="languages columns is-centered is-mobile">
      
      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="Java">
          <a :href="mySkills.java" target="_blank">
            <g-image class="is-rounded" src="~/assets/langs/java.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="JavaScript">
          <a :href="mySkills.javascript" target="_blank">
            <g-image class="is-rounded" src="~/assets/langs/js.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="C++">
          <a :href="mySkills.cpp" target="_blank">
            <g-image class="is-rounded" src="~/assets/langs/cpp.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="HTML">
          <a :href="mySkills.html" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/html.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="CSS">
          <a :href="mySkills.css" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/css.png" />
          </a>
        </figure>
      </div>

    </div>

    <hr />

    <h2 class="title">Technologies 🌠</h2>
    <div class="languages columns is-centered is-mobile">
      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="Firebase">
          <a :href="mySkills.firebase" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/firebase.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="Node.js">
          <a :href="mySkills.node" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/node.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="DigitalOcean">
          <a :href="mySkills.do" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/digital-ocean.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="WordPress">
          <a :href="mySkills.wp" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/wordpress.png" />
          </a>
        </figure>
      </div>

      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="GitHub">
          <a :href="mySkills.github" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/github.png" />
          </a>
        </figure>
      </div>
    </div>

    <hr />

    <h2 class="title">Libraries & Frameworks 📚</h2>
    <br />
    <h3 class="subtitle">Web 🌐</h3>
    <div class="languages columns is-centered is-mobile">
      <div class="column is-2">
        <figure class="image is-128x128" data-tooltip="Vue.js">
          <a :href="mySkills.vue" target="_blank">
            <g-image class="is-rounded" src="~/assets/web/vue.png" />
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

<style>
</style>
