//@ts-nocheck
import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_BASE_URL;
const paginatedRestService = {
    getDataByPage: async (page) => {
        const newURL = new URL(`${url}/game/category/quick-break-at-work`);
        newURL.searchParams.set('p', page);
        const axiosRes = await axios.get(newURL.toString());
        return axiosRes.data
    }
};

export default paginatedRestService;