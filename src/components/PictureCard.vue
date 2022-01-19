<template>
  <figure class="photo">
    <img
      :src="item.urls.small"
      :alt="item.alt_description"
      class="photo__img"
      loading="lazy"
    />
    <figcaption>
      <h3>{{ item.user.first_name }} {{ item.user.last_name }}</h3>
      <p>
        {{ item.user.location ? `${item.user.location}` : "World" }}
      </p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "PictureCard",
  props: {
    item: Object,
    isLoading: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.photo {
  display: grid;
  grid: "a" "a" "a" "a";
  border-radius: var(--radius);
  overflow: hidden;
  height: 100%;
  min-height: 250px;
  max-height: 340px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    /* color: hsl(40, 7%, 9%); */
    /* background: linear-gradient(
      to bottom,
      hsla(40, 70%, 9%, 0.13) 0,
      hsla(40, 70%, 9%, 0.23) 3.5%,
      hsla(40, 70%, 9%, 0.35) 17%,
      hsla(40, 70%, 9%, 0.4) 60%
    ); */
    background-image: linear-gradient(
      45deg,
      hsla(39deg 70% 9% / 0.4) 1%,
      hsla(39deg 70% 9% / 0.4) 43%,
      hsl(39deg 70% 9% / 0.4) 50%,
      hsl(39deg 70% 9% / 0.4) 51%,
      hsl(39deg 70% 9% / 0.4) 51%,
      hsl(39deg 70% 9% / 0.4) 49%,
      hsl(39deg 70% 9% / 0.4) 49%,
      hsl(39deg 70% 9% / 0.4) 50%,
      hsl(39deg 70% 9% / 0.4) 57%,
      hsl(39deg 70% 9% / 0.4) 99%
    );
  }
}

img {
  width: 100%;
  height: 100%;
  grid-area: a;
  border-radius: var(--radius);
  object-fit: cover;
}

figcaption {
  padding: 15px;
  grid-area: a;
  align-self: end;
  z-index: 1;
  color: white;
  text-transform: capitalize;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
