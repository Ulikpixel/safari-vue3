<template>
   <input-ui label="email" :value="email" :onChange="getEmail" />
</template>

<script>
    export default {
        name: 'home-view',
        data() {
            return {
                email: '',
            }
        },
        methods: {
            getEmail(event) {
                this.email = event.target.value;
            }
        }
    }
</script>
