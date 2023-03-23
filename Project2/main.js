//1.Implement the kilometers to miles unit converter. The user inputs a value in km, and then the app displays this value in miles (1 km = 0,621371 miles). Use a constant here.

const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
alert(`${kilometers} kilometers is equal to ${miles} miles.`);

//2.Ask the user for the current time (hours, minutes). Calculate how many hours and minutes are left until the end of the day.

function how_many_time_to_end_of_a_day()
{
    const hours = prompt("Enter what time now in hours")
    const minutes = prompt("Enter what time now in minutes")
    if (minutes){
        let current_minutes = 60 - minutes;
        let current_hours = 23- hours;
        alert(`Has left ${current_hours} hours and ${current_minutes} minutes`)
    }else{
        let current_hours = 24 - hours;
        let current_minutes = 00;
        alert(`Has left ${current_hours} hours and ${current_minutes} minutes`)
    }
}
how_many_time_to_end_of_a_day()
 
//3.Ask the user for the 3-digit number and display it backwards. Try to use the %(division remainder) operator.

var a = prompt("Enter a value");
    var b, sum = 0;
    var z = a;
    while(a > 0)
    {
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
    alert(`Reversed number:${sum}`);
