<template>
    <div
        class="
            w-10 h-10 relative overflow-hidden cursor-pointer
            
            before:absolute before:top-1/4 before:left-0 before:w-full
            before:bg-black before:h-1 before:duration-500

            after:absolute after:top-3/4 after:left-0 after:w-full
            after:bg-black after:h-1 after:duration-500
        "
        :class="{
            [`
                before:rotate-45 before:top-[50%] before:translate-y-[-50%]
                after:rotate-[-45deg] after:top-[50%] after:translate-y-[-50%]
            `]: isActive,
        }"
    >
        <span
            class="h-1 w-full absolute top-2/4 left-0 bg-black duration-500"
            :class="{ 'opacity-0': isActive }"
        ></span>
    </div>
</template>

<script>
    export default {
        name: 'burger-component',
        props: {
            isActive: Boolean
        }
    }
</script>
