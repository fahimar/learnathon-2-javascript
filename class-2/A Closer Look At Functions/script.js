"use strict";

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};

createBooking("JK123");
createBooking("JK123", 3, 500); // numofPass , price
createBooking("KL123", 5);
createBooking("LM123", 6);
createBooking("LM123", undefined, 1000);

const flight = "KL234";
const akil = {
  name: "Fahim Al Rashid",
  passport: 1935648564,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "KL999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1935648564) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

checkIn(flight, akil);
console.log(flight);
console.log(akil);

const flightNum = flight;
const passenger = akil;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(akil);
checkIn(flight, akil);

// Javascript does not have passing by reference
