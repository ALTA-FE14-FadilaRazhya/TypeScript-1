function acronym (phrase: string) {
    return phrase.split(' ').map(e => e[0].toUpperCase()).join('')
}
 
console.log(acronym("Portable Network Graphic"));
console.log(acronym("Correct me if I'm Wrong"));
console.log(acronym("Thanks god It's Friday"));