<template>
    <div class="pt-16 pb-32 container">
        <div v-if="isError" class="text-center">
            <h1 class="text-2xl font-bold text-red">Произошла ошибка</h1>
        </div>
        <div v-else>
            <div v-if="isLoading" class="flex items-center justify-center">
                <loader-ui />
            </div>
            <div v-else>
                <div class="flex flex-wrap justify-center gap-12 mb-28 lg:justify-start">
                    <card-ui
                        v-for="good in goods"
                        :key="good.id"
                        :name="good.title"
                        :image="good.image"
                        :price="good.price"
                    />
                </div>
                <div class="flex justify-center items-center">
                    <pagination-ui :items="total" :current="page" @setPage="setCurrent" />
                </div>
                <up-ui class="mx-auto lg:mx-0 lg:ml-auto" />
            </div>
        </div>
    </div>
</template>


<script>
import { request } from '@/util/api';
import { minWidth } from '@/util/media';
import { ref, onMounted, watch } from 'vue';

export default {
    name: 'listing-component',
    setup() {
        const goods = ref([]);
        const isLoading = ref(true);
        const isError = ref(false);
        const page = ref(1);
        const total = ref(0);
        const limit = minWidth('768') ? 16 : 4;

        const setCurrent = (value) => page.value = value;
        const getProducts = async (page) => {
            isLoading.value = true;
            try {
                const { data } = await request.get('/goods', {  
                    params: { 
                        limit,  
                        page 
                    } 
                });

                goods.value = data.results;
                total.value = Math.ceil(data.total / limit);
            } catch (err) {
                isError.value = true;
            } finally {
                isLoading.value = false;
            }
        };

        onMounted(async () => {
            await getProducts(page.value);
        });

        watch(page, async (newValue) => {
            await getProducts(newValue);
        });

        return { goods, isLoading, page, setCurrent, total, isError }
    },
}
</script>
