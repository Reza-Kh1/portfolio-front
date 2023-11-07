export default function LoopCircle(all) {
    return (
        <>
            <div className="col-md-3 col-6">
                <div className="row circle-footer context-mid-box text-center text-sm-end mt-4 mt-sm-0">
                    <div className="col-md-6 text-center text-md-start">
                        <i>{all.icon}</i>
                    </div>
                    <div className="col-md-6">
                        <p>{all.title}</p>
                        <span className=''>{all.text}</span></div>
                </div>
            </div>
        </>
    )
}
