let hoursCounter = 14;
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

    console.log('Current time: ' + now.hour());
    console.log('Time Block: ' + timeBlockCompare);

    if (now.hour() < timeBlockCompare) {
        $('#event' + i).attr('class', 'future');
        console.log('Future');
    } else if (now.hour() >= timeBlockCompare && now.hour() < timeBlockPlusCompare) {
        $('#event' + i).attr('class', 'present');
        console.log('Present');
    } else if (now.hour() > timeBlockPlusCompare) {
        $('#event' + i).attr('class', 'past');
        console.log('Past');
    }

    hoursCounter++;


    $('#saveBtn' + i).on('click', function (event) {
        input = $('#event' + i).val();
        console.log(input);
        localStorage.setItem('eventLog' + i, input);
    });
}



