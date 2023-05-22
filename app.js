// ================== Chapter 21 (Changing Case) ==============
// task No 1 ---------
var UserInput = "HELLO WOlrd"
var allLower = UserInput.toLowerCase();
console.log(allLower)

// task No 2 ---------

var x = "HELlo Wolrd"
x = x.toLowerCase();
console.log(x)

// task No 3 ---------

var y = "hello world"
y = y.toUpperCase()
console.log(y)

// task No 4 ---------

var str = "STRING";
var second;
second = str.toLowerCase();
console.log(second)

// task No 5 ---------

var Arr_1 = ["HEllo world"]
var Str_1 = Arr_1[0].toLowerCase();
console.log(Str_1)

// task No 6 ---------

var a = "City Of light"
// alert(a.toUpperCase())

// task No 7 ---------

var City = "karAChi"
var Firstletter = City.slice(0, 1).toUpperCase();
var SecLetter = City.slice(1).toLowerCase()
var CityName = Firstletter + SecLetter
console.log(CityName)



// ================== Chapter 22 - 25 (Strings) ==============
// task No 1 ---------

var SomeWord = "Captain"
var SomeWord = SomeWord.slice(1, 3)
console.log(SomeWord)

// task No 2 ---------

var x = "hello World"
x = x.length
console.log(x)

// task No 3 ---------

var animal = "elephant"
var seg = animal.slice(2, 6)
console.log(seg)

// task No 4 ---------

var x = "hello World"
y = x.length
console.log(y)


// task No 5 ---------

var a = "characters"
console.log(a.length)
var b = a.slice(1, 6)
console.log(b)

// task No 6 ---------

var text = "To be or not to be";
var inx = text.indexOf("be");
console.log(inx)

// task No 7 ---------

var text = "To be or not to be";
var inx = text.lastIndexOf("be");
console.log(inx)


// task No 8 ---------

var text = "i have to go"
var ind = text.lastIndexOf("go")
console.log(ind)

// task No 9 ---------

var index = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ab adipisci quaerat totam nisi, atque dolor dicta optio quasi enim veritatis minus velit molestiae vero exercitationem tempora provident explicabo assumenda."

if (index.indexOf("consectetur") >= 1) {
    var indexNum = index.indexOf("consectetur")
    console.log(indexNum)

}

// task No 10 --------

var ABC = "abcde"
console.log(ABC.charAt(2))

// task No 11 --------

var text = "Lorem ipsum, dolor sit amet consectetur"
var cha = text.charAt(10)

// task No 12 --------

var str_2 = "Lorem ipsum, dolor sit amet consectetur"
var x = str_2.slice(str_2.length - 1)
console.log(x)

// task No 13 --------


// var inpUT = prompt("Enter any Character","hello world")
var cha = text.charAt(5)

// task No 14 --------
var text = "Character"
if (text.includes("ara")) {
    console.log(true)
    var cha = text.indexOf("ara")

}


// task No 15 --------
var Arr_3 = [];
var text = "character"
for (let i = 0; i < text.length; i++) {
    var Cha = text.slice(i, i + 1)
    Arr_3.push(Cha)
}
console.log(Arr_3)

// task No 16 --------

var Replay = "He said No"
var RevisedReplay = Replay.replace("No", "Yes")
console.log(RevisedReplay)

// task No 17 --------


var srt_3 = "He is Number 1"
var srt_4 = Replay.replace("1", "one")
console.log(srt_4)

// task No 18 --------

var x = "A,R,A,L,A"
var y = x.replace(/A/g, "Z");
console.log(y)

// ================== Chapter 26 (Rounding Numbers) ==============
// task No 1 ---------

var Num_1 = 51.5400612
Num_1 = Math.round(Num_1)
console.log(Num_1)

// task No 2 ---------

var origNum = 51.5400612
roundNum = Math.ceil(origNum)
console.log(roundNum)


// task No 3 ---------

var origNum = 51.5400612
roundNum = Math.floor(origNum)
console.log(roundNum)


// task No 4 ---------


var Num_2 = 51.5400452
var Num_3 = Math.round(Num_2)
console.log(Num_3)

// task No 5 ---------

