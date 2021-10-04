<template>
  <div class="hello">
    <ul>
      <li v-for="paciente in $store.state.pacientes" :key="paciente.id">
        {{ paciente.id }} | {{ paciente.nombre }} | {{ paciente.apellido }} |
        {{ paciente.edad }} | {{ paciente.prevision }}
      </li>
    </ul>
    <h5 class="my-5">Listado de Pacientes</h5>
    <div class="container">
      <table class="table table-striped">
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Previsión</th>
          <th>Acción</th>
        </thead>
        <tr v-for="paciente in $store.state.pacientes" :key="paciente.id">
          <td>{{ paciente.nombre }}</td>
          <td>{{ paciente.apellido }}</td>
          <td>{{ paciente.edad }}</td>
          <td>{{ paciente.prevision }}</td>
          <td>
            <button class="mr-2 btn btn-outline-primary">Editar</button>
            <button
              class="ml-2 btn btn-outline-primary"
              @click="deletePatient(paciente.id)"
            >
              Eliminar
            </button>
          </td>
        </tr>
        <tbody></tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <form action="#">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="name"
                    class="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone:</label>
                  <input
                    type="phone"
                    class="form-control"
                    id="phone"
                    placeholder="Enter phone"
                  />
                </div>
                <div class="form-group">
                  <label for="dtmf">DTMF:</label>
                  <input
                    type="dtmf"
                    class="form-control"
                    id="dtmf"
                    placeholder="Enter dtmf"
                  />
                </div>
                <button type="submit" class="btn btn-success">Save</button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  },
  methods: {
    deletePatient(patientId) {
      this.$store.dispatch('deletePatient', patientId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tbody tr:hover {
  background: rgba(217, 217, 217, 0.4);
}
</style>
