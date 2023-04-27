<template>
    <div class="flex flex-col">
        <label v-if="label?.length > 0" class="text-sm mb-2 md:mb-4" :class="{ 'text-red': error }">{{ label }}</label>
        <input :type="type || 'text'" :value="value" @input="getValue"
            class="w-full border rounded-md text-base h-11 px-3 md:h-[50px] md:px-4 md:text-lg"
            :class="{ 'border-red border-2 shadow-input-error': error }" />
    </div>
</template>

<script>
export default {
    name: 'input-ui',
    setup(_, { emit }) {
        return {
            getValue(event) {
                emit('getValue', event)
            }
        }
    },
    props: {
        value: String,
        label: String,
        error: Boolean,
        type: String,
    },
}
</script>
