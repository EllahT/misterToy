<template>
  <div>
     <doughnut-charts v-if="Object.keys(typesAndPrices).length" :labelsArr="typesPricesLabels" 
     :label="typesPricesLabel" 
     :dataArr="typePricesDatas"
     class="chart">
     </doughnut-charts>
     <line-charts v-if="Object.keys(yearsToysDatas).length" :labelsArr="yearsToysLabels" 
     :label="yearsToysLabel" 
     :dataArr="yearsToysDatas" 
     class="chart">
     </line-charts>
  </div>
</template>

<script>
import LineCharts from '@/components/LineCharts.vue';
import DoughnutCharts from '@/components/DoughnutCharts.vue';

export default {
    created() {
      this.$store.dispatch({type: 'loadToys'});
    },

    computed: {
      typesAndPrices() {
        return this.$store.getters.toyTypesAndPrices;
      },

      typesPricesLabel() {
        return 'Total Prices By Toy Type';
      },

      typesPricesLabels() {
        return Object.keys(this.typesAndPrices);
      },

      typePricesDatas() {
        return Object.values(this.typesAndPrices);
      },

      yearsToys() {
        return this.$store.getters.toysCountByYear;
      },
      
      yearsToysLabel() {
        return 'Toys Count By Years';
      },

      yearsToysLabels() {
        return Object.keys(this.yearsToys);
      },

      yearsToysDatas() {
        return Object.values(this.yearsToys);
      },


    },

    components: {
        LineCharts,
        DoughnutCharts
    }
}

</script>

<style>
.chart {
  max-width: 400px;
  max-height: 400px;
  margin: 5px auto;
  display: inline-block;
}
</style>

