<template>
  <div class="home">
    <PatientsList></PatientsList>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientsList from '@/components/PatientsList.vue'
// import Firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    PatientsList
  },
  data: () => ({}),
  mounted() {
    this.$store.dispatch('bringAllPatients')
    // Llamar a las colecciones
    // Firebase.firestore()
    //   .collection('pacientes')
    //   .get()
    //   .then((collection) => {
    //     collection.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() })
    //     })
    //   })
    // Aplicar onSnapshot a las colecciones
    // Firebase.firestore()
    //   .collection('pacientes')
    //   .onSnapshot((querySnapshot) => {
    //     this.pacientes = []
    //     querySnapshot.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() })
    //     })
    //   })
  }
}
</script>
