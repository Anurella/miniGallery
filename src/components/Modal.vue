<template>
  <transition>
    <div
      class="modal"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal__wrapper">
        <div class="modal__backdrop">
          <button class="modal__close">x</button>
          <div class="content">
            <figure>
              <figcaption>
                <h3 id="modalTitle">Name of Artist</h3>
                <p class=""></p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="" scoped></style>
