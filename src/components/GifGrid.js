import React from 'react'
import { GifGridItem } from './GifGridItem'

import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
    const apiKey = 'Gf1rA1mloFGdUeaiRK6XEJxAogwGWAJb'
    const gifLimit = 2
    const { data: gifs, loading } = useFetchGifs(apiKey, gifLimit, category);

    return (
        <>
            <div>
                <h3  className='animate__animated animate__fadeIn'>{category}</h3>
                {loading && <p className='animate__animated animate__flash'>'Loading...'</p>}
                <div className='card-grid'>
                    {
                        gifs.map(img => (
                            <GifGridItem
                                key={img.id}
                                title={img.title}
                                url={img.url}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
