<template>
    <form @submit.prevent="submit()">
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
    <p>{{errMsg}}</p>
</template>
<script>
    import { store } from "../globalDefList";
    export default {
        name: 'DefinitionForm',
        data() {
            return {
                store,
                errMsg: ''
            }
        },
        methods: {
            submit() {
                const result = store.addToList();
                if (result == true) {
                    this.errMsg = '';
                } else {
                    this.errMsg = 'Image unrecognized.\n NOTE: This app only supports the.jpeg, .jpg, .svg, and the.png image extensions.\n NOTE #2: To submit an image, you must include a direct link to the image source. EX: https://plsadaptive.s3.amazonaws.com/eco/images/channel_content/images/test.jpg';
                }
            }    
        }        
    }
</script>
<style scoped>
</style>
