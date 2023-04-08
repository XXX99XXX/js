//Ask the user for a number from 0 to 9 and display the special character located on this key (1-!, 2-@, 3-#, etc.).
function Special_Symbol() {
  let a = prompt("Enter number 0-9");
  const s = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("][parseInt(a)];
  if (a >= 0 && a <= 9) {
    alert(s);
  } else if (a > 9) {
    alert("Don't enter number bigger than 9");
    return;
  } else {
    alert("Error");
    return;
  }
}
Special_Symbol();

//Ask the user for the year and check whether it is a leap year or not. A leap year is either a multiple of 400 or a multiple of 4 but not a multiple of 100.
function Leap_Year() {
  let y = prompt("Enter year");

  if (y % 4 == 0 && y % 100 != 0 && y % 400 == 0) {
    alert("This year is leap");
  } else {
    alert("This year is not leap");
  }
}
Leap_Year();

//Request a date (day, month, year) and display the next date. Consider the possibility of moving to the next month, year, as well as leap year.

function date_display() {
  const day = +prompt("Enter day");
  const month = +prompt("Enter month");
  const year = +prompt("Enter year");
  let leap_year = "";
  if (day >= 31) {
    alert("Bro month don't have more than 31 days ");
  } else if (day <= 0) {
    alert("0 days wtf!");
  } else if (month >= 12) {
    alert("In year only 12 months");
  } else if (month <= 0) {
    alert("0 months wtf!");
  }
  const next = +prompt("What u wanna add :1.month,2.year,3.leap");
  if (next == 3) {
    if (year % 4 == 0) {
      leap_year = year + 4;
    } else {
      leap_year = year + (4 - (year % 4));
    }
    alert(`The next leap year ${leap_year}`);
  } else {
    if (next == 1) {
      const period = +prompt("How much u want add");
      alert(`Your new date is ${day} ${month + period} ${year}`);
    } else if (next == 2) {
      const period = +prompt("How much u want add");
      alert(`Your new date is ${day} ${month} ${year + period}`);
    }
  }
}
date_display();

//Calculate the sum of all numbers in the range specified by the user

function range_calculator() {
  let f = prompt("Enter first range number");
  let s = prompt("Enter second range number");
  let sum = 0,
    g = s - f + 1;
  for (let i = f; i <= s; i++) {
    sum += i * g;
    g--;
  }
  alert(sum);
}
range_calculator();

//Determine the number of digits in the entered number.

function digits_determinator() {
  let d = prompt("Enter number");
  let count = 0;
  while (d > 10) {
    d = d / 10;
    ++count;
  }
  count = count + 1;

  alert(`This number have ${count} digits`);
}
digits_determinator();

//Ask the user for 10 numbers and count how many positive, negative and zeros
//were entered. Besides, also count how many even and odd numbers present.
//Display statistics on the screen. Try to use only one variable in the solution.

function Num_count() {
  let pos = 0;
  let neg = 0;
  let zer = 0;
  let eve = 0;
  let odd = 0;

  for (let i = 1; i <= 10; i++) {
    let number = +prompt("Enter number" + i);
    if (number > 0) {
      pos++;
    } else if (number < 0) {
      neg++;
    } else {
      zer++;
    }
    number % 2 == 0 ? eve++ : odd++;
  }
  alert(
    `Positive  = ${pos},  Negative = ${neg}  Zero = ${zer}  Even = ${eve}  Odd = ${odd} `
  );
}
Num_count();
//Loop the output of the weekdays as follows: {Day of the week}. Do you
//want to see the next day? and so on until the user clicks OK
function days_in_week() {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let i = 0;
  let response = "";
  while (true) {
    response = prompt(
      `${weekdays[i]}. Do you want to see the next day?  Enter anything to continue `
    );
    i = (i + 1) % weekdays.length;
    if (response === "") {
      break;
    }
  }
}
days_in_week();
