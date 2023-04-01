<template>
    <div>
        <div class="flex justify-between items-center mb-4">
            <p class="uppercase text-xl font-bold">{{ label }}</p>
            <p  
                v-if="value"
                class="flex items-end gap-2 cursor-pointer text-sm font-bold text-clear-text"
                @click="clear"
            >
                Clear
                <base-icon name="cross" class="w-4 h-4" />
            </p>
        </div>
        <hr class="mb-8">
        <div
            class="hidden overflow-hidden lg:overflow-auto lg:block"
            :class="{ '!block': dropdown }"
        >
            <slot></slot>
        </div>
        <div
            class="text-center lg:hidden"
            :class="{ 'mt-5': dropdown }"
        >
            <button
                @click="dropdown = !dropdown"
                class="
                    uppercase text-pink cursor-pointer 
                    font-bold border px-10 py-2
                    hover:text-white hover:bg-pink
                "
            >
                {{ dropdown ? 'close' : 'open' }}
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'dropdown-component',
    props: {
        label: String,
        clear: Function,
        value: String,
    },
    setup() {
        const dropdown = ref(false);

        return {
            dropdown
        };
    },
}
</script>
