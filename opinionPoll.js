import { hello, displayadLib } from './functions.js';
import { checkbox, input } from '@inquirer/prompts';

// Ask for the user's name
const userName = await input({ message: 'Enter your name:' });
console.log(`Hello ${userName}, welcome to the poll!`);

// Call the hello function from functions.js
hello(userName);

// Salty snacks prompt
const saltySnacks = await checkbox({
    message: 'Select your favorite salty snacks:',
    choices: [
        { name: 'Chips', value: 'chips' },
        { name: 'Pretzels', value: 'pretzels' },
        { name: 'Popcorn', value: 'popcorn' },
        { name: 'Nuts', value: 'nuts' }
    ]
});

// Sweet snacks prompt
const sweetSnacks = await checkbox({
    message: 'Select your favorite sweet snacks:',
    choices: [
        { name: 'Chocolate', value: 'chocolate' },
        { name: 'Candy', value: 'candy' },
        { name: 'Cookies', value: 'cookies' },
        { name: 'Ice Cream', value: 'ice_cream' }
    ]
});

// Savory snacks prompt
const savorySnacks = await checkbox({
    message: 'Select your favorite savory snacks:',
    choices: [
        { name: 'Cheese', value: 'cheese' },
        { name: 'Jerky', value: 'jerky' },
        { name: 'Hummus', value: 'hummus' },
        { name: 'Crackers', value: 'crackers' }
    ]
});

// Log all answers
console.log(`Salty Snacks: ${saltySnacks}`);
console.log(`Sweet Snacks: ${sweetSnacks}`);
console.log(`Savory Snacks: ${savorySnacks}`);

// Call the displayadLib function from functions.js if needed
displayadLib();
