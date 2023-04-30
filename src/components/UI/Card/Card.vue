<template>
    <div
        class="w-[297px] h-[576px] bg-white relative overflow-hidden" 
        :class="{ 'shadow-card': hoverCard }"
        @mouseover="hoverCard = true" 
        @mouseleave="hoverCard = false"
    >
        <div 
            v-if="hoverCard" 
            class="
                absolute top-0 left-0 w-full h-[457px] bg-black bg-opacity-20
                flex justify-center items-center flex-col gap-3
            "
        >
            <heart-component @click="setLike" />
            <div 
                class="
                    w-32 h-9 bg-white flex items-center 
                    justify-center gap-x-2 cursor-pointer
                " 
                @click="addBasket"
            >
                <p class="text-[10px] font-bold">ADD TO CART</p>
                <base-icon name="basket" class="w-3 h-3 text-pink relative bottom-px" />
            </div>
        </div>
        <img :src="data.image" class="w-full h-[457px]" alt="image">
        <div class="h-[119px] flex flex-col gap-4 items-center justify-center text-xl">
            <p>{{ data.title }}</p>
            <p class="flex items-center">
                <base-icon name="currency" class="w-4" />
                {{ parsePrice(data.price) }}
            </p>
        </div>
    </div>
</template>

<script>
import HeartComponent from '@/components/UI/Card/components/Heart';
import { LocalStorage } from '@/util/localStorage';
import { parsePrice } from '@/util/parsePrice';
import { ref } from 'vue';
import { proxyToObject } from '@/util/proxyToObject';
import { useStore } from 'vuex';
import { getQuantityGoods } from '@/util/getQuantityGoods';
import { request } from '@/util/api';

export default {
    name: 'card-ui',
    setup(props) {
        const hoverCard = ref(false);
        const good = proxyToObject(props.data);
        const store = useStore();

        const addBasket = () => {
            const list = LocalStorage.get('goods') || [];
            const idxGood = list.findIndex((item) => item.id === good.id);

            if(idxGood >= 0) {
                list[idxGood].quantity = list[idxGood].quantity + 1;
                LocalStorage.set('goods', list);
                store.commit('setBasketQuantity', getQuantityGoods(list))
            } else {
                const newList = [...list, { ...good, quantity: 1 }];
                LocalStorage.set('goods', newList)
                store.commit('setBasketQuantity', getQuantityGoods(newList))
            }
        }   
        console.log(good.likes);
        const setLike = async () => {
            const id = props.data.id;

            try {
                const response = await request.get(`/like/${id}`);
                console.log(response.data);
            } catch(err) {
                console.log(err);
            }
        };

        return {
            hoverCard, parsePrice, addBasket, setLike
        }
    },
    props: {
        data: {
            id: Number,
            likes: Array,
            name: String,
            price: Number,
            image: String,
            category: String,
            size: [String, Number],
            color: String,
        }
    },
    components: {
        HeartComponent
    },
}
</script>