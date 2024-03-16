let percentage = prompt("Enter your percentage");
let Grade ;


if(percentage>=90 && percentage <=100)
{
    console.log("Grade A+1")
    Grade = "A+1"
}
else if(percentage>=80 && percentage <=89)
{
    console.log("Grade A1")
    Grade = "A1"
}
else if (percentage >= 70 && percentage <= 79) 
{
    console.log("Grade A")
    Grade = "A"
}
else if (percentage >= 60 && percentage <= 69)
 {
    console.log("Grade B")
    Grade = "B"
}
else if (percentage >= 50 && percentage <= 59)
 {
    console.log("Grade C")
    Grade = "C"

}
else if (percentage >= 40 && percentage <= 49)
 {
    console.log("Grade D")
    Grade = "D"
}
else if (percentage <34)
 {
    console.log("Fail")
    Grade = "Fail"

}
else
{
    console.log( "Incorrect Input")
}




switch(Grade)
{
    case "A+1":
    console.log("congratulation apne khasmir azad kar liya h job phr bhi nahi milni🙄");
    break;

    case "A1":
        console.log("wo daikhy upr wala aagy nikal gaya sar phar do jakar uska🙄");
        break;
    case "A":
        console.log("thori or mehnat kr lety trophy apki hi thi🙄");
        break;

    case "B":
        console.log("chalo ab rona nahi ha jo aya ha shukr kro🙄");
        break;

    case "C":
        console.log("mashallah ap ka future bright ha is me full light shight ha 🙄");
        break;

    case "D":
        console.log("ek papar supli me gaya chapak 🙄");
        break;
    case "Fail":
        console.log("sary papar supli me gay chapak chapak chapak😎");
        break;
}