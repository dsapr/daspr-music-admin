import { setToken } from '../../utils/auth.js';
import { login } from '../../api/user.js';

const state = () => ({
  nickname: '辰怡',
  token: '',
  username: '',
  roles: []
});

const getters = {
  nickameFirstWord: state => {
    return state.nickname.slice(0, 1);
  }
};

const actions = {
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(token => {
          // commit('SET_TOKEN', token);
          // setToken(token);
          // resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
