new Vue({
    el: '#app',
    data: {
        name: 'Sahadat Hossen',
        x: 0,
        y: 0,
    },
    methods: {
        changeUser() {
            return this.name = 'Afroza Khatun';
        },
        getValue(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})