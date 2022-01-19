<template>
  <button @click="onClick" @keypress="onClick">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z"
        fill=""
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
button {
  font-size: 0.9rem;
  padding: 0;
  background-color: var(--text-color);
  color: var(--white);
  cursor: pointer;
  width: 30px;
  height: 28px;
  align-self: center;
  display: grid;
  place-content: center;

  path {
    fill: var(--body-bg);
  }
}
</style>
