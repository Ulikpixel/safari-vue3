<template>
    <section>
        <slider-component />
        <listing-component />
    </section>
</template>

<script>
import ListingComponent from '@/components/Home/components/Listing';
import SliderComponent from '@/components/Home/components/Slider';

export default {
    name: 'home-view',
    components: {
        ListingComponent,
        SliderComponent
    }
}
</script>
