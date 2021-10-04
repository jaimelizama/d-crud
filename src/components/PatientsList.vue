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
    </div>
    <div class="container add-patient mt-5 text-right">
      <button class="btn btn-primary" @click="showModal = true">
        Agregar Paciente
      </button>
    </div>
    <form @submit.prevent="addPatient">
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
                      <input
                        v-model="form.nombre"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                    <div>
                      <input
                        v-model="form.apellido"
                        placeholder="Apellido"
                        required
                      />
                    </div>
                    <div>
                      <input
                        v-model="form.edad"
                        type="number"
                        placeholder="Edad"
                        required
                      />
                    </div>
                    <div>
                      <select v-model="form.prevision" required>
                        <option disabled selected value="">Previsión</option>
                        <option value="true">Isapre</option>
                        <option value="false">Fonasa</option>
                      </select>
                    </div>
                    Revisar si está leyendo los datos ingresados
                    {{ form.nombre }} {{ form.apellido }} {{ form.edad }}
                    {{ form.prevision }}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-warning"
                      @click="showModal = false"
                    >
                      Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Agregar Paciente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PatientsList',
  data: () => ({
    showModal: false,
    form: {
      nombre: '',
      apellido: '',
      edad: null,
      prevision: ''
    }
  }),
  methods: {
    deletePatient(patientId) {
      this.$store.dispatch('deletePatient', patientId)
    },
    addPatient() {
      console.log('click on submit')
      console.log(this.form)
      this.$store.dispatch('addPatient', this.form)
      this.form = ''
      this.showModal = false
    }
  },
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

select {
  margin: 10px;
  width: 45%;
  height: 30px;
}
</style>
