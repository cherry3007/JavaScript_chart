export function createPieChart() {
    const ctx = document.getElementById("pieChartCanvas").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Кошки", "Собаки", "Попугаи"],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ["orange", "blue", "green"]
            }]
        }
    });
}

