import axios from "axios";

const IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY as string
const IMGBB_URL = import.meta.env.VITE_IMGBB_URL as string

export const uploadImage = async (file: File) => {
    const body = new FormData();
    body.set('key', IMGBB_KEY);
    body.append('image', file)

    const response = await axios.post(IMGBB_URL, body);
    return response.data.data.url as string;

}