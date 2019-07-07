<script>
import VueChartJs from 'vue-chartjs'

export default {
   props: {
      labelsArr: {
          type: Array,
          require: true
      },
      label: {
          type: String,
          require: true,
      },

      dataArr: {
          type: Array,
          require: true
      },

      chartType: {
        type: String,
        require: true
      }
  },

  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      labels: this.labelsArr,
      datasets: [
        {
          label: this.label,
          backgroundColor: '#03a9f4',
          data: this.dataArr
        }
      ]
    })
  }
}
</script>
