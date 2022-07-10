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
        const validateImage = (img) => {
            let path_to_img = img.split('/');
            if (path_to_img.length == 1) {
                return false;
            }
            let source = path_to_img[path_to_img.length - 1].split('.');
            if (source.length == 1) {
                return false;
            }
            let extension = source[source.length - 1];
            return extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'svg';
        };
        if (!validateImage(this.imgUrlBuf)) {
            this.imgUrlBuf = '';
            this.titleBuf = '';
            this.textBuf = '';
            return false;
        }
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
        return true;
    }
});
