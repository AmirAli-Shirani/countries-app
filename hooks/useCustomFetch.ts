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

// export const usePost = <T = unknown, U = unknown>(
//     endpoint: string
// ) => {
//     return useMutation<T, unknown, U>({
//         mutationFn: async (data: U) => {
//             const res = await axios.post(`${baseUrl}/${endpoint}`, data);
//             return res.data;
//         },
//     });
// };
