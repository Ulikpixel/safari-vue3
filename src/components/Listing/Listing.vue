<template>
    <section class="pt-20 pb-32">
        <div class="container">
            <h1 class="text-3xl font-bold uppercase mb-11">
                {{ $route.params.type }}
            </h1>
            <div class="flex flex-col justify-between items-start gap-12 lg:flex-row">
                <aside class="w-full lg:max-w-[300px]">
                    <filter-component
                        :state="filterState" 
                        :data="filterData[$route.params.type]"
                        @setFilter="setFilter"
                        @getPrice="setPrice"
                    />
                </aside>
                <div class="pb-5 w-full">
                    <select-ui
                        :options="optionsSort"
                        :currentOption="sort"
                        @selectOption="setSort"
                        class="w-[195px] h-[37px] ml-auto mb-4"
                    />
                    <hr class="mb-8">
                    <div 
                        v-if="!isLoading && goods.length > 0" 
                        class="
                            flex flex-wrap gap-x-7 gap-y-16
                            justify-center lg:justify-start
                        "
                    >
                        <card-ui
                            v-for="good in goods"
                            :key="good.id"
                            :name="good.title"
                            :price="good.price"
                            :image="good.image"
                        />
                    </div>
                    <div class="text-center" v-if="!isLoading && goods.length === 0">
                        <p class="font-semibold text-2xl text-pink">Ничего не найдено!</p>
                    </div>
                    <div v-if="isLoading" class="w-full flex items-center justify-center">
                        <loader-ui />
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center mt-24">
                <pagination-ui
                    v-if="!isLoading && goodsTotal > 1"
                    :items="goodsTotal"
                    :current="page"
                    @setPage="setPage" 
                />
            </div>
            <up-ui class="mx-auto lg:mx-0 lg:ml-auto" />
        </div>
    </section>
</template>

<script>
import { request } from '@/util/api';
import { ref, onMounted, watch } from 'vue';
import FilterComponent from '@/components/Listing/components/Filter/Filter';
import { LISTING_FILTER } from '@/components/Listing/constants';
import { useRoute } from 'vue-router';
import { minWidth } from '@/util/media';

export default {
    name: 'listing-component',
    components: { FilterComponent },
    setup() {
        const defaultFilterState = {
            category: null,
            size: null, 
            color: null,
            price: null,
        }
        const sort = ref('-price');
        const goods = ref([]);
        const isLoading = ref(false);
        const page = ref(1);
        const goodsTotal = ref(0);
        const isError = ref(false);
        const route = useRoute();
        const filterState = ref(defaultFilterState);

        const optionsSort = [
            { name: 'Most popular', value: 'likes' },
            { name: 'Price: High to Low', value: 'price' },
            { name: 'Price: Low to High', value: '-price' },
        ];
        const limit = minWidth('768') ? 12 : 4;

        const setSort = (option) => sort.value = option.value;

        const setPage = (value) => page.value = value;

        const getProducts = async (params = { page: 1, ordering: 'likes' }) => {
            isLoading.value = true; 
            try {
                const { data } = await request.get('goods',{ 
                    params: { 
                        ...params, 
                        limit, 
                        types: route.params.type,
                    }
                });

                goods.value = data.results;
                goodsTotal.value = Math.ceil(data.total / limit);
            } catch (err) {
                isError.value = true;
            } finally {
                isLoading.value = false;
            }
        };

        const setFilter = (key, data) => {
            filterState.value = { ...filterState.value, [key]: data };
        };

        const setPrice = (price) => filterState.value = { ...filterState.value, price };

        onMounted(async () => {
            await getProducts();
        }); 

        watch([sort, page, filterState, route], async (newValue) => {
            const [, page, filterState, route] = newValue;
            const params = {
                page, 
                types: route.params.type,
                ordering: sort.value,
                ...filterState,
                ...(filterState?.price && filterState.price),
            };

            await getProducts(params);
        })

        watch(route, () => filterState.value = defaultFilterState);

        return {
            optionsSort,
            sort,
            setSort,
            goods,
            isLoading,
            page,
            goodsTotal,
            setPage,
            filterData: LISTING_FILTER,
            filterState,
            setFilter,
            setPrice,
        };
    },
}
</script>
