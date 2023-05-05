<template>
    <div 
        :class="{ 'border-pink': checked }"
        class="
            w-4 min-w-[16px] h-4 rounded-full border-2 
            border-grey flex items-center justify-center
        "
    >
        <div 
            :class="{ 'bg-pink': checked }"
            class="w-2 h-2 bg-clear-text rounded-full"
        ></div>
    </div>
</template>

<script>
    export default {
        name: 'checkbox-point-ui',
        props: {
            checked: Boolean,
        }
    }
</script>
