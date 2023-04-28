<template>
    <div
        v-if="good"
        class="
            fixed w-[340px] h-[626px] translate-y-[-50%] bg-pink
            z-50 top-1/2 left-1/2 transform translate-x-[-50%]
            flex items-center justify-center
        "
    >
        <base-icon
            name="cross" 
            class="w-8 h-8 z-50 absolute top-1 right-[-10px] cursor-pointer" 
            @click="close"
        />
        <card-ui
            :key="good.id"
            :data="good"
        />
    </div>
</template>

<script>
export default {
    name: 'modal-component',
    setup(_, { emit }) {
        const close = () => emit('close');
        return { close };
    },
    props: {
        good: [Object, null],
    }
}
</script>
