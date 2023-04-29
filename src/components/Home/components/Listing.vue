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
                        :data="good"
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
import { useGoods } from '@/hooks/useGoods';
import { minWidth } from '@/util/media';
import { ref, onMounted, watch } from 'vue';

export default {
    name: 'listing-component',
    setup() {
        const page = ref(1);
        const limit = minWidth('768') ? 16 : 4;
        const { 
            getGoods, 
            goods, 
            isLoading, 
            goodsTotal: total,
            isError
        } = useGoods();

        const setCurrent = (value) => page.value = value;

        onMounted(async () => {
            await getGoods({ limit, page: page.value });
        });

        watch(page, async (page) => {
            await getGoods({ limit, page });
        });

        return { goods, isLoading, page, setCurrent, total, isError }
    },
}
</script>
