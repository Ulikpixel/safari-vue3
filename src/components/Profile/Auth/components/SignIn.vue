<template>
    <div class="relative">
        <div :class="{ 'opacity-50': isLoading || isError }">
            <p class="text-xl font-bold mb-8">SIGN IN</p>
            <form class="flex flex-col gap-8" @submit.prevent>
                <input-ui 
                    label="Username"
                    type="text" 
                    :value="body.username" 
                    @getValue="body.username = $event.target.value"
                    :error="check('username')"
                />
                <input-ui 
                    label="Password" 
                    type="password" 
                    :value="body.password"
                    @getValue="body.password = $event.target.value" 
                    :error="check('password')"
                />
                <div 
                    class="flex gap-2 cursor-pointer" 
                    @click="body.save = !body.save"
                >
                    <checkbox-ui :checked="body.save" />
                    <p>Remeber my details</p>
                </div>
                <button-ui @click="sendRequest">
                    SIGN IN
                </button-ui>
            </form>
        </div>
        <div 
            v-if="isLoading" 
            class="
                absolute top-0 left-0 w-full h-full 
                flex items-center justify-center
            "
        >   
            <loader-ui class="w-11" />
        </div>
        <div 
            v-if="isError" 
            class="
                absolute top-0 left-0 w-full h-full 
                flex flex-col items-center justify-center
            "
        >   
            <p class="font-bold text-xl text-red">Произошла ошибка!</p>
        </div>
    </div>
</template>

<script>
import { request } from '@/util/api';
import { LocalStorage } from '@/util/localStorage';
import { onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'sign-in',
    setup() {
        const errors = ref([]);
        const isError = ref(false);
        const isLoading = ref(false);
        const store = useStore();
        const body = ref({
            email: '',
            password: '',
            save: false,
        });

        const setError = (value) => errors.value = [...errors.value, value];

        const check = (key) => errors.value.includes(key);

        const sendRequest = async () => {
            const isUsername = body.value.username.length <= 4;
            const isPassword = body.value.password.length <= 4;

            if (isUsername) setError('username');
            if (isPassword) setError('password');
            if (errors.value.length > 0) return;

            const data = {
                username: body.value.username,
                password: body.value.password
            };

            isLoading.value = true;

            try {
                const response = await request.post('/auth/', data); // сделать потом

                isLoading.value = false;

                LocalStorage.set('isAuth', response.data);
                store.commit('setAuth',  response.data);

                if(body.value.save) {
                    LocalStorage.set('auth_data', data)
                } else {
                    LocalStorage.remove('auth_data')
                }
            } catch (err) {
                isError.value = true;
                isLoading.value = false;

                setTimeout(() => {
                    isError.value = false
                }, 3500);
            }
        }

        watch(body.value, () => {
            errors.value = [];
        })

        onMounted(() => {
            const authData = LocalStorage.get('auth_data');
            
            if(!authData) return;
            body.value.save = true;
            body.value = { ...body.value, ...authData };
        });

        return {
            sendRequest,
            body,
            check,
            isLoading,
            isError
        }
    }
}
</script>