<template>
  <LineChart
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :width="width"
    :height="height"
  />
</template>
<script setup>
import { LineChart } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ref } from "vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartOptions = ref({ responsive: true });
const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12] }],
});
const chartId = ref("line-chart");
const datasetIdKey = ref("label");
const width = ref(400);
const height = ref(400);
</script>
