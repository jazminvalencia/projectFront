<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Evaluacion de Prospectos</h4>
            <p class="category">Recuerde seleccionar el nombre del prospecto para calificarlo</p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label for="movie">Selecciona al prospecto a calificar</label>
                  <md-select v-model="idProspecto" @click="selectedprospect(idProspecto)" name="movie" id="movie">
                    <md-option v-for="prospecto in prospectosArray" :value="prospecto.id" v-bind:key="prospecto.id">{{prospecto.nombre}}</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Nombre prospecto</label>
                  <md-input v-model="SelectedProspectos.nombre" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Primer apellido</label>
                  <md-input v-model="SelectedProspectos.primerApellido" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Segundo Apellido</label>
                  <md-input v-model="SelectedProspectos.segundoApellido" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>RFC</label>
                  <md-input v-model="SelectedProspectos.rfc" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-50">
                <md-field>
                  <label>Calle</label>
                  <md-input v-model="SelectedProspectos.calle" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Numero</label>
                  <md-input v-model="SelectedProspectos.numero" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Colonia</label>
                  <md-input v-model="SelectedProspectos.colonia" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-field>
                  <label>Codigo Postal</label>
                  <md-input v-model="SelectedProspectos.cp" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-50 md-size-50">
                <md-field>
                  <label>Telefono</label>
                  <md-input v-model="SelectedProspectos.telefono" disabled></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-33">
                <md-radio v-model="idEvaluacion" value="1" class="md-primary">Autorizar</md-radio>
                <md-radio v-model="idEvaluacion" value="2" class="md-primary">Rechazar</md-radio>
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
    }
  },
  data() {
    return {
      seleccionar: "",
      idEvaluacion: "",
      idProspecto: "",
      prospectosArray: [],
      SelectedProspectos: []
    };
  },
  methods: {
    async listarProspectos() {
      let url = "http://localhost:5678/api/prospectos/";
      await axios.get(url).then(response => {
        var respuesta = response.data;
        this.prospectosArray = respuesta;
      }).catch(e => {
        console.log(e);
      });
    },
   async selectedprospect(idProspecto) {
      let url = "http://localhost:5678/api/prospectos/";
      await axios.get(url + idProspecto).then(response => {
        var respuesta = response.data;
        this.SelectedProspectos = respuesta;
      }).catch(e => {
        console.log(e);
      });
    },
    actualizarProspectos(idProspecto) {
      let url = "http://localhost:5678/api/prospectos/";
      axios.put("url",{
        'id':idProspecto
      })
    }


  },
  mounted() {
    this.listarProspectos();
  }
};
</script>