var Num_5  = Math.floor(.5)
console.log(Num_5)

// ================== Chapter 27 (Random Numbers) ==============
// task No 1 ---------

var Random_Num = Math.random()
console.log(Math.round((Random_Num) * 50))

// task No 2 ---------


var Random_Num_1 = Math.random()
console.log(Random_Num_1)

// task No 3 ---------

var Dice = Math.round(Math.random() * 6)
console.log("dice " + Dice)

// task No 4 ---------

var Head_Tail = Math.round(Math.random())
Head_Tail = Head_Tail === 0 ? console.log("Head") : console.log("Tail")

// ================== Chapter 28, 29 (Converting Strings) ==============
// task No 1 ---------

var str_5  = "154"
str_5 =  parseInt(str_5)
console.log(str_5)

// task No 2 ---------

var str_5  = "123"
str_5 =  Number(str_5)
console.log( str_5)


// task No 3 ---------


var str_5  = "123.5451"
str_5 =  parseFloat(Math.ceil(str_5))
console.log(str_5)

// task No 4 ---------

var str_6 = "7581.542"
console.log(typeof str_6 + " " + str_6)
str_6 = Number(str_6)
console.log(typeof str_6 + " " + str_6)

// task No 5 ---------

//* var Num_6 = 1564.324
//* Num_6 = Num_6.toString()
//* console.log(typeof Num_6 + " " + Num_6)

// task No 6 ---------

var Num_6 = 42
Num_6 = Num_6.toString()
console.log(typeof Num_6 + " " + Num_6)


// task No 7 ---------

var str_7 = "3.14"
str_7 = Math.round(str_7)
console.log(str_7)



// ================== Chapter 30 (Controlling the length of decimals) ==============
// task No 1 ---------

var Num_7 = 125.656461521351.toFixed(4)
console.log(Num_7)

// task No 2 ---------

var Num_8 = 65.54616465084658115
Num_8 =  Num_8.toFixed(2).toString()
Num_8 = Number(Num_8) 
console.log(Num_8)

// task No 3 ---------

var Num_9 = 65.54616465084658115
Num_9 = Num_9.toFixed(2).toString()
if(Num_9.length >= 4){
    console.log(Num_9)
}

// task No 4 ---------

var Num_10 = 65.8181465084658115
// alert(Num_10.toFixed(2))



// ================== Chapter 31 - 34 (Date & Time) ==============
// task No 1 ---------

var dObj = new Date()

// task No 2 ---------

var Dstr = dObj.toString()
console.log(Dstr)

// task No 3 ---------

var d = new Date()
var  day = d.getDay()
console.log(day)

// task No 4 ---------

var dayNames = ["Sun","Mon","Tue","Wes",'Thus',"Fri","Sat"]
console.log(dayNames[day])

// task No 5 ---------

var date = d.getDate()
var day  = d.getDate()
var year =  d.getFullYear()
var Month = d.getMonth()
var hours = d.getHours()
var mints = d.getMinutes()
var second = d.getSeconds()
var milisecond  = d.getMilliseconds()
var time = d.getTime()

// task No 6 ---------

var later = new Date("12/31/2020")
console.log(later)
// task No 7 ---------

var Day_1992 = new Date("2/2/1992")
console.log(Day_1992)

// task No 8 ---------

var date = new Date("1980")
var currentdate = new Date()
date = currentdate - date  
console.log(date)

// task No 9 ---------

var date = new Date()
var Year  = date.setYear(2020)
console.log(Year)

// task No 10 --------

var date = new Date()
var month  = date.setMonth(1)
console.log(month)

// task No 11 --------

//? by Changing his Index Number 
var dayNames = ["Sun","Mon","Tue","Wes",'Thus',"Fri","Sat"]
console.log(dayNames[5])

// task No 12 --------

var date = new Date()
var Userinput = +prompt("enter Any time You Check Differance Betweer Current Time" , 20)
var Time = date.setMinutes(Userinput)
console.log(Time)


// task No 13 --------


var date = new Date()
var Userinput = +prompt("enter Any time You Check Differance Betweer Current Time" , 20)
var Time = date.setHours(Userinput)
console.log(Time)

