import { reactive } from "vue";
import { v4 as uuid } from "uuid";
export const store = reactive({
    definitionList: [],
    imgUrlBuf: "",
    titleBuf: "",
    textBuf: "",
    storage_key: "items",
    deleteFromList(id) {
        this.definitionList = this.definitionList.filter(item => item.id !== id);
        localStorage.setItem(this.storage_key, JSON.stringify(this.definitionList));
    },
    addToList() { 
        if (this.imgUrlBuf === '' || this.titleBuf === '' || this.textBuf === '') return;
        const validateImage = (img) => {
            let validImage = true;
            const image = new Image();
            image.src = img;
            image.onload = () => {
                if (image.width > 0) {
                    validImage = true;
                }
            }
            image.onerror = () => {
                validImage = false;
            }
            return validImage;
        };
        if (!validateImage(this.imgUrlBuf)) return;
        this.definitionList.push({
            id: uuid(),
            imgSrc: this.imgUrlBuf,
            title: this.titleBuf,
            text: this.textBuf
        });
        localStorage.setItem(this.storage_key, JSON.stringify(this.definitionList));
        this.imgUrlBuf = '';
        this.titleBuf = '';
        this.textBuf = '';
    }
});
