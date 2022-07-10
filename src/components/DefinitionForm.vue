<template>
    <form @submit.prevent="store.addToList()">
        <label><strong>Title:</strong></label>
        <br>
        <input v-model="store.titleBuf" type="text" required>
        <br>
        <label><strong>Definition:</strong></label>
        <br>
        <textarea v-model="store.textBuf" rows="10" cols="50" required></textarea>
        <br>
        <label><strong>Image URL:</strong></label>
        <br>
        <input v-model="store.imgUrlBuf" type="text" required>
        <br>
        <input type="submit" value="Create Definition">
    </form>
</template>
<script>
    import { store } from "../globalDefList";
    export default {
        name: 'DefinitionForm',
        data() {
            return {
                store
            }
        }
    }
</script>
<style scoped>
</style>
