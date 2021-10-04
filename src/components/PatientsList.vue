<template>
  <div class="hello">
    <ul>
      <li v-for="paciente in $store.state.pacientes" :key="paciente.id">
        {{ paciente.id }} | {{ paciente.nombre }} | {{ paciente.apellido }} |
        {{ paciente.edad }} | {{ paciente.prevision }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PatientsList',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
