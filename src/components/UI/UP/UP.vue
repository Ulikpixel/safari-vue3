<template>
    <div 
        class="
            w-[60px] h-[50px] cursor-pointer border 
            items-center justify-center flex rounded
        "
        @click="scrollToTop"
    >
        <base-icon name="arrow" class="h-5 rotate-[-90deg] relative bottom-1.5" />
    </div>
</template>

<script>
    export default {
        name: 'up-ui',
        setup() {
            const scrollToTop = () => window.scrollTo(0,0);

            return { scrollToTop };
        }
    }
</script>
