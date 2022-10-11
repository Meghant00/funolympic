<template>
  <Pie :chartData="chartData" :chartOptions="chartOptions" :height="325" />
</template>
<script setup>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { ref } from "vue";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = ref({
  labels: ["Active Users", "Inactive users", "Blocked Users"],
  datasets: [
    {
      backgroundColor: ["#009e3d", "#d1d1d1", "#a6002e"],
      data: [85, 10, 5],
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true, position: "right" },
  },
});
</script>
