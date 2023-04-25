<template>
    <div class="w-[191px] relative">
        <input type="text" placeholder="Search..." :value="value" @input="getValue" class="
                    border-b border-1 border-black bg-grey w-full
                    border-opacity-50 placeholder-black placeholder-opacity-50
                ">
        <base-icon name="search" @click="search" class="
                    absolute top-1/2 transform translate-y-[-50%] 
                    right-[-16px] cursor-pointer z-10 w-4 h-4 hover:text-pink
                " />
    </div>
</template>

<script>
export default {
    name: 'search-component',
    props: {
        value: String,
        search: Function,
    },
    setup(_, { emit }) {
        return {
            getValue(event) {
                emit('getValue', event);
            },
        }
    }
}
</script>
