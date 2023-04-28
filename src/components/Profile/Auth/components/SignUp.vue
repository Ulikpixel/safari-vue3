<template>
    <div>
        <p class="text-xl font-bold mb-8">CREATE ACCOUNT</p>
        <form class="flex flex-col gap-8" @submit.prevent>
            <input-ui
                label="First name"
            />
            <input-ui
                label="Last name"
            />
            <input-ui
                label="Email"
                type="email"
            />
            <input-ui
                label="Create Password"
                type="password"
            />
            <input-ui
                label="Confirm Password"
                type="password"
            />
            <div class="flex gap-2">
                <checkbox-ui checked />
                <p class="">
                    I want to receive Safari newsletters with the best deals and offers
                </p>
            </div>
            <button-ui>
                CREATE ACCOUNT
            </button-ui>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'sign-up'
    }
</script>