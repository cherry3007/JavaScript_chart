export function createBarChart() {
    const ctx = document.getElementById("barChartCanvas").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["А", "Б", "В", "Г", "Д"],
            datasets: [{
                label: "Оценки",
                data: [5, 4, 3, 4, 5],
                backgroundColor: ["red", "blue", "green", "yellow", "purple"]
            }]
        }
    });
}


