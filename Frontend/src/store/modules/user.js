export default {
    state: () => ({
        name: 'Mahesh',
        rdmString: 'Random String',
    }),
    getters: {},
    mutations: {
        SET_NAME(state, payload) {
            state.name = payload
        },
        SET_RANDOM_STRING(state, payload) {
            state.rdmString = payload
        },
    },
    actions: {
        saveName({ commit }, data) {
            commit('SET_NAME', data)
        },
        saveRandomString({ commit }, data) {
            commit('SET_RANDOM_STRING', data)
        },
    },
}
