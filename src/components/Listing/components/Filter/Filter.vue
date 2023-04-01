<template>
    <div class="w-full flex flex-col gap-16 mt-2">
        <dropdown-component label="category">
            <ul class="text-grey-text flex flex-col gap-4 font-bold">
                <li>All</li>
                <li v-for="item in category" :key="item">
                    {{ item }}
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component label="size">
            <ul class="flex flex-wrap gap-4">
                <li v-for="size in sizes" :key="size" class="
                            w-[54px] h-8 flex justify-center items-center rounded-sm
                            border cursor-pointer hover:text-white hover:bg-pink
                        ">
                    {{ size }}
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component label="color">
            <ul class="grid gap-y-4 grid-cols-4 lg:grid-cols-3">
                <li v-for="color in colors" :key="color" class="flex items-center gap-1.5">
                    <div class="w-8 h-8" :style="{ background: color }"></div>
                    <p class="text-sm">{{ color }}</p>
                </li>
            </ul>
        </dropdown-component>
        <dropdown-component label="price">
            <ul class="flex flex-col gap-4">
                <li v-for="price in prices" :key="price.to" class="flex gap-4">
                    <checkbox-ui />
                    <div class="flex gap-4 font-bold">
                        <p class="flex">
                            <base-icon name="currency" class="w-3" />
                            {{ parsePrice(price.from) }}
                        </p>
                        <p>-</p>
                        <p class="flex">
                            <base-icon name="currency" class="w-3" />
                            {{ parsePrice(price.to) }}
                        </p>
                    </div>
                </li>
            </ul>
        </dropdown-component>
    </div>
</template>

<script>
import DropdownComponent from '@/components/Listing/components/Filter/components/Dropdown';
import { parsePrice } from '@/util/parsePrice';

export default {
    name: 'filter-component',
    components: {
        DropdownComponent
    },
    props: {
        category: Array,
        sizes: Array,
        colors: Array,
        prices: Array,
    },

    setup() {
        return {
            parsePrice
        }
    }
}
</script>
