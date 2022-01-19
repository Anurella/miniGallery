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
  mounted() {
    this.getCollection();
  },
  methods: {
    updateLoad(loadState) {
      this.isLoading = loadState;
    },
    getCollection() {
      this.isLoading = true;
      this.$store
        .dispatch("createGallery")
        .then(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
main {
  padding-block-end: 60px;
}
</style>
