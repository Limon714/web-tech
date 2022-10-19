import useSWR from 'swr';

const baseURl = "http://localhost:3000/";
const response = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
    const { data, error } = useSWR(`${baseURl}${endpoint}`, response);

    return {
        data,
        isLoading : !error && !data,
        isError : error
    }
     
    
}