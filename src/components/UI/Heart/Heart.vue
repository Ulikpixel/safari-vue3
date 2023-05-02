<template>
    <base-icon v-if="isLike" name="heart" class="text-pink" :class="className" />
    <base-icon v-if="!isLike" name="heart-empty" class=" text-pink" :class="className" />
</template>

<script>
export default {
    name: 'heart-ui',
    props: {
        isLike: Boolean,
        className: String,
    }
}
</script>
