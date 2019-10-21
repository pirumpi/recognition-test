const app = new Vue({
    el: '#app',
    methods: {
        capture: data => faces.push(data)
    },
    data: {
        faces: []
    }
});

export default app;