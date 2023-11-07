import Loader from '../Loader/Loader'
import { useState } from 'react'
export default function ImgTag(data) {
    const [imgLoader, setImgLoader] = useState(true)
    return (
        <>
            <img src={data.src} className={data.class} alt={data.alt} style={data.style} onLoad={() => setImgLoader(false)} onError={(e) => e.target.src = '/img/imagesq.jfif'} />{imgLoader && <Loader />}
        </>
    )
}
