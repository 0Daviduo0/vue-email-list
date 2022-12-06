const { createApp } = Vue;

    createApp({
        data() {
            return {
                genEmail_1: "EmailPlaceholder",
                genEmail_2: "EmailPlaceholder",
                genEmail_3: "EmailPlaceholder",
                genEmail_4: "EmailPlaceholder",
                genEmail_5: "EmailPlaceholder",
                genEmail_6: "EmailPlaceholder",
                genEmail_7: "EmailPlaceholder",
                genEmail_8: "EmailPlaceholder",
                genEmail_9: "EmailPlaceholder",
                genEmail_10: "EmailPlaceholder",
            }
        },
        methods : {

        },
        mounted(){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_1 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_2 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_3 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_4 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_5 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_6 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_7 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_8 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_9 = email.data.response;
            });
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((email) => {
                this.genEmail_10 = email.data.response;
            });

            


            
        }

    })
    .mount('#app')