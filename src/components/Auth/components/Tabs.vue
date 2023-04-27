<template>
    <div class="flex w-[208.7px] justify-between m-auto font-bold">
        <p 
            class="border px-5 py-3 cursor-pointer rounded-l-md" 
            @click="handleClick(false)" 
            :class="{
                [hoverClass]: true,
                'text-white border border-pink bg-pink': !signUp
            }
        ">
            SIGN IN
        </p>
        <p 
            class="border px-5 py-3 cursor-pointer rounded-r-md" 
            @click="handleClick(true)" 
            :class="{
                [hoverClass]: true,
                'text-white border border-pink bg-pink': signUp
            }
        ">
            SIGN UP
        </p>
    </div>
</template>

<script>
export default {
    name: 'tabs-component',
    props: {
        signUp: Boolean,
    },
    setup(_, { emit }) {
        const handleClick = (status) => emit('handleClick', status); 
        const hoverClass = 'hover:text-white hover:bg-pink hover:border hover:border-pink duration-300';

        return {
            handleClick,
            hoverClass
        }
    }
}
</script>