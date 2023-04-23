<template>
    <div class="pt-16 pb-32 container">
        <div v-if="isError" class="text-center">
            <h1 class="text-2xl font-bold text-red">Произошла ошибка</h1>
        </div>
        <div v-else>
            <div class="hidden md:block">
                <div v-if="isLoading" class="flex items-center justify-center">
                    <loader-ui />
                </div>
                <div v-else>
                    <div class="flex flex-wrap gap-12 mb-28">
                        <card-ui v-for="good in goods" :key="good.id" :name="good.title" :image="good.image"
                            :price="good.price" />
                    </div>
                    <div class="flex justify-center items-center">
                        <pagination-ui :items="total" :current="current" @setPage="setCurrent" />
                    </div>
                </div>
            </div>
            <div class="md:hidden" v-if="!isLoading">
                <carousel :items-to-show="1">
                    <slide v-for="good in goods" :key="good.id">
                        <card-ui :name="good.name" :image="good.image" :price="good.price" />
                    </slide>
                    <template #addons>
                        <navigation />
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>


<script>
import { request } from '@/util/api';
import { ref, onMounted, watch } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default {
    name: 'listing-component',
    setup() {
        const goods = ref([]);
        const isLoading = ref(true);
        const isError = ref(false);
        const current = ref(1);
        const total = ref(0);

        const setCurrent = (value) => current.value = value;
        const getProducts = async (page) => {
            isLoading.value = true;
            try {
                const { data } = await request.get(`/product/list/?limit=16&page=${page}`);

                goods.value = data.results;
                total.value = Math.ceil(data.total / 3);
            } catch (err) {
                isError.value = true;
            } finally {
                isLoading.value = false;
            }
        };

        onMounted(async () => {
            await getProducts(current.value);
        });

        watch(current, async (newValue) => {
            await getProducts(newValue);
        });

        return { goods, isLoading, current, setCurrent, total, isError }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    }
}
</script>
