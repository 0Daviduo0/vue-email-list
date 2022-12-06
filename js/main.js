const { createApp } = Vue;

    createApp({
        data() {
            return {
                genEmail: []
            }
        },
        methods : {

        },
        mounted(){

            for (i = 0; i < 10; i++){

                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((email) => {
                this.genEmail.push(email.data.response);
                });

            }

            console.log(this.genEmail);

        }

    })
    .mount('#app')