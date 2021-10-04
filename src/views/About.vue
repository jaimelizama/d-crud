<template>
  <div class="about">
    <h2 class="my-4 title">Agrega un producto a la lista</h2>

    <div>
      <form @submit.prevent="addPatient">
        <div class="form-options py-2">
          <div class="form-text">
            <div class="row align-items-center">
              <div class="col-6 text-right pr-3">
                <label>Nombre:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.nombre"
                  required
                  placeholder="Escriba un nombre"
                />
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Descripción:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.apellido"
                  required
                  placeholder="Escriba una descripción"
                />
              </div>
            </div>
          </div>

          <div class="form-size mt-2">
            <div class="row justify">
              <div class="col-6 text-right pr-3">
                <label>Precio:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="number"
                  v-model.number="form.edad"
                  required
                  placeholder="Ingrese el precio"
                />
              </div>
            </div>
          </div>

          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>URL Imagen:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  v-model="form.prevision"
                  required
                  placeholder="Pega la URL de imagen"
                />
              </div>
            </div>
          </div>
        </div>

        <button class="mt-3 btn btn-outline-primary" type="submit">
          Añadir Producto
        </button>
      </form>
      Revisar si está leyendo los datos ingresados
      {{ form.nombre }} {{ form.apellido }} {{ form.edad }}
      {{ form.prevision }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProducts',
  data: () => ({
    form: {
      nombre: '',
      apellido: '',
      edad: null,
      prevision: ''
    }
  }),
  methods: {
    addPatient() {
      console.log('click on submit')
      console.log(this.form)
      this.$store.dispatch('addPatient', this.form)
      this.form = ''
    }
  }
}
</script>

<style scoped>
/* html {
  background: #add9e6;
}

.form-options {
  background: #f0807f;
} */

.form-color select {
  display: flex;
  vertical-align: middle;
  height: 30px;
  display: grid;
}

.circle {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 150px;
  /* background: #add9e6; */
}

input {
  width: 300px;
  border: 1px solid #d454c3;
}

select {
  width: 300px;
  border: 1px solid #d454c3;
}
</style>
