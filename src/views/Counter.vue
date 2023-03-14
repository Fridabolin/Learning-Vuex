<template lang="">
  <div class="counter" :style="{ color: $store.state.colorCode }">
    <div class="wrapper-state">
      <h2>State</h2>
      <h1>{{ $store.state.counter }}</h1>
      <div>
        <button @click="$store.commit('decreaseCounter')">-</button>
        <button @click="$store.commit('increaseCounter')">+</button>
      </div>
    </div>

    <div class="wrapper-dispatch">
      <h2>Dispatch and action</h2>
      <h1>{{ $store.state.apiCounter }}</h1>
      <div>
        <button @click="$store.dispatch('apiDecreaseCounter')">-</button>
        <button @click="$store.dispatch('apiIncreaseCounter')">+</button>
      </div>
    </div>

    <div class="wrapper-getter">
      <h2>Getter</h2>
      <div class="counter-squared">
        {{ $store.state.counter }} <sup>2</sup> =
        {{ $store.getters.counterSquared }}
      </div>
    </div>

    <div class="wrapper-input">
      <h2>2-way binding</h2>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.commit("setColorCode", newValue);
      },
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.counter {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;

  .wrapper-getter,
  .wrapper-state,
  .wrapper-input,
  .wrapper-dispatch {
    min-width: 20rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 3rem;
    padding: 1rem;
    border: 1px solid green;
  }

  button {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    padding: 1rem;
    border: none;
    outline: none;
    margin: 1rem;
    background: hsla(160, 100%, 37%, 1);
  }
}
</style>
