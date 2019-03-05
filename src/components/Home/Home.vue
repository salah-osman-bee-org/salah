<template>
    <div>
       
        <app-header></app-header>
        <app-home-services></app-home-services>
        <app-home-productes></app-home-productes>
        <app-home-features></app-home-features>
    </div>
</template>
<script>

import Header from "../shared/header.vue";
import homeServices from "./children/homeServices.vue";
import homeProductes from "./children/homeProductes.vue";
import homeFeatures from "./children/homeFeatures.vue";
export default {
    components: {
        appHeader: Header,
        appHomeServices: homeServices,
        appHomeProductes: homeProductes,
        appHomeFeatures: homeFeatures,
    }
}
</script>
