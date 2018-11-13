import Vue from 'vue';
import Vuex from 'vuex';
import {
  CHECK_MATRIX,
  RESET, SET_TURN, SET_WINNER, TOGGLE_TURN, UPDATE_HEIGHT, UPDATE_MATRIX, UPDATE_WIDTH,
} from './actions.type';
import checkMatrix from '../utils/matrix';

Vue.use(Vuex);

const state = {
  width: 3,
  height: 3,
  turn: 1,
  won: null,
  matrix: null,
};

const mutations = {
  setWidth(state, width) {
    state.width = width;
  },
  setHeight(state, height) {
    state.height = height;
  },
  setTurn(state, turn) {
    state.turn = turn;
  },
  setWon(state, player) {
    state.won = player;
  },
  createMatrix(state) {
    state.matrix = Array(state.width)
      .fill(null)
      .map(() => Array(state.height)
        .fill(null));
  },
  updateMatrix(state, { x, y, value }) {
    Vue.set(state.matrix[x], y, value);
  },
};

const actions = {
  [UPDATE_WIDTH]({ commit, dispatch }, width) {
    commit('setWidth', width);
    dispatch(RESET);
  },
  [UPDATE_HEIGHT]({ commit, dispatch }, height) {
    commit('setHeight', height);
    dispatch(RESET);
  },
  [SET_WINNER]({ commit }, player) {
    commit('setWon', player);
  },
  [SET_TURN]({ commit }, player) {
    commit('setTurn', player);
  },
  [TOGGLE_TURN]({ dispatch, state }) {
    const nextTurn = state.turn === 1 ? 2 : 1;
    dispatch(SET_TURN, nextTurn);
  },
  [RESET]({ commit, dispatch }) {
    commit('createMatrix');
    dispatch(SET_WINNER, null);
    dispatch(SET_TURN, 1);
  },
  [UPDATE_MATRIX]({ commit, dispatch }, payload) {
    commit('updateMatrix', payload);
    dispatch(CHECK_MATRIX);
  },
  [CHECK_MATRIX]({ state, dispatch }) {
    const result = checkMatrix(state.matrix);
    if (result) {
      dispatch(SET_WINNER, result);
    } else {
      dispatch(TOGGLE_TURN);
    }
  },
};

const getters = {
  matrix(state) {
    return state.matrix;
  },
  width(state) {
    return state.width;
  },
  height(state) {
    return state.height;
  },
  turn(state) {
    return state.turn;
  },
  winner(state) {
    return state.won;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
