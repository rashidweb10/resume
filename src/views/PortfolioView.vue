<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'Recent Work'"></BreadcrumbInner>
    <div class="row">
      <div
        v-for="work in recentWork"
        :key="work.id"
        class="col-md-4 text-center"
      >
        <RouterLink
          :to="'/project/' + makeReadableURL(work.name) + '/' + work.id"
        >
          <img class="rounded" v-lazy="work.image" />
          <h6 class="mt-2 mb-4">{{ work.name }}</h6>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";
import axios from "axios";

export default {
  data() {
    return {
      recentWork: [],
    };
  },
  created() {
    this.getAllwork();
  },
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
  methods: {
    getAllwork: function () {
      axios
        .get(import.meta.env.BASE_URL + "resume/portfolio.json")
        .then((result) => {
          //console.log(result.data);
          this.recentWork = result.data;
        });
    },
    makeReadableURL(param) {
      return param.replace(" ", "-");
    },
  },
};
</script>
    
<style>
</style>
    