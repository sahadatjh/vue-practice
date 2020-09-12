new Vue({
    el: "#myInfo",
    data:{
        name: "Sahadat Hossain",
        myObject:{
            firstElement:'First Element',
            secondElement:"It is Object Element",
        }
    },
    methods: {
        myFunction: function(){
            return "function call using method";
        },
        myFunction2(){
            return "function call to another way";
        }
    }
});