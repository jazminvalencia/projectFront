<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Evaluacion de Prospectos</h4>
            <p class="category"></p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label for="movie">Selecciona al prospecto a calificar</label>
                  <md-select v-model="seleccionar" name="movie" id="movie">
                    <md-option value="B">A</md-option>
                    <md-option value="A">B</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Nombre prospecto</label>
                  <md-input v-model="NombreProspecto" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Primer apellido</label>
                  <md-input v-model="PrimerApellido" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Segundo Apellido</label>
                  <md-input v-model="SegundoApellido" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>RFC</label>
                  <md-input v-model="rfc" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-100">
                <md-field>
                  <label>Calle</label>
                  <md-input v-model="Calle" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Numero</label>
                  <md-input v-model="Numero" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Colonia</label>
                  <md-input v-model="Colonia" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Codigo Postal</label>
                  <md-input v-model="CodigoPostal" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-50 md-size-50">
                <md-field>
                  <label>Telefono</label>
                  <md-input v-model="Telefono" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-radio v-model="radio" value="accent">Autorizar</md-radio>
                <md-radio v-model="radio" value="Primary" class="md-primary">Rechazar</md-radio>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success">Actualizar</md-button>
                <md-button class="md-raised md-success">Salir</md-button>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      seleccionar: "",
      radio: accent
    };
  },
  methods: {},
  created() {
    console.log("hello hello");
  },
  mounted() {
    console.log("mounted");
    // axios.post("http://localhost:5678/api/tutorials/",{
    //   title:"sdasda",
    //   description: "sadsadass",
    //   published: true,
    //   Existencia: 2
    // }
    // ).then(function(res){
    // })
  }
};
</script>
