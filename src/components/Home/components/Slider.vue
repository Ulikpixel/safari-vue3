<template>
    <div class="w-full bg-pink relative min-h-[550px] lg:min-h-[1096px]">
        <div class="container">
            <img src="@/assets/images/logo.png" alt="logo"
                class="absolute top-0 left-1/2 w-3/5 translate-x-[-50%] mt-[8.7em]" />
            <carousel :items-to-show="1">
                <slide v-for="slide in 4" :key="slide">
                    <img src="@/assets/images/girl.png" alt="girl" class="w-[333px] lg:w-[666px]">
                </slide>
                <template #addons>
                    <pagination
                        class="
                            mt-8 h-10 flex items-center justify-center gap-6 [&_li]:w-3 [&_li]:h-3
                            [&_li]:lg:w-4 [&_li]:lg:h-4 [&_button]:opacity-0 pagination
                            [&_li]:border-white [&_li]:border-2 [&_li]:rounded-full mb-16
                        "
                    />
                </template>
            </carousel>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
    name: 'slider-component',
    components: {
        Carousel,
        Slide,
        Pagination,
    },

}
</script>

<style>
    .pagination .carousel__pagination-button--active {
        background: white;
        opacity: 1;
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
    .pagination .carousel__pagination-button--active::after {
        display: none;
    }
</style>
