export default {
    state: {
        admin: null,
        adminLogin: false
    },
    mutations: {
        setAdmin(state, payload) {
            state.admin = payload
        },
        setAdminLogin(state, payload) {
            state.adminLogin = payload
        }
    },
    actions: {
        autoLoginAdmin({ commit }, payload) {
            commit('setAdmin', {
                id: payload.uid,
                email: payload.email
            })
            commit('setAdminLogin', true)
        }
    },
    getters: {
        admin(state) {
            return state.admin
        },
        adminLogin(state) {
            return state.adminLogin
        }
    }
}