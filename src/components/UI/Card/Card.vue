<template>
    <div class="w-[297px] h-[576px] bg-white relative overflow-hidden" :class="{ 'shadow-card': hoverCard }"
        @mouseover="hoverCard = true" @mouseleave="hoverCard = false">
        <div v-if="hoverCard" class="
                    absolute top-0 left-0 w-full h-[457px] bg-black bg-opacity-20
                    flex justify-center items-center flex-col gap-3
                ">
            <heart-component @click="setLike" />
            <div class="w-32 h-9 bg-white flex items-center justify-center gap-x-2 cursor-pointer" @click="addBasket">
                <p class="text-[10px] font-bold">ADD TO CART</p>
                <base-icon name="basket" class="w-3 h-3 text-pink relative bottom-px" />
            </div>
        </div>
        <img :src="image" class="w-full h-[457px]" alt="image">
        <div class="h-[119px] flex flex-col gap-4 items-center justify-center text-xl">
            <p>{{ name }}</p>
            <p class="flex items-center">
                <base-icon name="currency" class="w-4" />
                {{ price.toLocaleString("en-US", { currency: "USD" }) }}
            </p>
        </div>
    </div>
</template>

<script>
import HeartComponent from '@/components/UI/Card/components/Heart';
import { ref } from 'vue';

export default {
    name: 'card-ui',
    setup() {
        const hoverCard = ref(false);

        return {
            hoverCard
        }
    },
    props: {
        like: Boolean,
        name: String,
        price: Number,
        image: String,
        category: String,
        size: [String, Number],
        color: String,
        setLike: Function, 
        addBasket: Function,
    },
    components: {
        HeartComponent
    },
}
</script>