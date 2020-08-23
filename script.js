let hoursCounter = 9;
let hourBlockElem;
let timeBlockDisplay;
let timeBlockStartCompare;
let timeBlockEndCompare;
let eventLog;
let input;
let now = moment();
let interval;

$('#currentDay').text(now.format('dddd, MMMM Do'));

//iterate through each timeblock element
for (let i = 1; i < 17; i++) {
    //grab the element
    hourBlockElem = $('#hourBlock' + i);

    //format moment to display hour and am/pm
    timeBlockDisplay = moment().hour(hoursCounter).format('hA');

    //format moment in military time for start of block
    timeBlockStartCompare = moment().hour(hoursCounter).format('H');

    //format moment in military time for end of block
    timeBlockEndCompare = moment().hour(hoursCounter + 1).format('H');

    hourBlockElem.text(timeBlockDisplay);
    
    //Display any value in local storage
    $('#event' + i).val(localStorage.getItem('eventLog' + i));

    //checks current time against timeblock start and end to set background color 
    if (now.hour() < timeBlockStartCompare) {
        $('#event' + i).addClass('future');
    } else if (now.hour() >= timeBlockStartCompare && now.hour() < timeBlockEndCompare) {
        $('#event' + i).addClass('present');
    } else if (now.hour() > timeBlockStartCompare) {
        $('#event' + i).addClass('past');
    }

    hoursCounter++;

    $('#saveBtn' + i).on('click', function (event) {
        input = $('#event' + i).val();
        localStorage.setItem('eventLog' + i, input);
    });
}