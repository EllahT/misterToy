<template>
  <div>
     <toys-charts :labelsArr="typesPricesLabels" 
     :label="typesPricesLabel" 
     :dataArr="typePricesDatas"
     class="chart">
     </toys-charts>
     <toys-charts :labelsArr="yearsToysLabels" 
     :label="yearsToysLabel" 
     :dataArr="yearsToysDatas" 
     class="chart">
     </toys-charts>
  </div>
</template>

<script>
import ToysCharts from '@/components/ToysCharts.vue';

export default {
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
        ToysCharts
    }
}

</script>

<style>
.chart {
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
}
</style>

