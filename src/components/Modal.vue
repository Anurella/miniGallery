<template>
  <transition name="modal" mode="out-in">
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal__wrapper">
        <button class="modal__close" @click="close">
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
        <div class="modal__content">
          <!-- <slot name="body"> </slot> -->
          <figure class="photo__enlarge">
            <img
              :src="modalItem.urls.regular"
              :alt="modalItem.alt_description"
              width="100%"
              height="500px"
            />
            <figcaption>
              <h3>
                {{ modalItem.user.first_name }} {{ modalItem.user.last_name }}
              </h3>
              <p>
                {{
                  modalItem.user.location
                    ? `${modalItem.user.location}`
                    : "World"
                }}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["modalItem"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  backface-visibility: hidden;
  z-index: 6;
  color: var(--text-color);

  &__wrapper {
    background-color: hsla(228, 2%, 50%, 0.8);
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
  }

  &__content {
    display: grid;
    width: 45rem;
    max-width: min(90vw, 650px);
    overscroll-behavior-y: contain;
    overflow-y: auto;
    justify-self: center;
    transition: all 0.3s;
    will-change: transform;
  }

  &__close {
    width: 50px;
    height: 48px;
    justify-self: flex-end;
    padding: 0;
    background: transparent;
    bottom: 10px;
    @media (min-width: 600px) {
      left: 30px;
    }
    cursor: pointer;
    display: grid;
    place-items: center;

    svg {
      width: 16px;
      height: 16px;
    }

    path {
      fill: var(--white);
    }

    &:active {
      outline-color: var(--white);
    }

    &:focus:not(:focus-visible) {
      outline-color: var(--white);
    }
  }
}

.photo__enlarge {
  img {
    border-radius: var(--radius) var(--radius) 0 0;
    max-height: min(60vh, 400px);
    width: 100%;
    object-fit: cover;
  }
  figcaption {
    border-radius: 0 0 var(--radius) var(--radius);
    padding: 20px 32px 32px;
    background-color: var(--white);

    p {
      color: hsl(216, 13%, 59%);
    }
  }
}

/* transition */
.modal-enter {
  z-index: -1;
  opacity: 0;
}

.modal-enter .modal__content {
  transform: scale(2);
}

.modal-enter-active {
  transition: opacity 500ms;
}

.modal-leave-active {
  animation: scaleOut 500ms cubic-bezier(0.75, 0, 1, 1);
}

.modal-leave-active .modal__content {
  transform: scale(0.3);
  opacity: 0;
}

@keyframes scaleOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
