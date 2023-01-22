const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name) {
   return `I love ${name}!`
});

const loveArrow = ireland.map((name) => {
   return `I love ${name}!`
});

const loveArrowSingle = ireland.map(name => {
   return `I love ${name}!`
});

const loveArrowOneLIne = ireland.map(name => `I love ${name}`);

const loveChain = ireland.filter(name => name === 'Dublin')
                         .map(name => `I love ${name}`)

console.log(loveChain);