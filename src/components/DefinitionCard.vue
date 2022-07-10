<template>
    <div class="card" id="card-div">
        <h1>{{title}}</h1>
        <br>
        <img :src="image_url" alt="Definition Image" class="definition-img" id="card-img">
        <br>
        <p>{{definition}}</p>
        <button @click="store.deleteFromList(id)" class="btn-remove">Remove</button>
    </div>
</template>
<script>
import { store } from '../globalDefList';
export default {
    name: 'DefinitionCard',
    data() { 
        return {
            store
        };
    },
    props: {
        id: String,
        title: String,
        image_url: String,
        definition: String
    }
};
</script>
<style scoped>
.card {
    border-style: solid;
    width: 100%;
};
.btn-remove {
    background-color: rgb(212, 5, 5);
    color: white;
    border-radius: 4px;
    width: 30%;
    height: 10%;
};
.definition-img {
    width: 50px;
    height: 50px;
};
</style>