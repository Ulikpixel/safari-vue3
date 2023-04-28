<template>
    <header class="h-[70px] bg-grey">
        <div class="max-w-small-container relative m-auto px-5 flex items-center justify-between h-full">
            <nav
                class="
                    absolute z-[40] lg:z-0 top-0 text-center h-screen flex items-center
                    bg-pink w-80 flex-col gap-6 pt-14 text-white duration-500
                    lg:gap-[50px] lg:relative lg:h-auto lg:pt-0 lg:text-black
                  lg:bg-grey lg:w-auto lg:text-left lg:flex-row right-0 lg:flex lg:right-0
                "
                :class="{ 'right-0': navbar, 'right-[-350px]': !navbar }"
            >
                <router-link
                    v-for="nav in navText"
                    :to="nav.path" 
                    :key="nav.path" 
                    v-slot="{ isExactActive }"
                >
                    <p 
                        :class="{ 'text-brown lg:text-pink': isExactActive }" 
                        class="font-bold relative"
                    >
                        {{ nav.text }}
                    </p>
                </router-link>
                <router-link 
                    class="block lg:hidden relative" 
                    v-for="nav in navIcon" 
                    :to="nav.path" 
                    :key="nav.path"
                    v-slot="{ isExactActive }"
                >
                    <base-icon 
                        :name="nav.icon" 
                        class="w-4 h-4 text-white" 
                        :class="{ 'text-brown': isExactActive }"
                    />
                    <div
                        v-if="nav.icon === 'basket' && $store.state.goodsBasketQuantity > 0"
                        class="absolute top-2 left-2 bg-purple p-1 rounded-full"
                    >
                        <p class="text-xs text-white">{{ allQuantity }}</p>
                    </div>
                </router-link>
            </nav>
            <img src="@/assets/icons/logo.svg" class="w-[70px] hidden lg:block" alt="icon" />
            <nav class="flex gap-x-7 items-center">
                <search-component 
                    class="mr-6"
                    :value="searchValue" 
                    :list="listGoods"
                    @getValue="searchValue = $event.target.value" 
                    @getGood="showGood"
                    @search="search" 
                />
                <router-link 
                    v-for="nav in navIcon" 
                    class="hidden lg:block relative" 
                    :to="nav.path" 
                    :key="nav.path"
                    v-slot="{ isExactActive }"
                >
                    <base-icon 
                        :name="nav.icon" 
                        class="w-4 h-4 hover:text-pink" 
                        :class="{ 'lg:text-pink': isExactActive }" 
                    />
                    <div
                        v-if="nav.icon === 'basket' && $store.state.goodsBasketQuantity > 0"
                        class="absolute top-2 left-2 bg-purple p-1 rounded-full"
                    >
                        <p class="text-xs text-white">{{ allQuantity }}</p>
                    </div>
                </router-link>
            </nav>
            <burger-component :isActive="navbar" class="lg:hidden z-[999]" @click="navbar = !navbar" />
        </div>
        <modal-component :good="modalGood" @close="modalGood = null" />
        <popup-ui v-if="modalGood" @click="modalGood = null" />
        <popup-ui v-if="navbar" @click="navbar = !navbar" />
    </header>
</template>

<script>
import SearchComponent from '@/components/Header/components/Search';
import BurgerComponent from '@/components/Header/components/Burger';
import ModalComponent from '@/components/Header/components/Modal';
import { computed, onMounted, ref } from 'vue';
import { request } from '@/util/api';
import { getQuantityGoods } from '@/util/getQuantityGoods';
import { LocalStorage } from '@/util/localStorage';
import { useStore } from 'vuex';

export default {
    name: 'header-component',
    setup() {
        const navText = [
            { text: 'Home', path: '/' },
            { text: 'Clothes', path: '/listing/clothes' },
            { text: 'Shoes', path: '/listing/shoes' },
            { text: 'Accessories', path: '/listing/accessories' },
        ];
        const navIcon = [
            { icon: 'profile', path: '/profile' },
            { icon: 'basket', path: '/basket' },
        ];

        const navbar = ref(false);
        const searchValue = ref('');
        const listGoods = ref([]);
        const modalGood = ref(null);
        const store = useStore();

        const search = async () => {
            const title = searchValue.value;
            try {
                const response = await request('/goods', { params: { title } });
                listGoods.value = response.data.results;
            } catch(err) {
                console.log(err);
            }
        };
        
        const showGood = (good) => {
            listGoods.value = [];
            modalGood.value = good;
        };

        const allQuantity = computed(() => {
            return store.state.goodsBasketQuantity >= 99 ? '+99' : store.state.goodsBasketQuantity;
        });

        onMounted(() => {
            const goods = LocalStorage.get('goods') || [];
            store.commit('setBasketQuantity', goods.length > 0 ? getQuantityGoods(goods) : 0)
        })

        return {
            searchValue,
            navbar,
            navText,
            navIcon,
            search,
            listGoods,
            showGood,
            modalGood,
            ModalComponent,
            allQuantity,
        }
    },
    components: {
        SearchComponent,
        BurgerComponent,
        ModalComponent,
    }
}

</script>
