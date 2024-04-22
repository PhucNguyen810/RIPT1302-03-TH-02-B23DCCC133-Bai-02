// Scatter Plot
var scatterPlotCtx = document.getElementById('scatterPlot').getContext('2d');
var scatterPlot = new Chart(scatterPlotCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Plot',
            data: [{
                x: 1,
                y: 3
            }, {
                x: 2,
                y: 5
            }, {
                x: 3,
                y: 7
            }]
        }]
    }
});

// Line Chart
var lineChartCtx = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(lineChartCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Line Chart',
            data: [10, 20, 30, 25, 15]
        }]
    }
});

// Bar Chart
var barChartCtx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(barChartCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'Febuary', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Số lượng học sinh đến lớp',
            data: [12, 19, 15, 10, 2, 14]
        }]
    }
});

var pieChartCtx = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(pieChartCtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Pie Chart',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                    return data.labels[tooltipItem.index] + ": " + currentValue + " (" + percentage + "%)";
                }
            }
        }
    }
});

// Donut Chart
var donutChartCtx = document.getElementById('donutChart').getContext('2d');
var donutChart = new Chart(donutChartCtx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Donut Chart',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue;
                    });
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                    return data.labels[tooltipItem.index] + ": " + currentValue + " (" + percentage + "%)";
                }
            }
        }
    }
});

// Bubble Chart
var bubbleChartCtx = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(bubbleChartCtx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Bubble Chart',
            data: [{
                x: 1,
                y: 3,
                r: 20
            }, {
                x: 2,
                y: 5,
                r: 30
            }, {
                x: 3,
                y: 7,
                r: 15
            }]
        }]
    }
});
