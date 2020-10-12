new Vue({
    el: '#app',
    data: {
        name: 'Sahadat Hossen'
    },
    methods: {
        updateName(parameter1) {
            this.name = parameter1;
        }
    }
})