// task No 14 --------
var UserInput = prompt("Enter YOur Birthdate ", "8/4/2003")
var currentdate = new Date
var UserDOB = new Date(UserInput) 

var diff = currentdate - UserDOB
var Diff  =  Math.round(diff / (1000*60*60*24*365))
console.log(Diff)

// ================== Chapter 35 - 37 (Functions) ==============
// task No 1 ---------

function hello(){
    alert("hello World")
}

// task No 2 ---------

function askName(){
    var userName = prompt("enter YOur name " ,"mubbashir")
}

// task No 3 ---------

function CallOther(){
    askName()
    hello()
}

// task No 4 ---------

function userName(){
    var userName = prompt("enter YOur name " ,"mubbashir")
    alert(userName)
}
userName()

// task No 5 ---------
var A = "Hello"
function concat(a,b,c){
    var concat = a + b + c
}
concat(A,"world",25)
// task No 6 ---------

function Concatenate(a,b){
    var Result = a + b
}

// task No 7 ---------

function Multiply(a,b,c){
    var Result = a * b *c
}


// task No 8 ---------

var arr = [1, 2, 3, 4, 5];
function average(){
    var Avg = 0;
for (let i = 0; i < arr.length; i++) {
Avg += arr[i]
}
Avg = Avg / arr.length
return Avg
}
console.log(average())
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;

// task No 9 ---------

function Sum (a,b){
    return a + b
}

// task No 10 --------
var arr = [1, 2, 3, 4, 5];
function average(){
    var Avg = 0;
for (let i = 0; i < arr.length; i++) {
Avg += arr[i]
}
Avg = Avg / arr.length
return Avg
}
console.log(average())


// task No 11 --------


function Sum (a,b){
    return a + b
}
var Sum = Sum(5,9)

// task No 12 --------

function LetterCount (a){
    return a.length
}
console.log(LetterCount("word"))
// task No 13 --------

function setYear (){
    var date = new Date()
    date.setYear(2020)
}

// task No 14 --------

function DOB (dateOfBirth){
    var currentdate = new Date
    var UserDOB = new Date(dateOfBirth) 
    
    var diff = currentdate - dateOfBirth
    var Diff  =  Math.round(diff / (1000*60*60*24*365))
    return Diff;
}

// task No 15 --------
var Arr_4 =['zaid','haris','raza','abubakar','hassan','hussain','fatima']
function presense(word){
    var Flag = false
    for (let i = 0; i < Arr_4.length; i++) {
        if(word === Arr_4[i]){
            Flag = true
          console.log(word + " found")
        }
    }if(!Flag){
        console.log("not Found")
    }
}
presense("zaid")

// task No 16 --------
function repeat(){
    var str = "abcde"
    str.repeat(10)
}


// task No 17 --------

function revese(){
    array = ['a','b','c','d','e']
    array.revese()

}

// ================== Chapter 38 (Local vs. Global Variables) ==============
// task No 1 ---------

function localVar(){
    var local = "This is the Local or Block Scope Variable"
}
// console.log(local) // not Defineed Error 
// task No 2 ---------

var Global  = "this is The Global varibale This also Access in Funtions"
 function GlobalVar(){
    console.log(Global)
 }
 GlobalVar()



// ================== Chapter 39, 40 (Switch Statements) ==============
// task No 1 ---------

var TODay  = 1
var Day ;
switch(TODay){
    case 0 :Day = "Sunday"
    break;
    case 1: Day = "Monday";
    break;
    case 2: Day = "Tuesday";
    break;
    case 3: Day = "Wednesday";
    break;
    case 4: Day = "Thursday";
    break;
    case 5: Day = "Friday";
    break;
    case 6: Day = "Saturday";
    break;
}
console.log(Day)

// task No 2 ---------

var UserCitysName = prompt("Enter Your City Name" ,"karachi")

switch(UserCitysName){

    case "karachi":
        alert("The City of Light");
        break;
    case "lahore":
        alert("Lahore is the second largest city in Pakistan");
        break;
    case "Peshawar":
        alert("The City of Flowers");
        break;
    case "Islamabad":
        alert("The Green City");
        break;
    default:alert("Sorry You're City Not Found in Our List");
}
