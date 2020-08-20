let hoursCounter = 9;
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
        $('#event' + i).attr('class', 'future');
    } else if (now.hour() >= timeBlockCompare && now.hour() < timeBlockPlusCompare) {
        $('#event' + i).attr('class', 'present');
    } else if (now.hour() > timeBlockCompare) {
        $('#event' + i).attr('class', 'past');
    }

    hoursCounter++;

    $('#saveBtn' + i).on('click', function (event) {
        input = $('#event' + i).val();
        localStorage.setItem('eventLog' + i, input);
    });
}



