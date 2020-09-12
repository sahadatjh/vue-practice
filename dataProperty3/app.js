new Vue({
    el: "#myInfo",
    data:{
        name: "Sahadat Hossain",
        age: 36,
        favorite: ['Apple', 'Banana',1994,'Afroza'],
        myObject:{
            firstElement:'First Element',
            secondElement:"This Object Element",
        },
        myFunction: ()=>{
            return "Successfully you enter my function";
        }
    }
});