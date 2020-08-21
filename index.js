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


//Event listereners for each save button
$('#9am').on('click', function() {
    localStorage.setItem('event9', text1. val());
});

$('#10am').on('click', function() {
    localStorage.setItem('event10', text2. val());
});

$('#11am').on('click', function() {
    localStorage.setItem('event11', text3. val());
});

$('#12pm').on('click', function() {
    localStorage.setItem('event12', text4. val());
});

$('#1pm').on('click', function() {
    localStorage.setItem('event1', text5. val());
});

$('#2pm').on('click', function() {
    localStorage.setItem('event2', text6. val());
});

$('#3pm').on('click', function() {
    localStorage.setItem('event3', text7. val());
});

$('#4pm').on('click', function() {
    localStorage.setItem('event4', text8. val());
});

$('#5pm').on('click', function() {
    localStorage.setItem('event5', text9. val());
});


//Load saved items to the specified hour blocks
text1.val(localStorage.getItem('event9'));
text2.val(localStorage.getItem('event10'));
text3.val(localStorage.getItem('event11'));
text4.val(localStorage.getItem('event12'));
text5.val(localStorage.getItem('event1'));
text6.val(localStorage.getItem('event2'));
text7.val(localStorage.getItem('event3'));
text8.val(localStorage.getItem('event4'));
text9.val(localStorage.getItem('event5'));


//Set the current date to be displayed to the user
let dateDis = $('#currentDay');
let now = moment().format("MM/DD/YYYY");
dateDis.text(now);


//Changes colors of blocks depending on the time
let current = moment();
let currentHour = current.hour();
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


