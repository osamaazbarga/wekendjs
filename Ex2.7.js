function basicOp(math,num1,num2){
    switch(math){
        case '+':return num1+num2;break;
        case '-':return num1-num2;break;
        case '/':return num1/num2;break;
        case '*':return num1*num2;break;
        default: return 'math error';
    }
}

console.log(basicOp('+', 4, 7)) // Output: 11
console.log(basicOp('-', 15, 18)) // Output: -3
console.log(basicOp('*', 5, 5)) // Output: 25
console.log(basicOp('/', 49, 7)) // Output: 7