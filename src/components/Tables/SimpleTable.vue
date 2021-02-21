<template>
  <div>
    <md-table v-model="prospectosArray" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
        <md-table-cell md-label="Primer Apellido">
          {{ item.primerApellido }}
        </md-table-cell>
        <md-table-cell md-label="Segundo Apellido">
          {{ item.segundoApellido }}
        </md-table-cell>
        <md-table-cell md-label="Estatus">
          {{ item.status.tipoEstatus }}
        </md-table-cell>
        <md-table-cell md-label="informacion">
          <md-button
            @click="check(item)"
            class="md-just-icon md-simple md-primary"
          >
            <md-icon>info</md-icon>
            <md-tooltip md-direction="top">mas informacion</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <md-dialog scrollable :md-active.sync="first">
      <md-dialog-title class="title-modal">
        informacion del prospecto
      </md-dialog-title>
      <md-content class="md-scrollbar container">
        <div v-for="prospecto in prospectoMostrar" :key="prospecto.id">
          <p>
            <strong> El nombre del prospecto es: </strong>
            {{ prospecto.nombre }}
            {{ prospecto.primerApellido }}
            {{ prospecto.segundoApellido }}
          </p>
          <p>
            <strong>La direccion del prospecto es:</strong>
            Calle: {{ prospecto.calle }},Numero: {{ prospecto.numero }}, Colonia:
            {{ prospecto.colonia }}
          </p>
          <p>Codigo Postal: {{ prospecto.cp }}</p>
          <p><strong>RFC:</strong>{{ prospecto.rfc }}</p>
          <p><strong>Telefono:</strong>{{ prospecto.telefono }}</p>
          <p v-if="prospecto.statusId == 3">
            <strong>Descripcion de Rechazo:</strong>
            {{ prospecto.descripcionRechazo }}
          </p>
          <p class="content-docs"><strong>Documentos: </strong></p>
          <div
            class="content-docs"
            v-for="doc in prospecto.documents"
            :key="doc.id">
            <div class="content-doc">
              <p>
                <strong>Nombre de Documento:</strong>
                {{ doc.nombredoc }}
              </p>
              presione la imagen para ver en pantalla completa
              <a
                target="_blank"
                v-bind:href="'http://localhost:5678/static/docs/' + doc.documento"
              >
                <img
                  v-bind:src="'http://localhost:5678/static/docs/' + doc.documento"
                  alt="documentos del prospecto">
              </a>
            </div>
          </div>
        </div>
      </md-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">Cerrar</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      prospectosArray: [],
      first: false,
      prospectoMostrar: []
    };
  },
  methods: {
    async listarProspectos() {
      var m = this;
      let url = "http://localhost:5678/api/prospectos/";
      await axios.get(url)
        .then(response => {
          var respuesta = response.data;
          m.prospectosArray = respuesta;
        })
        .catch(e => {
          console.log(e);
        });
    },
    check(item) {
      this.prospectoMostrar = [];
      this.first = true;
      this.prospectoMostrar.push(item);
    },
    close() {
      this.prospectoMostrar = [];
      this.first = false;
    }
  },
  mounted() {
    this.listarProspectos();
    this.prospectoMostrar = [];
  }
};
</script>

<style>
.title-modal {
  text-align: center;
}
.container {
  padding: 10pt;
}
.md-content {
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}
.content-docs {
 justify-content: center;
  display: flex;
}
.content-doc {
  text-align: center;
  width: 50%;
  height: 50%;
}
.content-doc img {
  display: inline-block;
  width: 100%;
  height: 50%;
  text-align: center;
}
</style>
