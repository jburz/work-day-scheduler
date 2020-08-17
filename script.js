let now = moment();
console.log(now.format());
$('#currentDay').text(now.format('dddd') + ", " + now.format('LL'));
