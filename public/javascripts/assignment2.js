 /*
A program that accepts insurance policy data, including a policy number, customer last name, customer first name,
birth date, premium due date (month, day, and year), and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:

Base price = $100

Age >15 && < 30 = + $20

Age >= 30 && < 45 +10

Age >=60 +30

Each at-fault accident = + 50
*/

"use strict";
const PROMPT = require ('readline-sync');

let policyNumber, lastName, firstName, birthDate, dayBorn, monthBorn, yearBorn, dueDate, accidents, accidentz, currentYear, age, insurance, finalPrice;

const basePrice = 100;
const accident = 50;

function main() {
    setPolicyNumber();
    setLastName();
    setFirstName();
    setBirthDate();
    setCurrentYear();
    setDueDate();
    setAccidents();
    setInsurance();
    setFinalPrice();
}

main();

function setPolicyNumber() {
    policyNumber = PROMPT.question('\nWhat is the policy number?:');
}

function setLastName() {
    lastName = PROMPT.question('\nWhat is your last name?:');
}

function setFirstName() {
    firstName = PROMPT.question('\nWhat is your first name?:');
}

function setBirthDate() {
    monthBorn = PROMPT.question('\nWhat month were you born in? 01-12:');
    dayBorn = PROMPT.question('\nWhat day of the month were you born? 1-31:');
    yearBorn = PROMPT.question('\nWhat year were you born in:');
}

function setCurrentYear() {
    currentYear = PROMPT.question('\nWhat year is it?:');
    age = currentYear - yearBorn;
}

function setDueDate() {
    dueDate = PROMPT.question('\nWhat is the due date?:');
}

function setAccidents() {
    accidentz = PROMPT.question('\nHow many accidents have you been in?:');
    accidents = accident * accidentz;
}

function setInsurance() {
    if (age > 15 && age < 30) {
        insurance = 20;
    }
    else if (age >= 30 && age < 45) {
        insurance = 10;
    }
    else if (age >= 45 && age < 60) {
        insurance = 20;
    }
    else if (age >= 60) {
        insurance = 30;
    }
}

function setFinalPrice() {
    finalPrice = basePrice + accidents + insurance;
    console.log("\nYour total is..." + finalPrice);
}