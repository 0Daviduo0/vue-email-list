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

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail.push(email.data.response);
            });

            console.log(this.genEmail);

        }

    })
    .mount('#app')