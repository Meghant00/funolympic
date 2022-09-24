<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :height="200"
  />
</template>
<script setup>
import { Bar } from "vue-chartjs";
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
import { liveGameData } from "@/utils/liveGameData";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const labels = ref([]);
const datasets = ref([]);
const rng = () => {
  return Math.floor(Math.random() * (5000 - 100) + 100);
};
liveGameData.map((game) => {
  labels.value.push(game.title);
  datasets.value.push(rng());
});

const chartId = ref("bar-chart");

const chartData = ref({
  labels: labels.value,
  datasets: [
    { label: "Likes", backgroundColor: "#0085c8", data: datasets.value },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>
