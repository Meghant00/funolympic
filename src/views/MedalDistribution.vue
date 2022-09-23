<template>
  <div class="px-4 py-4">
    <div
      class="flex flex-row items-center justify-between pb-8 w-[90%] mx-auto"
    >
      <h3 class="text-3xl">Medals Distribution</h3>
    </div>
    <div class="mx-auto w-[50%]">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        width="400"
        height="300"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
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
import { countryData } from "@/utils/countryData";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const label = ref([]);
const goldData = ref([]);
const silverData = ref([]);
const bronzeData = ref([]);

const datasets = ref([]);

const rng = () => Math.floor(Math.random() * (10 - 0) + 0);

countryData.map((country) => {
  label.value.push(country.name);

  goldData.value.push(rng());
  silverData.value.push(rng());
  bronzeData.value.push(rng());
});

datasets.value = [
  {
    label: "Gold",
    backgroundColor: "#FFD700",
    data: goldData.value,
  },
  {
    label: "Silver",
    backgroundColor: "#C0C0C0",
    data: silverData.value,
  },
  {
    label: "Bronze",
    backgroundColor: "#CD7F32",
    data: bronzeData.value,
  },
];

const chartData = ref({
  labels: label.value,
  datasets: datasets.value,
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Medal Distribution of FunOlympic",
    },
  },
});

const chartId = ref({
  type: String,
  default: "bar-chart",
});
</script>
