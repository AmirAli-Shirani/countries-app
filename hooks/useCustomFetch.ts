import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const baseUrl = "https://restcountries.com/v3.1";

export const useCustomFetch = () => {
    return useQuery({
        staleTime: 1000 * 60 * 60,
        queryKey: ["countries"],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/all`);
            return res.data;
        },
    });
};
