<template>
    <header class="h-[70px] bg-grey">
        <div class="max-w-small-container relative m-auto px-5 flex items-center justify-between h-full">
            <nav class="
                    absolute z-20 top-0 text-center h-screen flex items-center
                    bg-pink w-80 flex-col gap-6 pt-14 text-white duration-500
                    lg:gap-[50px] lg:relative lg:h-auto lg:pt-0 lg:text-black
                  lg:bg-grey lg:w-auto lg:text-left lg:flex-row right-0 lg:flex lg:right-0
                "
                :class="{ 'right-0': navbar, 'right-[-350px]': !navbar }">
                <router-link v-for="nav in navText" :to="nav.path" :key="nav.path" v-slot="{ isExactActive }">
                    <p :class="{ 'lg:text-pink': isExactActive }" class="font-bold relative">
                        {{ nav.text }}
                        <span v-if="isExactActive" class="
                                            absolute bottom-[-5px] left-1/2 bg-white
                                            transform translate-x-[-50%] w-[150%] h-px 
                                            lg:bg-pink lg:bottom-[-12px]
                                        "></span>
                    </p>
                </router-link>
                <router-link class="block lg:hidden" v-for="nav in navIcon" :to="nav.path" :key="nav.path"
                    v-slot="{ isExactActive }">
                    <base-icon :name="nav.icon" class="w-4 h-4 hover:text-white" :class="{ 'text-pink': isExactActive }" />
                </router-link>
            </nav>
            <img src="@/assets/icons/logo.svg" class="w-[70px] hidden lg:block" alt="icon" />
            <nav class="flex gap-x-7 items-center">
                <search-component class="mr-6" :value="searchValue" @getValue="searchValue = $event.target.value" :search="search" />
                <router-link class="hidden lg:block" v-for="nav in navIcon" :to="nav.path" :key="nav.path"
                    v-slot="{ isExactActive }">
                    <base-icon :name="nav.icon" class="w-4 h-4 hover:text-pink" :class="{ 'text-pink': isExactActive }" />
                </router-link>
            </nav>
            <burger-component :isActive="navbar" class="lg:hidden z-30" @click="navbar = !navbar" />
        </div>
        <popup-ui v-if="navbar" @click="navbar = !navbar" />
    </header>
</template>

<script>
import SearchComponent from '@/components/Header/components/Search';
import BurgerComponent from '@/components/Header/components/Burger';
import { ref } from 'vue';

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
            { icon: 'heart', path: '/heart' },
        ];

        const navbar = ref(false);
        const searchValue = ref('');

        const search = () => console.log(searchValue.value);

        return {
            searchValue,
            navbar,
            navText,
            navIcon,
            search,
        }
    },
    components: {
        SearchComponent,
        BurgerComponent,
    }
}

</script>
