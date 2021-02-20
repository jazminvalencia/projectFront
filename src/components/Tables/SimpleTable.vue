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
        <md-table-cell md-label="Estatus">{{ item.estatusId }}</md-table-cell>
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
    <md-dialog :md-active.sync="first">
      <md-dialog-title>informacion del prospecto</md-dialog-title>
      <!-- <div v-for="prospecto in prospectoMostrar">
            <p> <strong> El nombre del prospecto es: </strong>  {{prospecto.nombre}} {{prospecto.primerApellido}} {{prospecto.segundoApellido}}</p>
            <p><strong>La direccion del prospecto es:</strong> Calle: {{prospecto.calle}}, Numero: {{prospecto.numero}}, Colonia: {{prospecto.colonia}}</p>
            <p>Codigo Postal: {{prospecto.cp}}</p>
            <p><strong>RFC:</strong>{{prospecto.rfc}}</p>
             <p><strong>Telefono:</strong>{{prospecto.rfc}}</p>
      </div> -->
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
      console.log(item, "item");
      this.first = true;
      this.prospectoMostrar.push(item);
      console.log(this.prospectoMostrar);
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
