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
    },
    DELETE_PATIENT(state, patientId) {
      state.pacientes.splice(patientId, 1)
    },

    ADD_PATIENT_TO_PATIENTS(state, newPatient) {
      state.pacientes.push(newPatient)
    }
    // ADD_PATIENT_TO_PATIENTS(state, newPatient) {
    //   state.pacientes.push(newPatient)
    // }
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
    },
    deletePatient(context, patientId) {
      Firebase.firestore()
        .collection('pacientes')
        .doc(patientId)
        .delete()
        .then(() => {
          console.log('Document successfully deleted!')
        })
        .catch((error) => {
          console.error('Error removing document: ', error)
        })
      context.commit('DELETE_PATIENT', patientId)
    },

    addPatient(context, newPatient) {
      Firebase.firestore()
        .collection('pacientes')
        .add({
          ...newPatient
        })
        .then(() => {
          console.log('Document successfully written!')
        })
        .catch((error) => {
          console.error('Error writing document: ', error)
        })
      context.commit('ADD_PATIENT_TO_PATIENTS', newPatient)
    }
  },
  modules: {}
})
