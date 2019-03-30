import * as firebase from 'firebase'
import router from '@/router'
export default {
    state: {
        loading:false,
        error:null,
        sliders: [
            {
                id: 0,
                url: require('@/assets/images/slider/slider1.jpg')
            },
            {
                id: 1,
                url: require('@/assets/images/slider/slider2.jpg')
            },
            {
                id: 2,
                url: require('@/assets/images/slider/slider3.jpg')
            }
        ],
    },
    mutations: {
        setLoading(state,payload){
            state.loading=payload
        },
        setError(state,payload){
            state.error=payload
        },
        clearError(state){
            state.error=null
        }
    },
    actions: {
        logout({ commit }) {
            
            firebase.auth().signOut()
                .then(() => {
                    commit('setUser', null)
                    commit('setAdmin', null)
                    commit('setUserLogin', false)
                    commit('setAdminLogin', false)
                    router.back()
                })
                .catch(error=>{
                    console.log(error)
                    commit('setLoading',false)
                })
        },
        clearError({commit}){
            commit('clearError')
        }
    },
    getters: {
        sliders(state) {
            return state.sliders
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        },
        mobile(state){
            return state.mobile
        }
    }
}