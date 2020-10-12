new Vue({
    el:"#textDirectives",
    data:{
        myText:"The text are showing in v-text directives",
        htmlCode:"<strong>This is strong text</strong>",
        directivesPart8:"directives part8 conditional rendering",
        user: "Sahadat",
        userAge:26,
        allowedAge:18,
        varOnce:'v once value'
    },
    methods: {
        notAllow(){
            return this.userAge=16;
        },
        checkUser(){
            return this.user==="Sahadat" ? true : false;
        },
        changeUser(){
            return this.user="Afroza Khatun";
        },
        vonce(){
            setTimeout(()=>{
                return this.varOnce="change variable value using V Once";
            },2000)
        }
    }
    
});