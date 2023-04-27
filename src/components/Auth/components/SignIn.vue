<template>
    <div>
        <p class="text-xl font-bold mb-8">SIGN IN</p>
        <form class="flex flex-col gap-8" @submit.prevent>
            <input-ui
                label="Email"
                type="email"
            />
            <input-ui
                label="Password"
                type="password"
            />
            <div class="flex gap-2">
                <checkbox-ui checked />
                <p class="">Remeber my details</p>
            </div>
            <button-ui>
                SIGN IN
            </button-ui>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'sign-in',
        setup() {
            const sendRequest = () => {
                console.log('hello');
            }

            return {
                sendRequest
            }
        }
    }
</script>