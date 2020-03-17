<template>
  <Layout>
    <div class="container">
      <div class="columns is-desktop">
        <MyCard />
        <Summary />
      </div>
    </div>

    <hr />

    <MySkills />

    <br />
    <div class="columns is-desktop">
      <p class="column">
        Rank: 273143 on HackerRank (Mar. 06, 2020)
      </p>

      <span class="column is-narrow">
        <a
          href="https://github.com/kashifulhaque/my-portfolio-website"
          target="_blank"
          rel="noreferrer"
          >Fork me on GitHub 📜</a
        >
      </span>
    </div>

    <br />
    <br />
    <br />
  </Layout>
</template>

<script>
import MyCard from "../components/MyCard.vue";
import Summary from "../components/Summary.vue";
import MySkills from "../components/MySkills.vue";

export default {
  components: {
    MyCard,
    Summary,
    MySkills
  },
  data() {
    return {
      isDarkTheme: false
    };
  },
  methods: {},
  metaInfo: {
    title: "Kashiful Haque • Portfolio"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.column {
  display: flex;
  min-height: 100%;
}

.montserrat-semibold-text {
  font-family: "Montserrat", sans-serif;
}

.source-sans-pro-text {
  font-family: "Source Sans Pro", sans-serif;
}

.josefin-sans-text {
  font-family: "Josefin Sans", sans-serif;
}
</style>
