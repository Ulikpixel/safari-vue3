<template>
    <panel-component v-if="$store.state.isAuth" />
    <auth-component v-else /> 
</template>

<script>
import AuthComponent from '@/components/Profile/Auth/Auth';
import PanelComponent from '@/components/Profile/Panel/Panel';

export default {
    name: 'profile-view',
    components: {
        AuthComponent,
        PanelComponent,
    }
}
</script>