<template>
  <span
    class="image-loader"
    :class="[`image-loader--${variant}`, { 'is-loaded': isLoaded, 'has-error': hasError }]"
  >
    <span class="image-loader__skeleton" aria-hidden="true"></span>
    <img
      v-if="src"
      class="image-loader__image"
      :src="src"
      :alt="alt"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
    />
  </span>
</template>

<script>
export default {
  props: {
    src: { type: String, default: "" },
    alt: { type: String, default: "" },
    variant: { type: String, default: "default" },
    loading: { type: String, default: "lazy" },
  },
  data() {
    return { isLoaded: false, hasError: false };
  },
  watch: {
    src() {
      this.isLoaded = false;
      this.hasError = false;
    },
  },
  methods: {
    handleLoad() {
      this.isLoaded = true;
    },
    handleError() {
      this.hasError = true;
    },
  },
};
</script>
