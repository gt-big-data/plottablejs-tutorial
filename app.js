
function type(d) {
  d.attack = +d.Attack;
  d.defense = +d.Defense;
  d.hp = +d.HP;
  d.speed = +d.Speed;
  d.spAttack = d['Sp. Atk'];
  d.spDefense = d['Sp. Def'];
  d.type = d.Type;

  d.x = d.attack;
  d.y = d.defense;
  return d;
}

d3.csv('pokemon.csv', type, function(error, data) {

    if (error) {
        console.error(error)
        return;
    }
    var dataset = new Plottable.Dataset(data);

1   var xScale = new Plottable.Scales.Linear();
    var yScale = new Plottable.Scales.Linear();

    var xAxis = new Plottable.Axes.Numeric(xScale, 'bottom');
    var yAxis = new Plottable.Axes.Numeric(yScale, 'left');

    var plot = new Plottable.Plots.Scatter()
        .x(function(d) { return d.x; }, xScale)
        .y(function(d) { return d.y; }, yScale)
        .addDataset(dataset);


    var xInput = document.getElementById('x-input');
    var yInput = document.getElementById('y-input');

    xInput.addEventListener('change', function(event) {
        var attribute = event.target.value;
        dataset.data(dataset.data().map(function(d) {
            d.x  = d[attribute];
            return d;
        }));
    });

    yInput.addEventListener('change', function(event) {
        var attribute = event.target.value;
        dataset.data(dataset.data().map(function(d) {
            d.y  = d[attribute];
            return d;
        }));
    });

    var chart = new Plottable.Components.Table([
        [yAxis, plot],
        [null, xAxis]
    ]);

    chart.renderTo('svg#chart');
});