<template>
    <div class="w-6 h-6 border-pink border-2 border rounded cursor-pointer flex items-center justify-center"
        :class="{ 'bg-pink': checked }">
        <img v-if="checked" src="@/assets/icons/check.svg" alt="icon">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'checkbox-ui',
    props: {
        checked: Boolean,
    }
}
</script>
