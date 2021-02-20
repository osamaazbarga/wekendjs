/*function Fibonacci(num){
    if(num<=2) return 1;
    return Fibonacci(num-1)+Fibonacci(num-2);
}*/



const Fibonacci=num=>{//return array
    let arr=[1,1]
    for (let i = 1; i < num-1; i++) {
      arr.push(arr[i]+arr[i-1])
    
    }
    return arr;
  }
console.log(Fibonacci(8));