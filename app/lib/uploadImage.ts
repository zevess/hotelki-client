import axios from "axios";

export const uploadImage = async (file: File) => {
    const body = new FormData();
    body.set('key', `63ac10bfee095f5bc43ea6522a93ffdd`);
    body.append('image', file)

    const response = await axios.post('https://api.imgbb.com/1/upload', body);
    return response.data.data.url as string;

}