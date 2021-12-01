import Vue from "vue";
import Vuex from "vuex";
import api from "../api/mockapi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        client: [],
        createdPass: "",
        averageTripDuration: 0,
    },
    mutations: {
        GET_PASSENGERS(state, payload) {
            state.client = payload;
        },
        CREATE_PASSENGER(state, payload) {
            state.client.push(payload);
        },
        DELETE_PASSENGER(state, payload) {
            const index = state.client.indexOf(payload);
            if (index > -1) {
                state.client.splice(index, 1);
            }
        },
        AVERAGE_TIME(state) {
            const arrAvg = (arr) =>
                arr.reduce((total, b) => total + b.tripDuration.value, 0) / arr.length;
            state.averageTripDuration = arrAvg(state.client);
        },
        EDIT_PASSENGER(state, payload) {
            const itemIndex = state.client.findIndex(
                (item) => item.id == payload.id
            );
            state.client[itemIndex] = payload;
        },
    },
    actions: {
        async getPassengers({ commit }) {
            const response = await api.getAllPassengers();
            commit("GET_PASSENGERS", response);
        },
        async createPassenger({ commit }, data) {
            const response = await api.createPassenger(data);
            commit("CREATE_PASSENGER", response);
            commit("AVERAGE_TIME");
        },
        async deletePassenger({ commit }, passenger) {
            await api.deletePassenger(passenger);
            commit("DELETE_PASSENGER", passenger);
        },
        async updatePassenger({ commit }, data) {
            await api.editPassenger(data);
            commit("EDIT_PASSENGER", data);
            commit("AVERAGE_TIME");
        },
        averageTime({ commit }) {
            commit("AVERAGE_TIME");
        },
    },
    modules: {},
});