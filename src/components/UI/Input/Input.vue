<template>
    <div class="flex flex-col">
        <label v-if="label?.length > 3" class="text-sm mb-2 md:mb-4" :class="{ 'text-red': error }">{{ label }}</label>
        <input
            type="text" 
            :value="value" 
            @input="onChange" 
            class="w-full border rounded-md text-base h-11 px-3 md:h-[60px] md:px-4 md:text-lg"
            :class="{ 'border-red border-2 shadow-input-error': error }"
        />
    </div>
</template>

<script>
export default {
    name: 'input-ui',
    props: {
        value: String,
        onChange: Function,
        label: String,
        error: Boolean,
    }
}
</script>
