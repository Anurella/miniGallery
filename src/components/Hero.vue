<template>
  <section>
    <div v-if="!isLoading" class="search">
      <form action="" @submit.prevent="processForm">
        <input
          type="text"
          role="searchbox"
          autocomplete="on"
          aria-label="Search Photo"
          placeholder="Search Photo"
          name="search"
          class="search__input"
          v-model="searchTerm"
          @keyup.delete="removeError"
        />
        <svg aria-label="Search Icon" viewBox="0 0 24 24" class="search__icon">
          <path
            fill="none"
            fill-rule="evenodd"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.5 17a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm12.007 4.507l-6.694-6.694"
          ></path>
        </svg>
      </form>
    </div>
    <div v-if="isLoading" class="loading">
      <span>Searching for </span><span>"{{ searchTerm }}"</span>
    </div>
    <div v-if="isError" class="error">
      <p>We are sorry but your search <b>"{{}}"</b> did not match any breed</p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Hero",
  data() {
    return {
      searchTerm: "",
      isLoading: false,
      isError: false
    };
  },
  methods: {
    processForm() {
      this.isLoading = true;
    }
  }
};
</script>
<style lang="" scoped>
section {
  background-color: var(--primary-bg);
  block-size: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.search,
.loading {
  flex: 1;
  max-width: min(90%, 900px);
}

.search__input {
  inline-size: 100%;
  height: 50px;
  color: var(--text-color);
  padding: 0 0 0 55px;
  border-radius: 4px;
  border: 1px solid hsl(217, 46%, 74%);
  outline: none;
  font-size: 1rem;
  background-color: var(--body-bg);
  box-shadow: 0 2px 1px var(--primary-bg) / 0.7,
    0 4px 2px var(--primary-bg) / 0.7, 0 8px 4px var(--primary-bg) / 0.7,
    0 16px 8px var(--primary-bg) / 0.7, 0 32px 16px var(--primary-bg) / 0.7,
    0 64px 32px var(--primary-bg) / 0.7;
}

.search__input::placeholder {
  color: currentColor;
}

.search__icon {
  position: absolute;
  left: 15px;
  top: calc(50% - 20px / 2);
  width: 20px;
  height: 20px;
}

.search__icon path {
  stroke: var(--stroke);
}
</style>
