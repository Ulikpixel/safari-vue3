<template>
    <div>
        <p class="text-xl font-bold mb-8">CREATE ACCOUNT</p>
        <form class="flex flex-col gap-8" @submit.prevent>
            <input-ui
                label="User name"
                :value="body.username"
                @input="(event) => setBody('username', event.target.value)"
            />
            <input-ui
                label="First name"
                :value="body.first_name"
                @input="(event) => setBody('first_name', event.target.value)"
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
            />
            <input-ui
                label="Create Password"
                type="password"
                :value="body.password"
                @input="(event) => setBody('password', event.target.value)"
            />
            <input-ui
                label="Confirm Password"
                type="password"
                :value="confirmPassword"
                @input="confirmPassword = $event.target.value"
            />
            <div class="flex gap-2" @click="body.mailings = !body.mailings">
                <checkbox-ui :checked="body.mailings" />
                <p>I want to receive Safari newsletters with the best deals and offers</p>
            </div>
            <button-ui>
                CREATE ACCOUNT
            </button-ui>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        name: 'sign-up',
        setup() {
            const confirmPassword = ref("");
            const body = ref({
                username: "",
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                mailings: false,
            });

            const setBody = (key, value) => {
                body.value = { 
                    ...body.value, 
                    [key]: value 
                };
            };

            return {
                body,
                confirmPassword,
                setBody,
            }
        },
    }
</script>