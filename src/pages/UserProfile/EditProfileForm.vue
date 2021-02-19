<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Captura de Prospecto</h4>
        <p class="category">Capturar los datos datos del prospecto, no olvide incluir los Documentos</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100" style="color:red;">
            <ul v-for="error in errorMostrarMsjProspecto" :key="error" v-text="error">
              <li></li>
            </ul>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>*Nombre prospecto</label>
              <md-input v-model="NombreProspecto" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>*Primer apellido</label>
              <md-input v-model="PrimerApellido" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Segundo Apellido</label>
              <md-input v-model="SegundoApellido" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>*RFC</label>
              <md-input v-model="rfc" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>*Calle</label>
              <md-input v-model="Calle" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>*Numero</label>
              <md-input v-model="Numero" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>*Colonia</label>
              <md-input v-model="Colonia" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>*Codigo Postal</label>
              <md-input v-model="CodigoPostal" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-50">
            <md-field>
              <label>*Telefono</label>
              <md-input v-model="Telefono" type="tel"></md-input>
            </md-field>
          </div>
          <div v-for="docs in counter" :key="docs.id">
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>*Nombre Documento</label>
                <md-input v-model="docs.nombreDoc" type="tel"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Documento</label>
                <md-file v-model="docs.single" />
              </md-field>
            </div>
          </div>
          <div class="md-layout-item text-right">
            <md-button @click="agregarObjetos()" class="md-raised md-success">Agregar documento</md-button>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="crearProspecto()">Enviar</md-button>
            <md-button class="md-raised md-success" @click="Salir()">Salir</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "edit-profile-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      counter: [
        {
          single: null,
          nombreDoc: null
        }
      ],
      NombreProspecto: null,
      PrimerApellido: null,
      SegundoApellido: null,
      Calle: null,
      Numero: null,
      rfc: null,
      Colonia: null,
      Telefono: null,
      CodigoPostal: null,
      errorProspecto: 0,
      errorMostrarMsjProspecto: []
    };
  },
  methods: {
    crearProspecto() {
      var m = this;
      var url = "http://localhost:5678/api/prospectos/";

      if (this.validar()) {
        return;
      }
      Swal.fire({
        title: "¿Está seguro de dar de alta este Prospecto?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4da952",
        cancelButtonColor: "#9d28b0",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        confirmButtonClass: "btn btn-success",
        cancelButtonClass: "btn btn-danger"
      }).then((willDelete) => {
        if (willDelete) {
          axios.post(url, {
            nombre: m.NombreProspecto,
            primerApellido: m.PrimerApellido,
            segundoApellido: m.SegundoApellido,
            calle: m.Calle,
            numero: m.Numero,
            rfc: m.rfc,
            colonia : m.Colonia,
            telefono : m.Telefono,
            cp: m.CodigoPostal
          }).then(response => {
            //qthis.limpiar();
          }).catch(e => {
            console.log(e);
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
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
        if(willDelete.dismiss === Swal.DismissReason.cancel){
          
          return
        }else if(willDelete) {
          this.limpiar();
        }
      });
    },
    limpiar() {
      this.NombreProspecto = "";
      this.PrimerApellido = "";
      this.SegundoApellido = "";
      this.Calle = "";
      this.Numero = "";
      this.rfc = "";
      this.Colonia = "";
      this.Telefono = "";
      this.CodigoPostal = "";
      this.errorMostrarMsjProspecto = [];
      this.errorProspecto = 0;
    },
    validar() {
      this.errorProspecto = 0;
      this.errorMostrarMsjProspecto = [];
      var i= 0;

      if (!this.NombreProspecto)this.errorMostrarMsjProspecto.push("El nombre no puede estar vacío");
      if(!isNaN(this.NombreProspecto))this.errorMostrarMsjProspecto.push("El nombre no puede ser numerico");
      if (!this.PrimerApellido) this.errorMostrarMsjProspecto.push("El primer apellido no puede estar vacío.");
      if(!isNaN(this.PrimerApellido))this.errorMostrarMsjProspecto.push("El primer apellido no puede ser numerico");
      if(!!this.SegundoApellido && !isNaN(this.SegundoApellido))this.errorMostrarMsjProspecto.push("El Segundo apellido no puede ser numerico");
      if (!this.Calle)this.errorMostrarMsjProspecto.push("El calle no puede estar vacío.");
      if (!this.Numero) this.errorMostrarMsjProspecto.push("El numero no puede estar vacío.");
      if (!this.rfc) this.errorMostrarMsjProspecto.push("El RFC no puede estar vacío.");
      if (!this.Colonia) this.errorMostrarMsjProspecto.push("El colonia no puede estar vacío.");
      if (!this.Telefono)this.errorMostrarMsjProspecto.push("El telefono no puede estar vacío");
      if(isNaN(this.Telefono))this.errorMostrarMsjProspecto.push("El telefono tiene que ser numero");
      if (!this.CodigoPostal) this.errorMostrarMsjProspecto.push("El codigo postal no puede estar vacío.");
      if (isNaN(this.CodigoPostal)) this.errorMostrarMsjProspecto.push("El codigo postal no puede tener letras.");

      for ( i ;  i < this.counter.length; i++){
        if(!this.counter[i].single){
          this.errorMostrarMsjProspecto.push("debe de subir un archivo ");
        }
        if(!this.counter[i].nombreDoc){
          this.errorMostrarMsjProspecto.push("debe de tener nombre el documento ");
        }
      }
      if (this.errorMostrarMsjProspecto.length) this.errorProspecto = 1;
      return this.errorProspecto;
    },
    agregarObjetos() {
      this.counter.push({ single: null, nombreDoc: null });
    }
  },
  mounted() {
  }
};
</script>
<style></style>
