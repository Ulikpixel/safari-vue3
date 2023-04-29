<template>
    <footer class="min-h-[200px] py-5 bg-grey w-full flex items-center justify-center">
        <div class="
                    container flex items-center flex-wrap 
                    gap-y-10 flex-col justify-between text-center
                    md:flex-row md:items-start md:text-left
                ">
            <img src="@/assets/icons/logo.svg" alt="icon">
            <div>
                <p v-for="nav in navs" :key="nav">{{ nav }}</p>
            </div>
            <div>
                <div v-for="network in networks" :key="network">
                    <p class="flex items-center gap-5">
                        <span class="w-3.5">
                            <base-icon :name="network.toLowerCase()" />
                        </span>
                        {{ network }}
                    </p>
                </div>
            </div>
            <div>
                <p class="mb-5">Subscribe to our newsletter</p>
                <input-component :value="email" @change="email = $event.target.value" :clickBtn="sendEmail" />
            </div>
            <div>
                <p v-for="text in address" :key="text">
                    {{ text }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import InputComponent from '@/components/Footer/components/Input.vue';
import { ref } from 'vue';

export default {
    name: 'footer-component',
    setup() {
        const navs = ['About Us', 'Contact', 'Terms & Conditions'];
        const networks = ['Facebook', 'Twitter', 'Instagram'];
        const address = ['497 Evergreen Roseville, CA 95673', '+44 345 678 903', 'adobexd@mail.com'];
        const email = ref('');

        const sendEmail = () => email.value = "";

        return {
            navs,
            networks,
            address,
            email,
            sendEmail,
        }
    },
    components: { InputComponent },
}
</script>
