<template>
  <div class="container">
    <section class="columns">
      <div class="column is-narrow">
        <span class="image is-128">
          <g-image
            class="is-rounded"
            :src="myDetails.myself"
            alt="That's me"
            title="Kashiful Haque himself!"
          />
        </span>
      </div>
      <div class="column is-wide">
        <!-- Start Who Am I -->
        <div class="title">Kashiful Haque</div>
        <div class="subtitle">
          Wants to be a Full Stack Android & Web Developer
        </div>
        <!-- End Who Am I -->

        <!-- Start links -->
        <div class="links">
          <div class="link-item">
            <svg
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
              />
            </svg>
            <a href="http://ifkash.xyz">ifkash.xyz</a>
          </div>
          <div class="link-item">
            <svg
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5-9.5t9.5-22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"
              />
            </svg>
            <a href="mailto:haque.kashiful7@gmail.com"
              >haque.kashiful7@gmail.com</a
            >
          </div>
          <div class="link-item">
            <svg
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
              />
            </svg>
            <a href="tel:+918240868544">(+91) 82408 68544</a>
          </div>

          <br />

          <div class="link-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin"
              class="svg-inline--fa fa-linkedin fa-w-14 icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/kashifulhaque/"
              target="_blank"
              rel="noreferrer"
              >linkedin.com/in/kashifulhaque</a
            >
          </div>
          <div class="link-item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              class="svg-inline--fa fa-github fa-w-16 icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            <a
              href="https://github.com/kashifulhaque"
              target="_blank"
              rel="noreferrer"
              >github.com/kashifulhaque</a
            >
          </div>
          <div class="link-item"></div>
        </div>
        <!-- End links -->

        <!-- Start About Myself -->
        <p>
          Always pushing myself to solve real world problems. Also my primary
          interest is in Android & Web Development, both front-end and back-end.
          As the industry is extremely fast paced and it is always moving
          forward, I firmly believe that it requires constant education in order
          to keep up! I also believe myself to be an agile learner, being able
          to pickup various technologies and concepts swiftly.
        </p>
        <!-- End About Myself -->
      </div>
    </section>

    <hr />

    <section class="columns">
      <div class="column is-narrow title">Experience</div>
      <div class="column is-wide">
        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->

        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->

        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->
      </div>
    </section>

    <hr />

    <section class="columns">
      <div class="column is-narrow title">Education</div>
      <div class="column is-wide">
        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->

        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->

        <!-- Start Job -->
        <div class="job">
          <!-- Start Job Title Container -->
          <div class="job-title-container">
            <div>
              <div class="job-company">ifkash.xyz</div>
              <div class="job-title">Android & Web Developer / Designer</div>
            </div>
            <div>Jan 2020 - Present</div>
          </div>
          <!-- End Job Title Container -->
        </div>
        <!-- End Job -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myDetails: {
        myself:
          "https://firebasestorage.googleapis.com/v0/b/kashif-resume.appspot.com/o/photos%2Findex%2Fmyself_square.jpg?alt=media&token=0f17ed4e-6a8a-46b7-8a3f-2e7baedfdaba"
      }
    };
  }
};
</script>

<style scoped></style>
