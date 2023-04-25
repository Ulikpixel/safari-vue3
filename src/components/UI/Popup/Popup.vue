<template>
    <div class="absolute top-0 left-0 bg-black z-10 w-full h-full bg-opacity-30 cursor-pointer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'popup-ui'        
    }
</script>
