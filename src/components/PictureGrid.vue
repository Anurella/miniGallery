<template>
  <section class="mansory">
    <template v-if="isLoading">
      <article v-for="n in 9" :key="n" class="mansory__item">
        <div
          class="skeletal__loader"
          :style="{ height: `${Math.floor(Math.random() * 250 + 100)}px` }"
        >
          <span></span>
          <span></span>
        </div>
      </article>
    </template>
    <template v-else>
      <article
        v-for="(item, galleria) in galleryList"
        :key="galleria"
        class="mansory__item"
      >
        <picture-card v-bind:item="item"></picture-card>
      </article>
    </template>
  </section>
</template>

<script>
import PictureCard from "./PictureCard.vue";
export default {
  components: {
    PictureCard,
  },
  props: {
    isLoading: { Boolean },
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

  @media screen and (min-width: 769px) {
    flex-flow: column wrap;
    height: 1199px;
    justify-content: flex-start;
    align-content: flex-start;

    &::before,
    &::after {
      content: "";
      flex-basis: 100%;
      width: 0;
      order: 2;
    }
  }
}

.skeletal__loader {
  width: 100%;
  height: 100%;
  background: hsl(210, 5.88%, 93.33%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
  span {
    background: linear-gradient(
        to right,
        hsla(240, 4%, 95%, 0) 0,
        hsla(240, 4%, 95%, 0.5) 50%,
        hsla(240, 4%, 95%, 0) 80%
      ),
      hsla(210, 2%, 82%);
    background-repeat: repeat-y;
    background-size: 30px 500px;
    background-position: 0 0;
    animation: shimmer 2.2s infinite;
    height: 15px;
    &:first-child {
      width: 60%;
    }
    &:last-child {
      width: 40%;
    }
  }
}

@keyframes shimmer {
  to {
    background-position: 100% 0;
  }
}
</style>
