import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
      },
      {
        id: 2,
        title: "Eat breakfast",
        done: true,
      },
      {
        id: 3,
        title: "Go to work",
        done: false,
      },
    ],
    snackbar: {
      show: false,
    },
  },
  getters: {},
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: state.tasks.length + 1,
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state) {
      state.snackbar.show = true;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar");
    },
  },
  modules: {},
});
