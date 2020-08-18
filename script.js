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
    $('#saveBtn'+i).on('click', function (event) {
        input = $('#event'+i).val();
        console.log(input);
        localStorage.setItem('event'+i, input);
    });
}




