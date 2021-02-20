function nb_year(p0,perscent,aug,p){
    var count=0;
    while(p0<p){
        p0=p0+p0*(perscent/100)+aug;
        count++;
    }
    console.log(count);
}

nb_year(1500, 5, 100, 5000)// 15
nb_year(1500000, 2.5, 10000, 2000000) // 10

