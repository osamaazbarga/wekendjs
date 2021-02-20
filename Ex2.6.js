function centuryFromYear(year){
    if(year%100==0){
        return year/100;
    }
    return (year-year%100)/100+1;
}

console.log(centuryFromYear(1901));