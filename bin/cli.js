#!/usr/bin/env node

import { roll } from "/lib/roll.js"
import minimist from "minimist"

var argv = minimist(process.argv.slice(2))
var sides = argv.sides || 6
var dice = argv.dice || 2
var rolls = argv.rolls || 1
var results = roll(sides, dice, rolls)



console.log(JSON.stringify(results))

