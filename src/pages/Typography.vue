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
              <div class="md-layout-item md-small-size-100 md-size-100" style="color:red;">
                <ul v-for="error in errorMostrarMsjProspecto" :key="error" v-text="error">
                  <li></li>
                </ul>
              </div>
              <div class="md-layout-item md-small-size-100 md-size-85">
                <md-field>
                  <label for="movie">Selecciona al prospecto a calificar</label>
                  <md-select v-model="idProspecto" name="movie" id="movie">
                    <md-option v-for="prospecto in prospectosArray" :value="prospecto.id" v-bind:key="prospecto.id">{{prospecto.nombre+" "+prospecto.primerApellido+ " "+ prospecto.segundoApellido}}</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item md-size-10 text-right">
                  <md-button class="md-raised md-success"  @click="selectedprospect(idProspecto)">Buscar</md-button>
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
                <md-radio v-model="idEvaluacion" value="1"  class="md-primary">Autorizar</md-radio>
                <md-radio v-model="idEvaluacion" value="2" class="md-primary">Rechazar</md-radio>
              </div>
              <div v-if="idEvaluacion == 2" class="md-layout-item md-small-size-50 md-size-100">
                <md-field>
                  <label>*Descripcion</label>
                  <md-input v-model="descripcionRechazo" type="text"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100 text-right">
                <md-button class="md-raised md-success" @click="actualizarProspectos(idProspecto)">Actualizar</md-button>
                <md-button class="md-raised md-success" @click="Salir()">Salir</md-button>
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
import Swal from "sweetalert2";

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
      idEvaluacion: "2",
      idProspecto: "",
      descripcionRechazo: "",
      prospectosArray: [],
      SelectedProspectos: [],
      errorProspecto: 0,
      errorMostrarMsjProspecto: []
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
      if (this.validar()) {
        return;
      }
      if (this.idEvaluacion == "1") {
        this.estatusId = "2";
        this.descripcionRechazo = null;
      } else {
        this.estatusId = "3";
      }
      Swal.fire({
        title: "¿Está seguro de actualizar este prospecto?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4da952",
        cancelButtonColor: "#9d28b0",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger"
      }).then((willDelete) => {
        if (willDelete.dismiss === Swal.DismissReason.cancel) {
          return;
        } else if (willDelete) {
          axios.put(url + idProspecto, {
            estatusId: this.estatusId,
            evaluacionId : this.idEvaluacion,
            descripcionRechazo: this.descripcionRechazo,
          }).then(response => {
            this.limpiar();
          }).catch(e => {
            console.log(e);
          });
        }
      });
    },
    limpiar() {
      this.idProspecto = "";
      this.evaluacionId = "2";
      this.descripcionRechazo = "";
      this.SelectedProspectos = [];
    },
    validar() {
      this.errorProspecto = 0;
      this.errorMostrarMsjProspecto = [];
      if (!this.idProspecto ) this.errorMostrarMsjProspecto.push("seleccione un prospeco a evaluar");
      if (!this.idEvaluacion ) this.errorMostrarMsjProspecto.push("seleccione una evaluacion, no puede estar vacío");
      if (this.idEvaluacion == "2" && !this.descripcionRechazo){
        this.errorMostrarMsjProspecto.push("la descripcion no puede ser vacio");
      }
      if (this.errorMostrarMsjProspecto.length) this.errorProspecto = 1;
      return this.errorProspecto;
    },
    Salir() {
      Swal.fire({
        title: "¿Está seguro de salir de la pagina?",
        text: "al momento de salir de esta pagina se perdera toda la informacion",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4da952",
        cancelButtonColor: "#9d28b0",
        confirmButtonText: "Salir",
        cancelButtonText: "Cancelar",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger"
      }).then((willDelete) => {
        if (willDelete.dismiss === Swal.DismissReason.cancel) {
          return;
        } else if (willDelete) {
          this.limpiar();
        }
      });
    }
  },
  mounted() {
    this.listarProspectos();
  }
};
</script>
