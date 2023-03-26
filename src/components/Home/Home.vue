<template>
    <div class="h-40 w-full bg-red"></div>
</template>

<script>

export default {
    name: 'home-view',
    data() {
        return {
            options: [
                { name: 'one', value: '1' },
                { name: 'two', value: '2' },
                { name: 'three', value: '3' },
            ],
            option: undefined,
        }
    },
    methods: {
        select(option) {
            this.option = option.value;
        }
    }
}
</script>
