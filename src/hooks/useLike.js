import { request } from "@/util/api";
import { proxyToObject } from "@/util/proxyToObject";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export const useLike = (likes) => {
    const isLoading = ref(false);
    const isError = ref(false);
    const isLike = ref(null);
    const store = useStore();
    const router = useRouter()

    const toggleLike = async (id) => {
        const isAuth = store.state.isAuth;

        if(!isAuth) {
            router.push({ path: '/profile' }); return;
        }

        isLoading.value = true;
        isError.value = false;

        try {
            const response = await request.get(`/like/${id}`)
    
            isLoading.value = false;
            
            if(response.data === 'Add Success') {
                isLike.value = true;
            } else {
                isLike.value = false;
            }
        } catch(err) {
            isError.value = true;
            isLoading.value = false;
        }
    }

    onMounted(() => {
        const userId = proxyToObject(store.state.isAuth.user.id);
        isLike.value = likes.includes(userId);
    })

    return {
        isLoading,
        isError,
        isLike,
        toggleLike,
    }
};