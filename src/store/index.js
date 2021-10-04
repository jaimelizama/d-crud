import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pacientes: []
  },
  mutations: {
    SET_PATIENTS(state, nuevosPacientes) {
      state.pacientes = nuevosPacientes
    }
  },
  actions: {
    bringAllPatients(context) {
      Firebase.firestore()
        .collection('pacientes')
        .get()
        .then((collection) => {
          //variable auxiliar
          const pacientes = []
          // colección
          collection.forEach((document) => {
            pacientes.push({ id: document.id, ...document.data() })
          })
          // guardar en state
          context.commit('SET_PATIENTS', pacientes)
        })
    }
  },
  modules: {}
})
