#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");


/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */
const _ = require("lodown-jessielwhite");

// Question 1

var males = _.filter(customers, function(customer) { 
    return customer.gender === 'male';
});
console.log(males.length);

// Question 2

var females = _.filter(customers, function(customer) {
    return customer.gender === 'female';
});
console.log(females.length);

// Question 3

var ages = _.pluck(customers, "age");
ages = ages.sort();
var oldestAge = _.last(ages);
var oldestPeople = _.filter(customers, function(customer) {
   return customer.age === oldestAge;
});
_.each(oldestPeople, function(oldPerson) {
    console.log(oldPerson.name + ", " + oldPerson.age);
});

// Question 4

ages = _.pluck(customers, "age");
ages = ages.sort();
var youngestAge = _.first(ages);
var youngestPeople = _.filter(customers, function(customer) {
   return customer.age === youngestAge; 
});
_.each(youngestPeople, function(youngPerson) {
    console.log(youngPerson.name + ", " + youngPerson.age);
});

// Question 5

var balances = _.pluck(customers, "balance");
var total = _.reduce(balances, function(memo, balance){
    balance =  Number(balance.replace(/[^0-9\.]+/g,""));
        return memo + balance;
}, 0);
var average = total / balances.length;
console.log(average);

// Question 6

function beginsWith(people, letter) {
    var namesBeginningWith = _.filter(people, function(person) {
       letter = letter.toUpperCase();
       let nameOfPerson = person.name.toUpperCase();
       return nameOfPerson[0] === letter;
    });
    return namesBeginningWith.length;
}
console.log(beginsWith(customers, "a"));

// Question 7

function friendsBeginsWith(people, letter) {
    var friends = _.pluck(people, "friends");
    var count = [];
    _.each(friends, function(friendsArray) {
        count.push(beginsWith(friendsArray, letter));
    });
    return count;
}
console.log(friendsBeginsWith(customers, "c"));

// Question 8

function friendsWith(customers, friendName) {
    var isFriendsWith = _.filter(customers, function(customer) {
        let matches = _.filter(customer.friends, function(aFriend) {
             return aFriend.name === friendName;
        });
        return matches.length > 0;
    });
    return _.pluck(isFriendsWith, "name");
}

console.log(friendsWith(customers, "Cooley Jimenez"));

// Question 9

function flatten(arrays) {
    var flattened = [];
    _.each(arrays, function(array) {
        _.each(array, function(item) {
            flattened.push(item);
        });
    });
    return flattened;
}

var pluckedTags = _.pluck(customers, "tags");
pluckedTags = flatten(pluckedTags);

var counts = _.reduce(pluckedTags, function(tagObject, tag) {
    if (tagObject[tag] >= 1) {
        tagObject[tag] = tagObject[tag]++;
    } else {
        tagObject[tag] = 1;
    }
    return tagObject;
},{});

console.log(counts);