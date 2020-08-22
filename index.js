//Defining text area variables
const text1 = $('#text1');
const text2 = $('#text2');
const text3 = $('#text3');
const text4 = $('#text4');
const text5 = $('#text5');
const text6 = $('#text6');
const text7 = $('#text7');
const text8 = $('#text8');
const text9 = $('#text9');


//Set the current date to be displayed to the user
let dateDis = $('#currentDay');
let currentDay = moment().format("MM/DD/YYYY");
dateDis.text(currentDay);


//Changes colors of blocks depending on the time
let now = moment();
let currentHour = now.hour();
blockArr = [text1, text2, text3, text4, text5, text6, text7, text8, text9];

for (i = 0; i < blockArr.length; i++) {
    if (currentHour > blockArr[i].attr('data-time')) {
        blockArr[i].addClass('past')
    }
    else if (currentHour == blockArr[i].attr('data-time')) {
        blockArr[i].addClass('present')
    }
    else if (currentHour < blockArr[i].attr('data-time')) {
        blockArr[i].addClass('future')
    }
};

//Clear scheduled events from the previous day 
if (currentHour === 18) {
    for (j = 0; j < blockArr.length; j++) {
        blockArr[i].empty();
    };
    localStorage.clear();
};


//Event listereners for each save button
$('#9am').on('click', function() {
    localStorage.setItem('event9', text1.val().trim());
});

$('#10am').on('click', function() {
    localStorage.setItem('event10', text2.val().trim());
});

$('#11am').on('click', function() {
    localStorage.setItem('event11', text3.val().trim());
});

$('#12pm').on('click', function() {
    localStorage.setItem('event12', text4.val().trim());
});

$('#1pm').on('click', function() {
    localStorage.setItem('event1', text5.val().trim());
});

$('#2pm').on('click', function() {
    localStorage.setItem('event2', text6.val().trim());
});

$('#3pm').on('click', function() {
    localStorage.setItem('event3', text7.val().trim());
});

$('#4pm').on('click', function() {
    localStorage.setItem('event4', text8.val().trim());
});

$('#5pm').on('click', function() {
    localStorage.setItem('event5', text9.val().trim());
});


//Load saved items to the specified hour blocks
eventArr = ['event9', 'event10', 'event11', 'event12', 'event1', 'event2', 'event3', 'event4', 'event5'];

for (i = 0; i < blockArr.length; i++) {
    blockArr[i].val(localStorage.getItem(eventArr[i]));
};