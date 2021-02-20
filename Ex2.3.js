function findNextSquare(num){
    if (Math.sqrt(num)%1==0){
        return Math.pow((Math.sqrt(num)+1),2);
    }
    return 1;
}
console.log(findNextSquare(121));