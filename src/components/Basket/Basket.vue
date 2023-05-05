<template>
    <section class="pt-16 pb-64">
        <div class="container">
            <h1 class="mb-10 text-xl font-extrabold text-center md:text-2xl md:text-left">
                Shopping Cart ({{ goods.length > 0 ? getQuantityGoods(goods) : 0 }} item)
            </h1>
            <div v-if="goods.length > 0">
                <ul class="flex flex-col gap-8 mb-8 md:mb-16">
                    <li v-for="(item, index) in goods" :key="item.id">
                        <card-component
                            :data="item"
                            :isDescription="index === 0"
                            @counter="counter"
                            @remove="remove"
                        />
                    </li>
                </ul>
                <div class="flex flex-col items-center justify-center mb-8 md:mb-16 md:items-end">
                    <div class="flex mb-2 text-xl md:text-2xl gap-4 md:gap-8"> 
                        <p class="font-bold">TOTAL:</p>
                        <div class="flex items-center gap-2">
                            <div class="w-5">
                                <base-icon name="currency" />
                            </div>
                            <p>{{ totalPrice }}</p>
                        </div>
                    </div>
                    <p class="font-bold text-grey-text">
                        Delivery fee not included yet
                    </p>
                </div>
                <div class="flex flex-col justify-end gap-8 md:gap-16 md:flex-row">
                    <button-ui
                        class="px-7"
                        @click="$router.push({ path: '/listing/clothes' })"
                    >
                        CONTINUE SHOPPING
                    </button-ui>
                    <button-ui
                        class="px-7"
                        @click="ordering"
                    >
                        PROCEED TO CHECKOUT
                    </button-ui>
                </div>
            </div>
            <div v-else class="flex flex-col items-center justify-center">
                <base-icon name="basket" class="w-10 text-pink" />
                <div class="text-xl text-red font-bold">
                    Корзина пуста!
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CardComponent from '@/components/Basket/components/Card';
import { getQuantityGoods } from '@/util/getQuantityGoods';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { LocalStorage } from '@/util/localStorage';
import { proxyToObject } from '@/util/proxyToObject';

export default {
    name: 'basket-view',
    components: { CardComponent },
    setup() {
        const store = useStore();
        const router = useRouter();
        const goods = ref([]);

        const ordering = () => {
            if(store.state.isAuth) {
                router.push({ path: '/order' });
            } else {
                router.push({ path: '/profile' });
            }
        }

        const counter = ({ type, id }) => {
            const index = goods.value.findIndex((item) => item.id === id);
            const list = [...goods.value];

            if(index < 0) return;

            if(type === 'plus') {
                list[index].quantity = list[index].quantity + 1;
                goods.value = list;
                return;
            } 

            list[index].quantity = list[index].quantity === 1 
                ? 1
                : list[index].quantity - 1

            goods.value = list;
        };

        const remove = (id) => {
            goods.value = goods.value.filter((item) => item.id !== id);
        };

        const totalPrice = computed(() => {
            return goods.value
                .map((item) => item.price * item.quantity)
                .reduce((acc, item) => acc + item);
        });

        onMounted(() => {
            goods.value = LocalStorage.get('goods') || [];
        })

        watch(goods, () => {
            LocalStorage.set('goods', proxyToObject(goods.value));
        })

        return {
            goods,
            getQuantityGoods,
            totalPrice,
            ordering,
            counter,
            remove,
        }
    }
}
</script>
