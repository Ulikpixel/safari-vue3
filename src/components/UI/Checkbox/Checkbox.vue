<template>
    <div class="min-w-[24px] h-6 border-pink border-2 rounded cursor-pointer flex items-center justify-center"
        :class="{ 'bg-pink': checked, 'rounded-full': circle }">
        <img v-if="checked" src="@/assets/icons/check.svg" alt="icon">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'checkbox-ui',
    props: {
        checked: Boolean,
        circle: Boolean,
    }
}
</script>
