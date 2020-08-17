//Definin text area variables
const text1 = $('#text1');
const text2 = $('#text2');
const text3 = $('#text3');
const text4 = $('#text4');
const text5 = $('#text5');
const text6 = $('#text6');
const text7 = $('#text7');
const text8 = $('#text8');
const text9 = $('#text9');

//Event listeners for each save button
$('#9am').on('click', store9am);
// $('#10am').on('click', store10am);
// $('#11am').on('click', store11am);
// $('#12pm').on('click', store12pm);
// $('#1pm').on('click', store1pm);
// $('#2pm').on('click', store2pm);
// $('#3pm').on('click', store3pm);
// $('#4pm').on('click', store4pm);
// $('#5pm').on('click', store5pm);

//Functions store users event information in local storage
function store9am(event) {
    event.preventDefault();
    let user = {
        userEvent: text1.val().trim(),
    }
    user = JSON.stringify(user);
    localStorage.setItem("event9", user);

    let lastEvent = JSON.parse(localStorage.getItem("event9"));
    text1.val(lastEvent.userEvent);
}



//Set the current date to be displayed to the user
let dateDis = $('#currentDay');
console.log('Sanity check');


let now = moment().format("MM/DD/YYYY");
dateDis.text(now);