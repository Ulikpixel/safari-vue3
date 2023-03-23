<template>
   <checkbox-ui :checked="status" @click="setStatus" />
</template>

<script>
    export default {
        name: 'home-view',
        data() {
            return {
                status: false,
            }
        },
        methods: {
            setStatus() {
                this.status = !this.status
            }
        }   
    }
</script>
