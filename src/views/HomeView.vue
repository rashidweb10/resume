<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About Me -->
    <BreadcrumbInner :titleData="'Profile'"></BreadcrumbInner>

  <div>
    <p style="display: flex;" v-for="point in AboutMePoints" :key="point.id">
          <i style="position: relative;top: 4px; margin-right: 4px;" class="fa-solid fa-check"></i> {{ point.content }}
        </p>
  </div>

  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  data() {
    return {
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
  components: {
    NavigationMain,
    BreadcrumbInner
  },
};
</script>

