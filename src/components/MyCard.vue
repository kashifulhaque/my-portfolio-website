<template>
  <div class="column is-narrow">
    <div class="hero box is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              :src="myDetails.myself"
              title="Hey! It's me. Hello"
              alt="Picture of Kashiful Haque"
            />
          </figure>
          <br />

          <h1
            class="title josefin-sans-text is-uppercase has-text-light is-size-4"
          >
            {{ myDetails.myName }}
          </h1>
          <p class="subtitle source-sans-pro-text is-size-6">
            {{ myDetails.whatIDo }}
          </p>
          <p
            class="subtitle source-sans-pro-text is-size-6"
            title="I can speak Japanese!"
          >
            {{ myDetails.japanese }}
          </p>
          <h3 class="subtitle source-sans-pro-text is-size-6">
            <a :href="myDetails.githubURL" target="_blank" rel="noreferrer"
              >GitHub ↗</a
            >
            |
            <a :href="myDetails.linkedInURL" target="_blank" rel="noreferrer"
              >LinkedIn ↗</a
            >
          </h3>

          <br />

          <table
            class="table card is-fullwidth has-background-light is-bold"
            style="border-radius: 4px;"
          >
            <tbody>
              <tr>
                <td>
                  <a
                    :href="myDetails.leetcode"
                    target="_blank"
                    title="My LeetCoode profile"
                    class="has-text-dark"
                    rel="noreferrer"
                  >
                    #️⃣ LeetCode ↗
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table card is-fullwidth has-background-light is-bold"
            style="border-radius: 4px;"
          >
            <tbody>
              <tr>
                <td>
                  <a
                    :href="myDetails.hackerrank"
                    target="_blank"
                    title="My Hackerrank profile"
                    class="has-text-dark"
                    rel="noreferrer"
                  >
                    #️⃣ Hackerrank ↗
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table card is-fullwidth has-background-light is-bold"
            style="border-radius: 4px;"
          >
            <tbody>
              <tr>
                <td>
                  <a
                    :href="myDetails.myEmail"
                    title="Mail me please, I love reading them"
                    class="has-text-dark"
                    rel="noreferrer"
                  >
                    📧 haque.kashiful7@gmail.com ↗
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table card is-fullwidth has-background-light is-bold"
            style="border-radius: 4px;"
          >
            <tbody>
              <tr>
                <td>
                  <a
                    :href="myDetails.myTweets"
                    target="_blank"
                    title="Tweet tweet!"
                    class="has-text-dark"
                    rel="noreferrer"
                  >
                    🐤 @notifkash ↗
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table card is-fullwidth has-background-light is-bold"
            style="border-radius: 4px;"
          >
            <tbody>
              <tr>
                <td>
                  📷
                  <a
                    :href="myDetails.myInstagram"
                    target="_blank"
                    title="Click click!"
                    class="has-text-dark"
                    rel="noreferrer"
                    >@notifkash ↗</a
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <a :href="myDetails.cvURL" target="_blank" rel="noreferrer">
            <button
              class="button is-rounded is-link is-fullwidth"
              title="Hire me!"
            >
              My Resume (PDF) 📥
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myDetails: {
        myName: "Kashiful Haque",
        hackerrank: "https://www.hackerrank.com/kashifulhaque",
        leetcode: "https://leetcode.com/ifkash/",
        japanese: "私は日本語を話します",
        whatIDo: "I make Android & Web Apps!",
        githubURL: "https://github.com/kashifulhaque",
        linkedInURL: "https://www.linkedin.com/in/kashifulhaque",
        myEmail: "mailto:haque.kashiful7@gmail.com",
        myTweets: "https://twitter.com/notifkash",
        myInstagram: "https://www.instagram.com/notifkash/",
        cvURL:
          "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/resume%2FMy%20CV%20-%20updated.pdf?alt=media&token=5047c340-8a3b-416c-bb35-6cad92257afd",
        myself:
          "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/photos%2Findex%2Fmyself_square.jpg?alt=media&token=0f17ed4e-6a8a-46b7-8a3f-2e7baedfdaba"
      }
    };
  }
};
</script>

<style></style>
