<template>
  <div class="wrapper">
    <header>
      <router-link to="/">
        <span>Mini Gallery</span>
      </router-link>
      <div class="preference">
        <label for="switch" class="pref__switch">
          <input
            type="checkbox"
            role="switch"
            id="switch"
            aria-roledescription="Toggle Color Preference"
            @change="changePreference"
          />
        </label>
      </div>
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
  mounted() {
    this.storedPreference();
  },
  methods: {
    storedPreference() {
      let switchToggle = document.querySelector("#switch"),
        currentPreference = localStorage.getItem("preference");

      if (currentPreference) {
        document.documentElement.setAttribute(
          "data-color-scheme",
          currentPreference
        );
        if (currentPreference === "dark") {
          switchToggle.checked = true;
        } else {
          switchToggle.checked = false;
        }
      } else {
        console.log("There is no theme");
      }
    },
    changePreference(event) {
      if (event.target.checked) {
        document.documentElement.setAttribute("data-color-scheme", "dark");
        localStorage.setItem("preference", "dark");
      } else {
        document.documentElement.setAttribute("data-color-scheme", ""); // or light
        localStorage.setItem("preference", "");
      }
    },
  },
};
</script>

<!-- Global CSS -->
<style lang="scss">
:root {
  --primary-bg: hsl(215, 22%, 89%);
  --text-color: hsl(217, 46%, 23%);
  --text-color-2: hsl(223, 23%, 36%);
  --black: hsl(0, 0%, 7%);
  --white: hsl(0, 0%, 98.04%);
  --body-bg: hsl(210, 10%, 96.08%);
  --photo-overlay: hsla(40, 7%, 9%, 0.125);
  --stroke: hsl(208.24, 100%, 6.67%);
  --radius: 8px;
}

/* @media (prefers-color-scheme: dark) {
  :root {
   
    --primary-bg: hsl(213, 18.18%, 21.57%);
    --body-bg: hsl(210, 32.26%, 12.16%);
    --text-color: hsl(224deg, 8%, 68%);
    --text-color-2: hsl(223, 20%, 92%);
    --stroke: hsl(217, 14%, 52%);
  }
} */

