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
            <button
              class="mr-2 btn btn-outline-primary"
              @click="showModal = true"
            >
              Editar
            </button>
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
    </div>
    <div class="container add-patient mt-5 text-right">
      <button class="btn btn-primary" @click="showModal = true">
        Agregar Paciente
      </button>
    </div>

    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Agregar Paciente</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="showModal = false"
                      >&times;</span
                    >
                  </button>
                </div>
                <div class="modal-body">
                  <div>
                    <input placeholder="Nombre" />
                  </div>
                  <div>
                    <input placeholder="Apellido" />
                  </div>
                  <div>
                    <input placeholder="Edad" />
                  </div>
                  <div>
                    <input placeholder="Previsión" />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="showModal = false"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientsList',
  data: () => ({
    showModal: false
  }),
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

input {
  margin: 10px;
}
</style>
