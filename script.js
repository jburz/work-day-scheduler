let hoursCounter = 16;
let hourBlockElem;
let timeBlockDisplay;
let timeBlockCompare;
let timeBlockPlusCompare;
let eventLog;
let input;
let now = moment();

$('#currentDay').text(now.format('dddd, MMMM Do'));

for (let i = 1; i < 9; i++) {
    hourBlockElem = $('#hourBlock' + i);
    timeBlockDisplay = moment().hour(hoursCounter).format('hA');
    timeBlockCompare = moment().hour(hoursCounter).format('H');
    timeBlockPlusCompare = moment().hour(hoursCounter + 1).format('H');
    hourBlockElem.text(timeBlockDisplay);
    $('#event' + i).val(localStorage.getItem('eventLog' + i));

    if (now.hour() < timeBlockCompare) {
        $('#event' + i).attr('class', 'future col-sm-10');
    } else if (now.hour() >= timeBlockCompare && now.hour() < timeBlockPlusCompare) {
        $('#event' + i).attr('class', 'present col-sm-10');
    } else if (now.hour() > timeBlockCompare) {
        $('#event' + i).attr('class', 'past col-sm-10');
    }

    hoursCounter++;

    $('#saveBtn' + i).on('click', function (event) {
        input = $('#event' + i).val();
        localStorage.setItem('eventLog' + i, input);
    });
}