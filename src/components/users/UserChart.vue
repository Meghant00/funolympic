<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :height="200"
  />
</template>
<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const xAxis = ref([]);
for (let i = 1; i <= 13; i++) {
  xAxis.value.push(`Day ${i}`);
}

const chartOptions = ref({ responsive: true });
const chartData = ref({
  labels: xAxis.value,
  datasets: [
    {
      label: "Number of Unique Logins",
      backgroundColor: "#006da3",
      borderColor: "#0085c8",
      data: [
        100, 500, 750, 800, 900, 1200, 5000, 5200, 6000, 8000, 9000, 10015,
        10050,
      ],
    },
  ],
});
const chartId = ref("line-chart");
const datasetIdKey = ref("label");
</script>
