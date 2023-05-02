<template>
    <div class="bg-white border rounded-2xl overflow-hidden lg:rounded-none lg:border-none lg:flex">
        <div class="lg:w-6/12">
            <p 
                v-if="isDescription" 
                class="mb-4 font-bold text-grey-text hidden lg:block"
            >
                ITEM DESCRIPTION
            </p> 
            <div
                :class="classRigthLine" 
                class="px-8 flex flex-col items-center gap-8 py-6 lg:py-0 lg:h-[169px] lg:flex-row"
            >    
                <img 
                    :src="data.image"
                    class="w-[86px] h-[86px] border"
                    alt="icon"
                >
                <div class="text-center lg:text-left">
                    <p class="text-xl font-semibold">{{ data.title }}</p>
                    <p class="text-grey-text">Size - {{ data.size }}</p>
                    <div 
                        class="
                            flex flex-col gap-4 items-center mt-4 font-semibold 
                            text-pink text-xs lg:flex-row lg:gap-8 xl:text-base xl:gap-16
                        "
                    >
                        <div class="flex gap-2 items-center cursor-pointer">
                            <heart-ui className="w-4" />
                            <p>MOVE TO FAVORITES</p>
                        </div>
                        <div class="flex gap-2 items-center cursor-pointer" @click="remove">
                            <base-icon name="cross-circle" class="w-4" />
                            <p>REMOVE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-6 lg:w-2/12 lg:py-0">
            <p 
                v-if="isDescription"
                class="mb-4 font-bold text-grey-text hidden lg:block"
            >
                QUANTITY
            </p>
            <div class="text-center lg:hidden">
                <p 
                    class="mb-4 font-bold text-grey-text"
                >
                    QUANTITY:
                </p>
            </div>
            <div
                :class="classRigthLine" 
                class="
                    px-8 flex flex-col items-center justify-center text-xl lg:h-[169px]
                "
            >
                <p class="font-bold">{{ good.quantity }}</p>
                <counter-component 
                    :plus="() => counter('plus')"
                    :minus="() => counter('minus')"
                />
            </div>
        </div>
        <div class="lg:w-2/12">
            <p 
                v-if="isDescription" 
                class="mb-4 font-bold text-grey-text hidden lg:block"
            >
                UNIT PRICE
            </p>
            <div class="text-center lg:hidden">
                <p 
                    class="font-bold text-grey-text"
                >
                    UNIT PRICE:
                </p>
            </div>
            <div 
                :class="classRigthLine" 
                class="
                    px-8 flex items-center justify-center text-xl py-6 lg:py-0 lg:h-[169px]
                "
            >
                <base-icon name="currency" class="w-4" />
                {{ parsePrice(good.price) }}
            </div>
        </div> 
        <div class="lg:w-2/12">
            <p
                v-if="isDescription" 
                class="mb-4 font-bold text-grey-text hidden lg:block"
            >
                SUB TOTAL
            </p>
            <div class="mt-4 text-center lg:hidden">
                <p 
                    class="font-bold text-grey-text">
                    SUB TOTAL:
                </p>
            </div>
            <div 
                :class="classRigthLine" 
                class="
                    px-8 flex items-center justify-center text-xl py-6 lg:py-0 lg:h-[169px]
                "
            >
                <base-icon name="currency" class="w-4" />
                {{ parsePrice(totalPrice) }}
            </div>
        </div>
    </div>
</template>

<script>
import { parsePrice } from '@/util/parsePrice';
import { computed } from 'vue';
import CounterComponent from '@/components/Basket/components/Counter';

export default {
    name: 'card-component',
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
            quantity: Number,
        },
        isDescription: Boolean,
    },
    components: {
        CounterComponent
    },
    setup(props, { emit }) {
        const classRigthLine = 'border-b border-black border-opacity-30 lg:border';

        const remove = () => emit('remove', props.data.id);

        const counter = (type) => emit('counter', { id: props.data.id, type });

        const totalPrice = computed(() => props.data.price * props.data.quantity);

        return { 
            classRigthLine, 
            parsePrice, 
            totalPrice, 
            good: props.data,
            remove,
            counter
        }
    },
}
</script>