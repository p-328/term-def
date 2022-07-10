<template>
    <h1>My definitions</h1>
    <ul class="definitions">
        <li v-for="definition in store.definitionList" v-bind:key="definition.id">
            <DefinitionCard :id="definition.id" :title="definition.title" :image_url="definition.imgSrc" :definition="definition.text" />
        </li>        
    </ul>
</template>
<script>
    import { store } from "../globalDefList";
    import DefinitionCard from "./DefinitionCard.vue";
    export default {
        mounted() {
            const items = JSON.parse(localStorage.getItem(store.storage_key));
            if (items == null) return;
            store.definitionList = items;
        },
        data() {
            return {
                store
            };
        },
        components: {
            DefinitionCard
        },
        name: 'DefinitionList'
    };
</script>
<style scoped>
    .definitions {
        list-style: none;
        display: inline;
    };
</style>
