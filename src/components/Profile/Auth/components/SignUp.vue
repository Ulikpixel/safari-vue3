<template>
    <div class="relative">
        <div :class="{ 'opacity-50': isLoading || isError }">
            <p class="text-xl font-bold mb-8">CREATE ACCOUNT</p>
            <form class="flex flex-col gap-8" @submit.prevent>
                <input-ui
                    label="User name"
                    :value="body.username"
                    @input="(event) => setBody('username', event.target.value)"
                    :error="check('username')"
                />
                <input-ui
                    label="First name"
                    :value="body.first_name"
                    @input="(event) => setBody('first_name', event.target.value)"
                    :error="check('first_name')"
                />
                <input-ui
                    label="Last name"
                    :value="body.last_name"
                    @input="(event) => setBody('last_name', event.target.value)"
                />
                <input-ui
                    label="Email"
                    type="email"
                    :value="body.email"
                    @input="(event) => setBody('email', event.target.value)"
                    :error="check('email')"
                />
                <input-ui
                    label="Create Password"
                    type="password"
                    :value="body.password"
                    @input="(event) => setBody('password', event.target.value)"
                    :error="check('password') || validPassword"
                />
                <input-ui
                    label="Confirm Password"
                    type="password"
                    :value="confirmPassword"
                    @input="confirmPassword = $event.target.value"
                    :error="check('confirmPassword') || validPassword"
                />
                <div
                    v-if="validPassword"
                    class="text-center text-red font-bold text-lg"
                > 
                    <p>Пароли не совпадают!</p>
                </div>
                <div class="flex gap-2" @click="body.mailings = !body.mailings">
                    <checkbox-ui :checked="body.mailings" />
                    <p>I want to receive Safari newsletters with the best deals and offers</p>
                </div>
                <div v-if="validError.status">
                    <p class="text-lg font-bold text-red mb-3">Список ошибок:</p>
                    <ul class="flex flex-col gap-2 font-medium">
                        <li
                            v-for="item in validError.fields"
                            :key="item.field"
                            class="flex items-start gap-2"
                        >
                            <p class="font-bold text-lg">{{ item.field }}:</p>
                            <p class="text-red">{{ item.error }}</p>
                        </li>
                    </ul>
                </div>
                <button-ui @click="sendRequest">
                    CREATE ACCOUNT
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
import { proxyToObject } from '@/util/proxyToObject';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

    export default {
        name: 'sign-up',
        setup() {
            const required = ['username', 'first_name', 'email', 'password'];
            const confirmPassword = ref("");
            const validPassword = ref(false);
            const errorFields = ref([]);
            const isError = ref(false);
            const isLoading = ref(false);
            const store = useStore();
            const validError = ref({
                status: null,
                fields: [],
            });
            const body = ref({
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                mailings: false,
            });

            const setBody = (key, value) => {
                body.value = { ...body.value, [key]: value };
            };

            const check = (key) => errorFields.value.includes(key);

            const sendRequest = async () => {
                const data = proxyToObject(body.value);
                const errors = required.filter((key) => data[key]?.length <= 2);

                validError.value = {
                    status: null,
                    fields: [],
                };

                if(confirmPassword.value.length <= 2) {
                    errors.push('confirmPassword');
                }

                errorFields.value = errors

                if(errors.length) return;

                if(confirmPassword.value !== body.value.password) {
                    validPassword.value = true; 
                    return;
                }

                isLoading.value = true;

                try {
                    const response = await request.post('/register/', data);

                    isLoading.value = false;
                    LocalStorage.set('isAuth', response.data);
                    store.commit('setAuth',  response.data);
                } catch(err) {
                    const error = err.response;

                    isLoading.value = false;

                    if(error.status === 403) {
                        validError.value = {
                            status: true,
                            fields: Object.keys(error.data).map((key) => ({
                                field: key,   
                                error: error.data[key][0],
                            }))
                        };
                    } else {
                        isError.value = true
                        setTimeout(() => {
                            isError.value = false
                        }, 3500);
                    }
                }
            };

            watch([body, confirmPassword], () => {
                errorFields.value = [];
                validPassword.value = false;
            });

            return {
                body,
                confirmPassword,
                setBody,
                sendRequest,
                check,
                isError,
                isLoading,
                validPassword,
                validError
            }
        },
    }
</script>