import { createStore } from 'vuex'
import user from './modules/user'
import appSettings from './modules/appSettings'

const store = createStore({
    modules: {
        user,
        appSettings,
    },
})

export default store
