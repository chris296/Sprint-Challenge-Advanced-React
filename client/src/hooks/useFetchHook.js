import {useEffect, useState} from 'react';
import axios from 'axios';

export const useFetchHook = (api) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(api)
        .then(res => {
            setData(res)
        })
        .catch(err => {
            console.log(err);
        })
    })

    return data;
}