#!/usr/bin/env node

import { roll } from "../lib/roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const sidess = args.sides || 6
const dices = args.dice || 2
const rollss = args.rolls || 1

//console.log(JSON.stringify(roll(sidess, dices, rollss)));
console.log(roll(sidess, dices, rollss));
