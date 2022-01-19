<template>
  <div
    class="skeletal__loader"
    :style="{ height: `${Math.floor(Math.random() * 250 + 100)}px` }"
  >
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Skeletal",
};
</script>

<style lang="scss" scoped>
.skeletal__loader {
  width: 100%;
  height: 100%;
  background: hsl(210, 5.88%, 93.33%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  gap: 10px;
  border-radius: var(--radius);
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
