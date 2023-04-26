<template>
    <div class="absolute top-0 left-0 bg-black z-20 h-[200vh] w-full bg-opacity-30 cursor-pointer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'popup-ui'        
    }
</script>
