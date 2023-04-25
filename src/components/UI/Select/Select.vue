<template>
    <div class="flex flex-col gap-2 md:gap-4">
        <label v-if="label?.length > 0">{{ label }}</label>
        <div class="border w-full h-10 md:h-[60px] rounded-md relative flex items-center px-4">
            <img
                src="@/assets/icons/arrow.svg"
                alt="icon"
                class="w-4 absolute top-1/2 right-4 transform translate-y-[-50%] cursor-pointer"
                :class="{ 'rotate-180': selected, 'pointer-events-none': options.length <= 0 }"
                @click="selected = !selected"
            />
            <ul v-if="selected" class="border absolute top-[110%] left-0 w-full rounded-md bg-white z-10 overflow-hidden">
                <li v-for="option in options" :key="option.value"
                    class="px-4 py-2 md:py-3 border-b last:border-none cursor-pointer hover:bg-pink hover:text-white"
                    :class="{ 'pointer-events-none bg-pink text-white': option.value === currentOption }"
                    @click="selectOption(option)">
                    {{ option.name }}
                </li>
            </ul>
            {{ options?.find((item) => item.value === currentOption)?.name }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'select-ui',
    setup(_, { emit }) {
        const selected = ref(false);

        const selectOption = (option) => {
            emit('selectOption', option);
            selected.value = false;
        }

        return { selected, selectOption, name }
    },
    props: {
        label: String,
        options: {
            type: Array,
            default() {
                return []
            }
        },
        currentOption: String,
    },
}
</script>
