<template>
    <div
        class="w-9 h-9 bg-white flex items-center justify-center cursor-pointer"
    >
        <base-icon v-if="isLike" name="heart" class="w-5 text-pink" />
        <base-icon v-if="!isLike" name="heart-empty" class="w-5 text-pink" />
    </div>
</template>

<script>
export default {
    name: 'heart-component',
    props: {
        isLike: Boolean,
    }
}
</script>
