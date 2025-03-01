// Carregar API do Google Charts
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Status', 'Quantidade', { role: 'style' }],
        ['Iniciou', 100, '#007bff'],
        ['Concluiu', 80, '#28a745']
    ]);

    var options = {
        title: 'Iniciou vs Concluiu',
        chartArea: { width: '70%' },
        hAxis: {
            title: 'Número de Alunos',
            minValue: 0
        },
        vAxis: {
            title: 'Status'
        },
        legend: { position: 'none' }
    };

    var chart = new google.visualization.BarChart(document.getElementById('barras-chart'));
    chart.draw(data, options);
}

