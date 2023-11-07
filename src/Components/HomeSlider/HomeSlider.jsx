import ImgTag from "../ImgTag/ImgTag"
import { Link } from "react-router-dom"
import "./HomeSlider.css"
import swal from "sweetalert"

export default function HomeSlider(all) {
    const ridam = () => {
    swal({title:"اجازه دسترسی ندارید",icon:"error",text:"با صفحه نمایش گوشی اجازه دسترسی ندارید"})
    }
    return (
        <>
            <div className={`${all.classHome} slide-home`} style={{ backgroundImage: `url("${all.imgBack}")` }}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='me-3 mt-4 text-light'>{all.data}</h3>
                    </div>
                    <div className="col-md-12">
                        <div className="slide-homes">
                            <figure>
                                <ImgTag src={all.img} class={"imggg"} />
                            </figure>
                            <figcaption className='text-center'>
                                <p>{all.p}</p>
                                {all.classHome === "panel" ? <button onClick={ridam} className='text-info btn'>دیدن صفحه</button> : <Link to={ all.link} className='text-info btn'>{all.linkTitle}</Link>}

                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
