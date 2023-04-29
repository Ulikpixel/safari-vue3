import { request } from "@/util/api";
import { ref } from "vue";

export const useGoods = () => {
    const goods = ref([]);
    const isLoading = ref(false);
    const isError = ref(false);
    const goodsTotal = ref(0);

    const getGoods = async (params = { page: 1, limit: 12 }) => {
        isLoading.value = true; 
        isError.value = false;

        try {
            const { data } = await request.get('/goods', { params });
            goods.value = data.results;
            goodsTotal.value = Math.ceil(data.total / params.limit);
            isLoading.value = false;
        } catch (err) {
            isError.value = true;
            isLoading.value = false;
        }
    };

    return { 
        goods, 
        isLoading, 
        isError, 
        goodsTotal,
        getGoods,
    };
};