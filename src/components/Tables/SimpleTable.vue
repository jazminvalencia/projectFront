<template>
  <div>
    <md-table v-model="prospectosArray" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombre">{{ item.nombre }}</md-table-cell>
        <md-table-cell md-label="Primer Apellido">{{ item.primerApellido }}</md-table-cell>
        <md-table-cell md-label="Segundo Apellido">{{ item.segundoApellido }}</md-table-cell>
        <md-table-cell md-label="Estatus">{{ item.estatusId }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'
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
      prospectosArray: []
    };
  },
  methods:{
     async listarProspectos(){
      let url = "http://localhost:5678/api/prospectos/";
      await axios.get(url).then(response => {
        var respuesta = response.data;
        this.prospectosArray = respuesta;
      }).catch(e => {
        console.log(e);
      })
    }
  },
  mounted(){
    this.listarProspectos();
  }
};
</script>
