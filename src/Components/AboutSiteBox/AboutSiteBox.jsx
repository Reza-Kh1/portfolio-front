import ImgTag from "../ImgTag/ImgTag"
export default function AboutSiteBox(all) {
    return (
        <>
            <div className="box-about-site mt-5">
                {all.h4 && <h4 className='me-2 mb-3'>{all.h4}</h4>}
                {all.skill && (
                    <>
                        <h5>پکیج های استفاده شده</h5>
                        <ul>
                            {all.skill.map((i) => (
                                <li key={i.id}>{i.name}</li>
                            ))}
                        </ul>
                    </>
                )}
                <h4 className="mb-3">توضیحات</h4>
                {all.p1 && <p>{all.p1}</p>}
                {all.img && <figure className='mb-5 mt-4' style={{ margin: "0 auto", width: "30%" }}>
                    <ImgTag src={all.img} />
                </figure>}
                {all.p.map((i) => (
                    <p key={i.id}>{i.title}</p>
                ))}
            </div>
        </>
    )
}
