class Date{
    day;
    month;
    year;
    constructor(day,month,year) {
        this.day = day ;
        this.month = month ;
        this.year = year ;
    }
    getDay(){
        return this.day
    }
    getMonth(){
        return this.month
    }
    getYear(){
        return this.year
    }
    setDay(day){
        return this.day = day
    }
    setMonth(month){
        return this.month = month
    }
    setYear(year){
        return this.year = year
    }
    setDate(day,month,year){
        this.day=day
        this.month=month
        this.year = year
    }
    toString(day,month,year){
        return `${day}/${month}/${year}`
    }
}

let newDate = new Date(11, 1, 2023)
/*newDate.setDay(10);
newDate.setMonth(2);
newDate.setYear(2022);*/
/*newDate.setDate(10,12,2022)*/

let day = newDate.getDay()
let month = newDate.getMonth()
let year = newDate.getYear()
console.log(newDate.toString(day,month,year))

