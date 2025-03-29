export function createLineChart() {
    const ctx = document.getElementById("lineChartCanvas").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Янв", "Фев", "Мар", "Апр", "Май"],
            datasets: [{
                label: "Продажи",
                data: [10, 20, 15, 25, 30],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.3)",
                fill: true
            }]
        }
    });
}



