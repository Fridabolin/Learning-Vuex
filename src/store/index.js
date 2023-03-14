import { createStore } from "vuex";
import axios from "axios";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      counter: 0,
      apiCounter: 0,
      colorCode: "black",
    };
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter++;
    },
    decreaseCounter(state, randomNumber) {
      state.counter--;
    },
    apiIncreaseCounter(state, randomNumber) {
      state.apiCounter += randomNumber;
    },
    apiDecreaseCounter(state, randomNumber) {
      state.apiCounter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    apiIncreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("apiIncreaseCounter", response.data);
      });
    },
    apiDecreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("apiDecreaseCounter", response.data);
      });
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
});

export default store;
