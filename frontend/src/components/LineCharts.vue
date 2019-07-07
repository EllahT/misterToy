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

  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: this.labelsArr,
      datasets: [
        {
          label: this.label,
          backgroundColor: '#8bc34a',
          data: this.dataArr
        }
      ]
    })
  }
}
</script>