[data-color-scheme="dark"] {
  --primary-bg: hsl(213, 18.18%, 21.57%);
  --body-bg: hsl(210, 32.26%, 12.16%);
  /* --text-color: hsl(228, 13.16%, 85.1%);  */
  --text-color: hsl(224deg, 8%, 68%);
  --text-color-2: hsl(223, 20%, 92%);
  --stroke: hsl(217, 14%, 52%);
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

header {
  display: flex;
  justify-content: space-between;

  a {
    font-weight: bold;
    font-size: 1.3rem;
    margin-left: 10px;
    color: var(--text-color);
  }
}

/* theme toggle */

.pref__switch {
  $track: track;
  --track: #{$track};
  --track-size: calc(var(--thumb-size) * 2.5);
  --track-padding: 2px;

  // light mode
  --track-inactive: var(--text-color-2);
  // dark mode
  --track-active: var(--text-color);
  // thumb
  --thumb-size: 1.8rem;
  --thumb: var(--body-bg);
  --thumb-highlight: var(--primary-bg);
  --track-color-inactive: var(--track-inactive);
  --track-color-active: var(--track-active);

  --thumb-color: var(--thumb);
  --thumb-color-highlight: var(--thumb-highlight);

  @media (prefers-color-scheme: dark) {
  }

  display: flex;
  align-items: center;
  gap: 2ch;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;

  // acts the track
  > input {
    --thumb-position: 0%;
    --thumb-transition-duration: 0.25s;

    appearance: none;
    border: none;
    outline-offset: 5px;
    box-sizing: content-box;
    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    padding: var(--track-padding);
    background: var(--track-color-inactive);
    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;
    margin: 0;
    border-radius: var(--track-size);
    pointer-events: none;
    touch-action: pan-y;
    transition: background-color var(--thumb-transition-duration) ease;

    &::before {
      --highlight-size: 0;
      content: "";
      cursor: pointer;
      pointer-events: auto;
      grid-area: var(--track);
      inline-size: var(--thumb-size);
      block-size: var(--thumb-size);
      background-color: var(--thumb-color);
      border-radius: 50%;
      box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
      transform: translateX(var(--thumb-position));
      z-index: 2;

      @media (prefers-reduced-motion: no-preference) {
        transition: transform var(--thumb-transition-duration) ease,
          box-shadow var(--thumb-transition-duration) ease;
      }
    }

    &:checked {
      background: var(--track-color-active);
      --thumb-position: calc(var(--track-size) - 100%);
    }
  }

  &::after,
  &::before {
    position: absolute;
    content: "";
    width: 1.2rem;
    height: 1.2rem;
    background-size: contain;
    z-index: 1;
  }

  &::after {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Ccircle style='fill:%23FFD347;' cx='255.997' cy='255.997' r='144.824'/%3E%3Cpath style='fill:%23FFD347;' d='M256,56.849c-4.273,0-7.737-3.463-7.737-7.737V7.737C248.263,3.463,251.727,0,256,0 s7.737,3.463,7.737,7.737v41.376C263.737,53.386,260.273,56.849,256,56.849z'/%3E%3Cpath style='fill:%23FFD347;' d='M152.563,84.568c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832 c-2.136-3.7-0.869-8.432,2.832-10.569c3.701-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569 C155.206,84.234,153.876,84.568,152.563,84.568z'/%3E%3Cpath style='fill:%23FFD347;' d='M76.823,160.294c-1.312,0-2.643-0.334-3.861-1.038L37.13,138.569 c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569 C82.097,158.907,79.497,160.294,76.823,160.294z'/%3E%3Cpath style='fill:%23FFD347;' d='M49.112,263.737H7.737C3.464,263.737,0,260.274,0,256s3.464-7.737,7.737-7.737h41.376 c4.273,0,7.737,3.463,7.737,7.737S53.385,263.737,49.112,263.737z'/%3E%3Cpath style='fill:%23FFD347;' d='M41.005,387.869c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569 l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687 C43.648,387.535,42.317,387.869,41.005,387.869z'/%3E%3Cpath style='fill:%23FFD347;' d='M131.862,478.74c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569 l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832 C137.136,477.352,134.536,478.74,131.862,478.74z'/%3E%3Cpath style='fill:%23FFD347;' d='M256,512c-4.273,0-7.737-3.463-7.737-7.737v-41.376c0-4.274,3.464-7.737,7.737-7.737 s7.737,3.463,7.737,7.737v41.376C263.737,508.537,260.273,512,256,512z'/%3E%3Cpath style='fill:%23FFD347;' d='M380.138,478.74c-2.674,0-5.274-1.387-6.707-3.869l-20.687-35.832 c-2.136-3.7-0.869-8.432,2.832-10.569c3.7-2.134,8.432-0.87,10.569,2.832l20.687,35.832c2.136,3.7,0.869,8.432-2.832,10.569 C382.781,478.406,381.451,478.74,380.138,478.74z'/%3E%3Cpath style='fill:%23FFD347;' d='M470.995,387.869c-1.312,0-2.643-0.334-3.861-1.038l-35.832-20.687 c-3.7-2.136-4.968-6.868-2.832-10.569c2.136-3.701,6.868-4.967,10.569-2.832l35.832,20.687c3.7,2.136,4.968,6.868,2.832,10.569 C476.269,386.481,473.669,387.869,470.995,387.869z'/%3E%3Cpath style='fill:%23FFD347;' d='M504.263,263.737h-41.376c-4.273,0-7.737-3.463-7.737-7.737s3.464-7.737,7.737-7.737h41.376 c4.273,0,7.737,3.463,7.737,7.737S508.536,263.737,504.263,263.737z'/%3E%3Cpath style='fill:%23FFD347;' d='M435.177,160.294c-2.674,0-5.274-1.387-6.707-3.869c-2.136-3.7-0.869-8.432,2.832-10.569 l35.832-20.687c3.7-2.134,8.432-0.87,10.569,2.832c2.136,3.7,0.869,8.432-2.832,10.569l-35.832,20.687 C437.82,159.96,436.489,160.294,435.177,160.294z'/%3E%3Cpath style='fill:%23FFD347;' d='M359.437,84.568c-1.312,0-2.643-0.334-3.861-1.038c-3.7-2.136-4.968-6.868-2.832-10.569 l20.687-35.832c2.136-3.701,6.868-4.967,10.569-2.832c3.7,2.136,4.968,6.868,2.832,10.569l-20.687,35.832 C364.711,83.181,362.11,84.568,359.437,84.568z'/%3E%3C/g%3E%3Cpath style='fill:%23FFBE31;' d='M256,111.18c-5.242,0-10.418,0.286-15.516,0.828c72.685,7.743,129.303,69.252,129.303,143.991 s-56.619,136.249-129.303,143.992c5.098,0.544,10.273,0.828,15.516,0.828c79.982,0,144.82-64.838,144.82-144.82 S335.983,111.18,256,111.18z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    right: 0.4rem;
  }

  //  light mode by default
  &::before {
    background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 499.712 499.712' style='enable-background:new 0 0 499.712 499.712;' xml:space='preserve'%3E%3Cpath style='fill:%23FFD93B;' d='M146.88,375.528c126.272,0,228.624-102.368,228.624-228.64c0-55.952-20.16-107.136-53.52-146.88 C425.056,33.096,499.696,129.64,499.696,243.704c0,141.392-114.608,256-256,256c-114.064,0-210.608-74.64-243.696-177.712 C39.744,355.368,90.944,375.528,146.88,375.528z'/%3E%3Cpath style='fill:%23F4C534;' d='M401.92,42.776c34.24,43.504,54.816,98.272,54.816,157.952c0,141.392-114.608,256-256,256 c-59.68,0-114.448-20.576-157.952-54.816c46.848,59.472,119.344,97.792,200.928,97.792c141.392,0,256-114.608,256-256 C499.712,162.12,461.392,89.64,401.92,42.776z'/%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
    left: 0.4rem;
  }

  &:hover {
    > input {
      :before {
        box-shadow: 0 0 10px 1px var(--black);
      }
    }
  }
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
