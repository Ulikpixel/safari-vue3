<template>
    <p class="text-2xl">
        {{ type }}
    </p>
</template>

<script>
    export default {
        name: 'listing-component',
        props: {
            type: String,
        }
    }
</script>
