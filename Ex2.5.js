function summation(num){
    var total=0;
    for (let i = 1; i <= num; i++) {
        total+=i;
        
    }
    return total;
}
console.log(summation(8));