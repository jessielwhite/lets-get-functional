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
console.log(_);

var males = _.filter(customers, function(customer) { 
    return customer.gender === 'male';
});
console.log(males.length);

var females = _.filter(customers, function(customer) {
    return customer.gender === 'female';
});
console.log(females.length);
