<template>
  <section class="mansory">
    <article
      v-for="(item, galleria) in galleryList"
      :key="galleria"
      class="mansory__item"
    >
      <picture-card v-bind:item="item"></picture-card>
    </article>
  </section>
</template>

<script>
import PictureCard from "./PictureCard.vue";
export default {
  components: {
    PictureCard,
  },
  data() {
    return {};
  },
  computed: {
    galleryList() {
      return this.$store.getters.getGallery;
    },
  },
  mounted() {
    this.checkList();
  },
  methods: {
    checkList() {
      if (this.$store.state.gallery.length === 0) {
        this.$store.dispatch("createGallery");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mansory {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: min(85%, 830px);
  margin: -30px auto 0;
  gap: 20px;

  &__item {
    width: calc(50% - 10px);
    @media screen and (max-width: 769px) {
      height: 250px;
    }

    @media screen and (min-width: 769px) {
      width: min(30%, 250px);

      &:nth-child(3n + 1) {
        order: 1;
      }
      &:nth-child(3n + 2) {
        order: 2;
      }
      &:nth-child(3n) {
        order: 3;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .mansory {
    flex-flow: column wrap;
    height: 1200px;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .mansory::before,
  .mansory::after {
    content: "";
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
}
</style>
