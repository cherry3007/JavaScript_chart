export function createPolarChart() {
    const ctx = document.getElementById("polarChartCanvas").getContext("2d");
    new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: ["Красный", "Синий", "Жёлтый", "Зелёный"],
            datasets: [{
                data: [12, 19, 3, 5],
                backgroundColor: ["red", "blue", "yellow", "green"]
            }]
        }
    });
}


