<template>
  <Layout>
    <div class="container">
      <div class="columns is-desktop">
        <div class="column is-narrow">
          <div class="hero box is-light is-bold">
            <div class="hero-body">
              <div class="container">
                <figure class="image is-128x128">
                  <img class="is-rounded" :src="myDetails.myself" />
                </figure>
                <br />

                <h1 class="title montserrat-semibold-text is-size-4">Kashiful Haque</h1>
                <p class="subtitle source-sans-pro-text is-size-6">Web & Android Development</p>
                <h3 class="subtitle source-sans-pro-text is-size-8">
                  <a href="https://github.com/kashifulhaque" target="_blank">GitHub ↗️</a> |
                  <a href="https://www.linkedin.com/in/kashifulhaque" target="_blank">LinkedIn ↗️</a>
                </h3>

                <br />

                <table
                  class="table card is-fullwidth has-background-light has-text-black"
                  style="border-radius: 24px;"
                >
                  <tbody>
                    <tr>
                      <td>
                        📧
                        <a href="mailto:haque.kashiful7@gmail.com">haque.kashiful7@gmail.com</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table
                  class="table card is-fullwidth has-background-light has-text-black"
                  style="border-radius: 24px;"
                >
                  <tbody>
                    <tr>
                      <td>
                        🐤
                        <a href="https://twitter.com/notifkash" target="_blank">@notifkash</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table
                  class="table card is-fullwidth has-background-light has-text-black"
                  style="border-radius: 24px;"
                >
                  <tbody>
                    <tr>
                      <td>
                        📷
                        <a href="https://www.instagram.com/notifkash/" target="_blank">@notifkash</a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <a :href="myDetails.cvURL" target="_blank">
                  <button class="button is-rounded is-link is-fullwidth">Download Resume (PDF)</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <article class="message is-dark">
            <h2 class="montserrat-semibold-text is-size-4">Summary</h2>
            <br />
            <div class="message-body">
              An aspiring prolific full-stack
              <strong>Web</strong> &
              <strong>Android</strong> developer.
            </div>
            <br />
            <div class="message-body">
              Developed an Android app
              <strong>
                <a :href="myWork.mealy" target="_blank">Mealy ↗</a>
              </strong> which reduced manual work by over 80% and errors in meal management at Carmichael Hostel, University of Calcutta.
            </div>
            <br />
            <div class="message-body">
              Built an E-commerce website
              <strong>
                <a :href="myWork.cg" target="_blank">Cotton Gallery ↗</a>
              </strong> which helped the shop owner to grow beyond the local area.
            </div>
            <br />
            <div class="message-body">
              Developed an Android app
              <strong>
                <a :href="myWork.mnml_flashlight" target="_blank">mnml flashlight. ↗</a>
              </strong> as a satire. But hey, it works as advertised without invading your privacy! Thank me later.
            </div>
            <br />
            <div class="message-body">
              Created an Android library
              <strong>
                <a :href="myWork.sarcasticText" target="_blank">SarcasticText ↗</a>
              </strong>. I was learning how to publish own Android libraries to the world.
            </div>
          </article>
        </div>
      </div>
    </div>

    <br />
    <p>
      Currently in development, built using
      <a href="https://gridsome.org/" target="_blank">Gridsome</a> & <a href="https://vuejs.org/" target="_blank">Vue</a>. Hosted on <a href="https://firebase.google.com/" target="_blank">Firebase 🔥</a>
    </p>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: false,
      myDetails: {
        githubURL: "https://github.com/kashifulhaque",
        cvURL:
          "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/resume%2Fcv.pdf?alt=media&token=9da2eae4-ffd5-4fcd-8e03-706f49d3852c",
        myself:
          "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/photos%2Findex%2Fmyself_square.jpg?alt=media&token=9357361c-1a65-4560-87aa-6a582b3cc19b"
      },
      myWork: {
        mealy: "http://bit.ly/tkzymealy",
        cg: "http://cottongallery.in",
        mnml_flashlight:
          "https://play.google.com/store/apps/details?id=tkzylabs.mnmlflashlight",
        sarcasticText: "https://github.com/kashifulhaque/SarcasticText"
      }
    };
  },
  methods: {},
  metaInfo: {
    title: "Portfolio"
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
</style>
