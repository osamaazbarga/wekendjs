function findUniq(numbers){
    return numbers.sort().find(x=> numbers.indexOf(x) === numbers.lastIndexOf(x));
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));