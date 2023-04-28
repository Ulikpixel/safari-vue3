<template>
    <section class="pt-16 pb-52">
        <div class="container">
            <div class="mb-16 text-center md:text-start">
                <h3 class="text-3xl font-extrabold mb-4">Hello there!</h3>
                <p class="text-xl">Please sign in or create account to continue</p>
            </div>
            <tabs-component 
                :signUp="signUp"
                @handleClick="changeSignUp"
                class="mb-14"
            />
            <div class="max-w-[409px] m-auto">
                <signup-component v-if="signUp" />
                <signin-component v-else />
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import TabsComponent from '@/components/Auth/components/Tabs';
import SignupComponent from '@/components/Auth/components/SignUp';
import SigninComponent from '@/components/Auth/components/SignIn';

export default {
    name: 'auth-component',
    components: {
        TabsComponent,
        SignupComponent,
        SigninComponent,
    },
    setup() {
        const signUp = ref(true);

        const changeSignUp = (value) => signUp.value = value;

        return {
            signUp,
            changeSignUp
        }
    }
}
</script>
