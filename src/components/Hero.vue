<template>
  <section>
    <div v-if="!loadState" class="search">
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
    <div v-if="loadState" class="result">
      <template v-if="resultView">
        <template v-if="isError">
          <h2>
            <span>There are no pictures with term</span
            ><span> "{{ searchTerm }}"</span>
          </h2>
          <close-button :onClick="refreshPage"></close-button>
        </template>
        <h2 v-else>
          <span>Searching for</span><span> "{{ searchTerm }}"</span>
        </h2>
      </template>
      <template v-else>
        <h2>
          <span>Searched Results for </span><span> "{{ searchTerm }}"</span>
        </h2>
        <close-button :onClick="showSearchBar"></close-button>
      </template>
    </div>
  </section>
</template>
<script>
import CloseButton from "./Button.vue";

export default {
  name: "Hero",
  components: {
    CloseButton,
  },
  data() {
    return {
      searchTerm: "",
      isError: false,
      loadState: this.isLoading,
      resultView: true,
    };
  },
  props: {
    isLoading: Boolean,
  },
  methods: {
    processForm() {
      this.loadState = true;
      this.$emit("update-load", this.loadState);
      // call the search method
      this.$store.dispatch("searchGallery", this.searchTerm).then(() => {
        this.resultView = false;
        this.$emit("update-load", false);
        if (this.$store.getters.getGallery.length === 0) {
          this.resultView = true;
          this.isError = true;
          this.$emit("update-load", true);
        }
      });
    },
    showSearchBar() {
      this.resultView = true;
      this.searchTerm = "";
      this.loadState = false;
    },
    refreshPage() {
      location.reload();
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  background-color: var(--primary-bg);
  block-size: 200px;
  @media screen and (min-width: 500px) {
    block-size: 300px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.search,
.result {
  flex: 1;
  max-width: min(90%, 900px);
}

.search {
  &__input {
    inline-size: 100%;
    height: 50px;
    color: var(--text-color);
    padding: 0 0 0 55px;
    border-radius: calc(var(--radius) / 2);
    border: 1px solid hsl(217, 46%, 74%);
    outline: none;
    font-size: 1rem;
    background-color: var(--body-bg);
    box-shadow: 0 2px 1px var(--primary-bg) / 0.7,
      0 4px 2px var(--primary-bg) / 0.7, 0 8px 4px var(--primary-bg) / 0.7,
      0 16px 8px var(--primary-bg) / 0.7, 0 32px 16px var(--primary-bg) / 0.7,
      0 64px 32px var(--primary-bg) / 0.7;

    ::placeholder {
      color: currentColor;
    }
  }

  &__icon {
    position: absolute;
    left: 15px;
    top: calc(50% - 20px / 2);
    width: 20px;
    height: 20px;

    path {
      stroke: var(--stroke);
    }
  }
}
.result {
  display: flex;
  column-gap: 40px;
  span {
    font-size: 1.8rem;
    color: var(--text-color);
    &:last-child {
      color: var(--text-color-2);
      font-weight: normal;
      text-transform: capitalize;
    }
  }
}
</style>
