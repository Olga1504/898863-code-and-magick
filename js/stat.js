// eslint-disable no-unused-vars
function renderStatistics(ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов:', 140, 50);
  var maxValue = 0;
  var i = 0;
  for (i = 0; i < times.length; ++i) {
    if (times[i] > maxValue) {
      maxValue = times[i];
    }
  }
  var y = 100;
  var x = 150;
  ctx.fillStyle = 'rgba(255, 0, 0, ' + Math.random() + ')';
  for (i = 0; i < times.length; ++i) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(x, y + 150 - (times[i] * 150) / maxValue, 40, (times[i] * 150) / maxValue);
    ctx.fillText(names[i], x, y + 170);
    ctx.fillText(Math.round(times[i]), x, y + 150 - (times[i] * 150) / maxValue - 10);
    x += 90;
  }
}
