let hoursCounter = 9;
let hourBlock;
let time;
let event;
let input;

let now = moment();
$('#currentDay').text(now.format('dddd, MMMM Do'));

for (let i = 1; i < 9; i++) {
    hourBlock = $('#hourBlock' + i);
    time = moment().hour(hoursCounter).minute(0).second(0).format('LT');
    hourBlock.text(time);
    hoursCounter++;
    $('#event' + i).val(localStorage.getItem('event' + i));
    $('#event' + i).attr('class', 'future');
}

$('#saveBtn1').on('click', function (event) {
    input = $('#event1').val();
    console.log(input);
    localStorage.setItem('event1', input);
})
$('#saveBtn2').on('click', function (event) {
    input = $('#event2').val();
    console.log(input);
    localStorage.setItem('event2', input);
})
$('#saveBtn3').on('click', function (event) {
    input = $('#event3').val();
    console.log(input);
    localStorage.setItem('event3', input);
})
$('#saveBtn4').on('click', function (event) {
    input = $('#event4').val();
    console.log(input);
    localStorage.setItem('event4', input);
})
$('#saveBtn5').on('click', function (event) {
    input = $('#event5').val();
    console.log(input);
    localStorage.setItem('event5', input);
})
$('#saveBtn6').on('click', function (event) {
    input = $('#event6').val();
    console.log(input);
    localStorage.setItem('event6', input);
})
$('#saveBtn7').on('click', function (event) {
    input = $('#event7').val();
    console.log(input);
    localStorage.setItem('event7', input);
})
$('#saveBtn8').on('click', function (event) {
    input = $('#event8').val();
    console.log(input);
    localStorage.setItem('event8', input);
})



