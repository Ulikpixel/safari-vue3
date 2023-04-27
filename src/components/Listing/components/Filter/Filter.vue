<template>
    <div class="w-full flex flex-col gap-16 mt-2">
        <dropdown-component label="category">
            <ul class="text-grey-text flex flex-col gap-4 font-bold">
                <li
                    class="cursor-pointer hover:text-pink"
                    :class="{ 'text-pink': state.category === null }"
                    @click="setFilter('category', null)"
                >
                    All
                </li>
                <li 
                    v-for="item in data.category" 
                    :key="item"
                    @click="setFilter('category', item)"
                    class="cursor-pointer hover:text-pink"
                    :class="{ 'text-pink': state.category === item }"
                >
                    {{ item }}
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component
            label="size"
            :value="state.size"
            :clear="() => setFilter('size', null)"
        >
            <ul class="flex flex-wrap gap-4">
                <li 
                    v-for="size in data.sizes" 
                    :key="size"
                    :class="{ 'text-white bg-pink': state.size === size }"
                    @click="setFilter('size', size)"
                    class="
                        w-[54px] h-8 flex justify-center items-center rounded-sm
                        border cursor-pointer hover:text-white hover:bg-pink
                        overflow-hidden
                    "
                >
                    {{ size }}
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component
            label="color"
            :value="state.color"
            :clear="() => setFilter('color', null)"
        >
            <ul class="grid gap-y-4 grid-cols-4 lg:grid-cols-3">
                <li 
                    v-for="color in data.colors" 
                    :key="color.text" 
                    class="flex items-center gap-1.5 cursor-pointer"
                    :class="{ 'text-pink font-bold': color.text === state.color }"
                    @click="setFilter('color', color.text)"
                >
                    <div
                        class="w-8 h-8"
                        :class="{ 
                            [color.class]: true, 
                            'border-2 border-pink border': color.text === state.color 
                        }"
                    >
                    </div>
                    <p class="text-sm">{{ color.text }}</p>
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component
            label="price"
            :value="state.price"
            :clear="() => setFilter('price', null)"
        >
            <ul class="flex flex-col gap-4 mb-3">
                <li 
                    v-for="price in data.prices" 
                    :key="price.price_to" 
                    class="flex gap-4 cursor-pointer"
                    @click="setFilter('price', price)"
                >
                    <checkbox-ui
                        :checked="price.price_from === state?.price?.price_from && price.price_to === state?.price?.price_to" 
                    />
                    <div class="flex gap-4 font-bold">
                        <p class="flex">
                            <base-icon name="currency" class="w-3" />
                            {{ parsePrice(price.price_from) }}
                        </p>
                        <p>-</p>
                        <p class="flex">
                            <base-icon name="currency" class="w-3" />
                            {{ parsePrice(price.price_to) }}
                        </p>
                    </div>
                </li>
            </ul>
            <priceform-component @getPrice="getPrice" />
        </dropdown-component>
    </div>
</template>

<script>
import DropdownComponent from '@/components/Listing/components/Filter/components/Dropdown';
import PriceformComponent from '@/components/Listing/components/Filter/components/PriceForm';
import { parsePrice } from '@/util/parsePrice';

export default {
    name: 'filter-component',
    components: {
        DropdownComponent,
        PriceformComponent
    },
    props: {
        data: {
            category: Array,
            sizes: Array,
            colors: Array,
            prices: {
                from: Number,
                to: Number,
            },
        },
        state: {
            category: String,
            sizes: [String, Number],
            colors: String,
            prices: {
                from: Number,
                to: Number,
            },
        },
    },

    setup(_, { emit }) {
        const setFilter = (key, data) => {
            emit('setFilter', key, data)
        };

        const getPrice = (prices) => emit('getPrice', prices);

        return {
            parsePrice,
            setFilter,
            getPrice,
        }
    }
}
</script>
