<template>
    <button 
        class="
            bg-pink text-white rounded-md py-3
            uppercase font-bold text-sm md:text-lg tracking-[2px]
            hover:bg-white hover:text-black hover:border-1
            hover:border-pink hover:border duration-500
        "
        :class="{ '!bg-pink-disabled pointer-events-none': disabled }"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'button-ui',
    props: {
        disabled: Boolean,
    }
}
</script>
