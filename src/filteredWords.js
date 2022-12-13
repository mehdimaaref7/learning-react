const words = [
    'spray',
    'limit',
    'elite',
    'exhuberant',
    'destruction',
    'present'
];

const filteredWords = words.filter(function (word) {
    return word.length > 6;
    },
 );

console.log(filteredWords);