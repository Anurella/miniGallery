<template>
  <main>
    <Hero :is-loading="isLoading" v-on:update-load="updateLoad" />
    <PictureGrid :is-loading="isLoading" />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import PictureGrid from "@/components/PictureGrid.vue";

export default {
  components: {
    Hero,
    PictureGrid,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    updateLoad(loadState) {
      this.isLoading = loadState;
      console.log("updated", this.isLoading);
    },
  },
};
</script>

<style lang="" scoped></style>
