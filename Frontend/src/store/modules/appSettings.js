export default {
    state: () => ({
        themeColor: 'lightgreen',
    }),
    getters: {},
    mutations: {
        setThemeColor(state, color) {
            document
                .querySelector('meta[name="theme-color"]')
                .setAttribute('content', color)
            state.themeColor = color
        },
    },
    actions: {
        changeThemecolor({ commit }, color) {
            commit('setThemeColor', color)
        },
    },
}
