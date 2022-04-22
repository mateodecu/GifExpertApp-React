import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (apiKey, gifLimit, category) => {
    const [gifs, setGifs] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(apiKey, gifLimit, category)
            .then((gifs) => {
                setTimeout(() => {
                    setGifs({
                        data: gifs,
                        loading: false,
                    })
                }, 1000)
            })
    }, [category])

    return gifs;
}