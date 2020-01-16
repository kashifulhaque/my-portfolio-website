<template>
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

      <div class="message-container" v-for="myWork in myWorks" v-bind:key="myWork.link">
        <div class="message-body">
          {{ myWork.upperText }}
          <strong>
            <a :href="myWork.link" target="_blank" class="is-size-5 has-text-link" rel="noreferrer">{{ myWork.linkTitle }}</a>
          </strong>
          {{ myWork.lowerText }}
        </div>
        <br />
      </div>

    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myWorks: [
        {
          upperText: "Developed an Android app",
          link: "http://bit.ly/tkzymealy",
          linkTitle: "Mealy ↗",
          lowerText:
            "which reduced manual work by over 80% and errors in meal management at Carmichael Hostel, University of Calcutta."
        },
        {
          upperText: "Built an E-commerce website",
          link: "http://cottongallery.in",
          linkTitle: "Cotton Gallery ↗",
          lowerText:
            "which helped the shop owner to grow beyond the local area."
        },
        {
          upperText: "Developed an Android app",
          link: "https://play.google.com/store/apps/details?id=tkzylabs.mnmlflashlight",
          linkTitle: "mnml flashlight. ↗",
          lowerText:
            "as a satire. But hey, it works as advertised without invading your privacy! Thank me later."
        },
        {
          upperText: "Created an Android library",
          link: "https://github.com/kashifulhaque/SarcasticText",
          linkTitle: "SarcasticText ↗",
          lowerText:
            "I was learning how to publish own Android libraries to the world."
        },
        {
          upperText: "Prototyped an Android App",
          link: "https://www.figma.com/proto/jWfymXOhUM57PZofV6iUxi/Carry?node-id=1%3A2&viewport=-1010%2C-734%2C1.2011477947235107&scaling=scale-down",
          linkTitle: "Carry ↗",
          lowerText:
            "for a friend of mine."
        }
      ]
    };
  }
};
</script>

<style scoped>
a:hover, a:visited, a:link, a:active {
  text-decoration: none !important;
}
</style>
