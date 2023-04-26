<template>
    <div class="w-[191px] relative">
        <input
            type="text"
            placeholder="Search..." 
            :value="value" 
            @input="getValue" 
            class="
                border-b border-1 border-black bg-grey w-full
                border-opacity-50 placeholder-black placeholder-opacity-50
            "
        >
        <base-icon 
            name="search" 
            @click="searchGood" 
            class="
                absolute top-1/2 transform translate-y-[-50%] 
                right-[-16px] cursor-pointer z-10 w-4 h-4 hover:text-pink
            "
        />
        <ul
            v-if="list.length > 0 && value.length > 0"
            class="absolute z-40 bg-white w-full top-[30px] border rounded"
        >
            <li
                v-for="item in list" :key="item.id"
                @click="getGood(item)"
                class="border-b px-4 py-1 cursor-pointer hover:bg-grey"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'search-component',
    props: {
        value: {
            type: String,
            default() {
                return '';
            }
        },
        list: {
            type: Array,
            default() {
                return [];
            }
        },
    },
    setup(_, { emit }) {
        return {
            getValue(event) {
                emit('getValue', event);
            },
            getGood(data) {
                emit('getGood', data);
            },
            searchGood(value) {
                emit('search', value)
            },
        }
    }
}
</script>
