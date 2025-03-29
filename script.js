import { createLineChart } from "./chart/lineChart.js";
import { createBarChart } from "./chart/barChart.js";
import { createPieChart } from "./chart/pieChart.js";
import { createRadarChart } from "./chart/radarChart.js";
import { createPolarChart } from "./chart/polarChart.js";

async function fetchChartData() {
    try {
        const response = await fetch("https://dummyjson.com/products"); // 🌍 Реальный API
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        return null;
    }
}

fetchChartData().then((data) => {
    if (data) {
        createLineChart(data);
        createBarChart(data);
        createPieChart(data);
        createRadarChart(data);
        createPolarChart(data);
    } else {
        console.warn("Графики загружены с дефолтными данными.");
        createLineChart();
        createBarChart();
        createPieChart();
        createRadarChart();
        createPolarChart();
    }
});
