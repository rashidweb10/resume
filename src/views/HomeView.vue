<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About Me -->
    <BreadcrumbInner :titleData="'About Me'"></BreadcrumbInner>

    <div>
      <p>
        Hi, My name is Muhammed Rashid & I am a Fullstack developer from Mumbai,
        India, working in Mak Enterprises with 4+ years of rich experience.
      </p>
      <p>
        I have Worked on 45+ websites & developed Frontend & backend of
        E-commerce, CMS, CRM, HRMS, LMS, Wordpress, Static & Custom based websites.
      </p>

      <h2 class="title title--h2 mt-3">What I'm Doing</h2>

      <div class="row">
        <!-- Case Item -->
        <div v-for="row in myJobs" :key="row.id" class="col-12 col-lg-6">
          <div class="case-item box box--s2 box-inner">
            <img class="case-item__icon" v-lazy="row.image" alt="" />
            <div>
              <h3 class="title title--h3" style="margin-top: -4px">
                {{ row.name }}
              </h3>
              <p class="case-item__caption">
                {{ row.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--<p style="display: flex;" v-for="point in AboutMePoints" :key="point.id">
      <i style="position: relative;top: 4px; margin-right: 4px;" class="fa-solid fa-check"></i> {{ point.content }}
    </p>-->
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  data() {
    return {
      myJobs: null,
      AboutMePoints: [
        {
          id: "1",
          content: "I'm a fullstack developer with 4+ years of experience.",
        },
        {
          id: "2",
          content:
            "Skilled in Laravel, Codeignitor, PHP, MySQL, jQuery, Vue.js, Ajax, Rest API's, wordpress, JSON, javaScript, Git, Html5, Css3, Bootstap5.",
        },
        {
          id: "3",
          content:
            "Developed / Work almost 70+ websites of frontend & backend including Dynamic websites, E-commerce, CMS, CRM, HRMS, LMS, Static websites & Custom based websites.",
        },
        { id: "4", content: "Integrated almost 30+ API's." },
        { id: "5", content: "Bugs fixing skills in real-time projects." },
        { id: "6", content: "Achived 3+ awards & certifications." },
        {
          id: "7",
          content:
            "I always try to be up-to-date with industry-standard technologies.",
        },
        {
          id: "8",
          content:
            "Currently working as a fullstack developer with Mak Enterprises.",
        },
      ],
    };
  },
  methods: {
    listJobs() {
      this.myJobs = [
        {
          id: 1,
          name: "Web Development",
          image: "/resume/img/skills/icon-dev.svg",
          content:
            "High-quality development of sites at the professional level.",
        },
        {
          id: 2,
          name: "Web Designing",
          image: "/resume/img/skills/icon-design.svg",
          content:
            "The most modern and high-quality design made at a professional level.",
        },
      ];
    },
  },
  mounted() {
    this.listJobs();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
};
</script>

