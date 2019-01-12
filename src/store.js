import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const $http = axios.create({
  baseURL: 'http://api.forum.pocketmsg.ru',
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    post: [],
    comments: [],
  },
  getters: {
    posts: state => state.posts,
    post: state => state.post,
    comments: state => state.comments,
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    setPost: (state, post) => {
      state.post = post;
    },
    setComments: (state, comments) => {
      state.comments = comments;
    },
  },
  actions: {
    getPosts: async ({ commit }) => {
      const { data } = await $http.get('/posts');
      commit('setPosts', data.data);
    },
    getPost: async ({ commit }, id) => {
      const { data } = await $http.get(`/posts/${id}`);
      commit('setPost', data);
    },
    getComments: async ({ commit }, id) => {
      const { data } = await $http.get(`/posts/${id}/comments`);
      commit('setComments', data.data);
    },
  },
});
