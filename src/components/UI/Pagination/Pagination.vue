<template>
    <div class="w-full pb-5 flex justify-center relative">
        <button
            v-if="slide > 0"
            @click="slide = slide - 1" 
            class="
                w-[74px] flex justify-center relative
                after:absolute after:bottom-0 after:left-0 after:w-[74px]
                after:h-0.5 after:bg-black after:bg-opacity-30
            "
        >
            <img src="@/assets/icons/arrow.svg" alt="arrow" class="w-4 rotate-90 relative top-1.5">
        </button>
        <ul class="flex w-[225px] overflow-hidden">
            <li
                v-for="item in items"
                :key="item"
                @click="setPage(item)"
                :style="{ right: `${74 * slide}px` }"
                class="
                    w-[74px] flex flex-col justify-center items-center 
                    relative cursor-pointer duration-500 right-[74px]
                "
            >
                <p :class="{ 'text-pink': current === item }">{{ item }}</p>
                <div
                    class="w-[75px] h-0.5 mt-5"
                    :class="{
                        'bg-pink': current === item,
                        'bg-black bg-opacity-30': current !== item
                    }"
                >
                </div>
            </li>
        </ul>
        <button
            v-if="items > 3" 
            @click="slide = slide + 1"
            :class="{ '!flex': slide !== items - 3 }"
            class="
                w-[74px] justify-center relative hidden
                after:absolute after:bottom-0 after:left-0 after:w-[74px]
                after:h-0.5 after:bg-black after:bg-opacity-30
            "
        >
            <img src="@/assets/icons/arrow.svg" alt="arrow" class="w-4 rotate-[-90deg] relative top-1.5">
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'pagination-ui',
    props: {
        items: Number,
        current: Number,
    },
    setup(_, { emit }) {
        const slide = ref(0);
    
        const setPage = (current) => emit('setPage', current);

        return { slide, setPage }
    },
}
</script>
