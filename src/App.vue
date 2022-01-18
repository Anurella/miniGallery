<template>
  <div class="wrapper">
    <header>
      <router-link to="/">
        <span>Mini Gallery</span>
      </router-link>
    </header>
    <router-view />
    <footer>
      <p>&copy; 2022 made with 💞 by Amaka</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<!-- CSS libraries -->

<!-- Global CSS -->
<style>
:root {
  --primary-bg: hsl(215, 22%, 89%);
  --text-color: hsl(217, 46%, 23%);
  --black: hsl(0, 0%, 7%);
  --white: hsl(0, 0%, 98.04%);
  --body-bg: hsl(210, 10%, 96.08%);
  --photo-overlay: hsla(40, 7%, 9%, 0.125);
  --stroke: hsl(208.24, 100%, 6.67%);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* ... */
    --primary-bg: hsl(213, 18.18%, 21.57%);
    --body-bg: hsl(210, 32.26%, 12.16%);
    --text-color: hsl(228, 13.16%, 85.1%);
    --stroke: hsl(217, 14%, 52%);
  }
}

html {
  font-family: "Bitter", system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  font-size: clamp(12px, calc(0.8rem + 0.25vw), 20px);
  overflow-x: hidden;
  scrollbar-color: #666 #201c29;
}

body {
  background: var(--body-bg);
}

.wrapper {
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr auto;
}

header,
footer {
  padding: 20px;
}

header a {
  font-weight: bold;
  font-size: 1.3rem;
  margin-left: 10px;
  color: var(--text-color);
}

footer {
  text-align: center;
  background: var(--primary-bg);
  color: var(--text-color);
  font-size: 0.9rem;
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped></style>
