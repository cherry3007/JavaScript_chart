export function createRadarChart() {
    const ctx = document.getElementById("radarChartCanvas").getContext("2d");
    new Chart(ctx, {
        type: "radar",
        data: {
            labels: ["Скорость", "Сила", "Выносливость", "Ловкость", "Реакция"],
            datasets: [{
                label: "Характеристики",
                data: [80, 90, 85, 70, 95],
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                fill: true
            }]
        }
    });
}


