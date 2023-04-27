<template>
    <div class="w-[235px] h-7 overflow-hidden flex">
        <div class="flex gap-2 mr-4">
            <input 
                type="text" 
                class="border w-[61px] px-1"
                :value="prices.price_from"
                @input="changePrice('price_from', $event.target.value)"
            >
            <p>to</p>
            <input 
                type="text" 
                class="border w-[61px] px-1"
                :value="prices.price_to"
                @input="changePrice('price_to', $event.target.value)"
            >
        </div>
        <button
            class="
                text-sm font-semibold text-white
                bg-pink px-3.5 py-1 rounded-sm
            "
            :class="{ 
                '!bg-pink-disabled pointer-events-none': prices.price_from.length === 0 || prices.price_to.length === 0
            }"
            @click="getPrice"
        >
            Apply
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'price-form',
    setup(_, { emit }) {
        const prices = ref({ price_from: "", price_to: "" });

        const changePrice = (key, data) => prices.value = { ...prices.value, [key]: data };
        const getPrice = () => emit('getPrice', prices);

        return { prices, changePrice, getPrice };
    },
}
</script>
