import swal from "sweetalert";
import "./CommentsShop.css";
export default function CommentsShop(propss) {
    const clickButton = (event) => {
        event.preventDefault();
        swal({ title: "تکمیل نشده !", icon: "warning", text: "در حال ساخت است منتظر بمانید" })
    }
    return (
        <>
            <div className="comment-box-shop">
                <div className="comment-shop-loop">
                    {propss.new.map((i) => (
                        <div className="comment-question mt-3" key={i.id}>
                            <h5>{i.author}</h5>
                            <span>{i.time}</span>
                            <span className="me-3">{i.customer ? '(خریدار محصول)' : ""}</span>
                            <p>{i.text}</p>
                            <div className="buttons-commonet-shop">
                                <button onClick={clickButton}>پاسخ دادن</button>
                            </div>
                            {i.answer && (i.answer.map((kol) => (
                                <div key={kol.id} className="comment-answer">
                                    <div className="comment-question mt-3">
                                        <h5>{kol.author === 'Admin' ? 'مدیر سایت' : kol.author}</h5>
                                        <span>{kol.time}</span>
                                        {kol.customer && <span className="me-3">{kol.customer ? '(خریدار محصول)' : ""}</span>}
                                        <p>{kol.text}</p>
                                        <div className="buttons-commonet-shop">
                                            <button onClick={clickButton}>پاسخ دادن</button>
                                        </div>
                                    </div>
                                </div>
                            )))}
                        </div>
                    ))}
                </div>
                <div className="new-comment-shop">
                    <form action="">
                        <div className="row">
                            <h4 className="mb-3">کامنت خود را در رابطه با محصول ثبت کنید</h4>
                            <div className="col-md-5">
                                <input className="input-comment mb-md-0 mb-3" type="text" placeholder="نام" />
                            </div>
                            <div className="col-md-5">
                                <input className="input-comment mb-md-0 mb-3" type="text" placeholder="ایمیل" />
                            </div>
                            <div className="col-md-2 mt-1">
                                {/* select-user */}
                                <select name="" id="" className="form-select form-control form-bold ">
                                    <option value="User" className="form-control">انتخاب امتیاز</option>
                                    <option value="Authord">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                                    <option value="Authorf">&#9733;&#9733;&#9733;&#9733;</option>
                                    <option value="Authorv">&#9733;&#9733;&#9733;</option>
                                    <option value="Admine">&#9733;&#9733;</option>
                                    <option value="Manager">&#9733;</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12 mt-3">
                            <textarea style={{ resize: 'none' }} name="" id="" cols="30" rows="10" className="input-comment"></textarea>
                        </div>
                        <div className="col-md-12">
                            <div className="buttons-commonet-shop">
                                <button onClick={clickButton}>ارسال</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
