<template>
    <section class="pt-20 pb-32">
        <div class="container">
            <h1 class="text-3xl font-bold uppercase mb-11">
                {{ $route.params.type }}
            </h1>
            <div class="flex flex-col justify-between items-start gap-12 lg:flex-row">
                <aside class="w-full lg:max-w-[300px]">
                    <filter-component
                        :category="filterData.category"
                        :sizes="filterData.sizes"
                        :colors="filterData.colors"
                        :prices="filterData.prices"
                    />
                </aside>
                <div class="pb-5 w-full">
                    <select-ui
                        :options="options"
                        :currentOption="currentOption"
                        @selectOption="setOption"
                        class="w-[195px] h-[37px] ml-auto mb-4"
                    />
                    <hr class="mb-8">
                    <div v-if="!isLoading" class="flex flex-wrap gap-x-7 gap-y-16">
                        <card-ui
                            v-for="good in goods"
                            :key="good.id"
                            :name="good.name"
                            :price="good.price"
                            :image="good.image"
                        />
                    </div>
                    <div class="w-full flex items-center justify-center" v-else>
                        <loader-ui />
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center mt-24">
                <pagination-ui
                    v-if="!isLoading"
                    :items="goodsTotal"
                    :current="currentDot"
                    @setPage="setCurrent"
                />
            </div>
        </div>
    </section>
</template>

<script>
import { request } from '@/util/api';
import { ref, onMounted, watch } from 'vue';
import FilterComponent from '@/components/Listing/components/Filter/Filter';
import { LISTING_FILTER } from '@/components/Listing/constants';
import { useRoute } from 'vue-router';

export default {
    name: 'listing-component',
    components: { FilterComponent },
    setup() {
        const route = useRoute();
        const currentOption = ref('Most popular');
        const goods = ref([]);
        const isLoading = ref(false);
        const currentDot = ref(1);
        const goodsTotal = ref(0);
        const isError = ref(false);
        const typeListing = route.params.type;

        const FILTER = LISTING_FILTER[typeListing];
        const options = [
            { name: 'Most popular', value: 'Most popular' },
            { name: 'Best Selling', value: 'Best Selling' },
            { name: 'Price: High to Low', value: 'Price: High to Low' },
            { name: 'Price: Low to High', value: 'Price: Low to High' },
        ];

        const setOption = (option) => currentOption.value = option.value;
        const setCurrent = (value) => currentDot.value = value;
        const getProducts = async ({ page }) => {
            isLoading.value = true;
            try {
                const { data } = await request.get(`/product/list/?limit=12&page=${page}`);

                goods.value = [...data.results, ...data.results, ...data.results, ...data.results];
                goodsTotal.value = Math.ceil(data.total / 3);
            } catch (err) {
                isError.value = true;
            } finally {
                isLoading.value = false;
            }
        };

        onMounted(async () => {
            await getProducts({ page: currentDot.value });
        });

        watch([currentOption, currentDot], async (newValue) => { // filter
            const [currentOption, currentDot] = newValue;
            const uri = `?sort=${currentDot.value}&page=${currentOption.value}&limit=12`;
            console.log(uri);
        })

        return {
            options,
            currentOption,
            setOption,
            goods,
            isLoading,
            currentDot,
            goodsTotal,
            setCurrent,
            filterData: FILTER,
        };
    },
}
</script>
