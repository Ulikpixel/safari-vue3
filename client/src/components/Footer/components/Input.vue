<template>
    <div class="w-[270px] h-10 border-pink border-2 rounded overflow-hidden relative">
        <input type="text" class="w-full h-full px-5" :value="value" @input="change">
        <button @click="clickBtn" class="
                    absolute top-0 right-0 flex items-center text-white
                    justify-center w-16 h-full bg-pink text-base
                ">
            OK
        </button>
    </div>
</template>

<script>
export default {
    name: 'input-component',
    props: {
        value: String,
        clickBtn: Function
    },
    setup(_, { emit }) {
        return {
            change(event) {
                emit('change', event)
            }
        }
    }
}
</script>
