<template>
  <main>
    <Hero />
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
    updateState() {
      this.isLoading = true;
    },
  },
};
</script>

<style lang="" scoped></style>
