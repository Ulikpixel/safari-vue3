<template>
    <div class="flex w-16 h-5 border rounded">
        <div 
            @click="plus"
            class="
                w-6/12 flex items-center justify-center
                border-r border-black cursor-pointer hover:text-white hover:bg-pink
            "
        >
            +
        </div>
        <div
            @click="minus"
            class="
                w-6/12 flex items-center justify-center 
                cursor-pointer hover:text-white hover:bg-pink
            "
        >
            -
        </div>
    </div>
</template>

<script>
export default {
    name: 'counter-component',
    props: {
        plus: Function,
        minus: Function,
    }
}
</script>