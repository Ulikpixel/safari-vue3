<template>
    <svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="path"></svg>
</template>

<script>
import icons from './icons';

export default {
    name: 'base-icon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            path: icons[this.name],
        }
    }
}
</script>
