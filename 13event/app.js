new Vue({
    el: '#app',
    data: {
        name: 'Sahadat Hossen'
    },
    methods: {
        updateName(parameter1,event) {
            this.name = parameter1;
            console.log(event);
        }
    }
})