<template>
  <div class="box-outer">
    <!-- Menu -->
    <div class="nav-container">
      <NavigationMain></NavigationMain>
    </div>

    <!-- About -->
    <BreadcrumbInner :titleData="'404'"></BreadcrumbInner>
    <div class="text-center">
        <h1>Page Not Found!</h1>
    </div>
    
  </div>
</template>

<script>
import NavigationMain from "../components/navigation/NavigationMain.vue";
import BreadcrumbInner from "../components/breadcrumb/BreadcrumbInner.vue";

export default {
  components: {
    NavigationMain,
    BreadcrumbInner,
  },
};
</script>

<style scoped>
</style>
