function checkingnumber()
{
    var a1,b1;
    var a1= prompt("emter a1 ");
    var b1= prompt("emter b1 ");
    a1=number(a1);
    a1=number(a1);

    switch(a)
    {
        case "add":
            console.log("enter  add of the number",a1,"and",b1,"is..."(a1+b1));
            break;
        case "sub":
            console.log("enter  sub of the number",a1,"and",b1,"is..."(a1-b1));
            break;
        case "mul":
            console.log("enter  mul of the number",a1,"and",b1,"is..."(a1*b1));
            break;
        case "div":
            console.log("enter  div of the number",a1,"and",b1,"is..."(a1/b1));
            break;
            default:
            console.log("case not in list");
       

}
}
checkingnumber(prompt("enter operator"));