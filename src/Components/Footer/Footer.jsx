import "./Footer.css"
import { Link } from 'react-router-dom'
import { MdSpeed } from "react-icons/md"
import { LuShieldCheck } from "react-icons/lu"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn, FaTelegramPlane, FaReact } from "react-icons/fa"
import { BsGithub, BsHeadset } from "react-icons/bs"
import ImgTag from "../ImgTag/ImgTag"
import LoopCircle from "./LoopCircle/LoopCircle"
import swal from "sweetalert"
export default function Footer() {

  const shareTel = () => {
    navigator.clipboard.writeText(`@Reza_kh666`).then(swal({ title: "لینک تلگرام کپی شد", icon: "success" }))
  }
  const shareInesta = () => {
    navigator.clipboard.writeText(`reza_kha.ni`).then(swal({ title: "لینک اینستاگرام کپی شد", icon: "success" }))
  }
  const shareHiche = () => {
    swal({ title: "در دسترس نیست", icon: "error", text: "درخواست شما فعلا در دسترس نیست بعدا دوباره امتحان کنید" })
  }

  return (
    <>
      <section className='footer'>
        <div className="container-fluid bg-mid-footer mt-5 d-inline-block w-100">
          <div className="container my-0 my-sm-5">
            <div className="row footer-mid p-2 p-sm-4">
              <LoopCircle icon={<BsHeadset />} title={"پاسخ گویی خوب"} text={"از 8 صبح تا 9 شب"} />
              <LoopCircle icon={<FaReact />} title={"تکنولوژیه کامل"} text={"با پکیج های فوق العاده"} />
              <LoopCircle text={"بهترین امنیت رو داره"} title={"امنیت"} icon={<LuShieldCheck />} />
              <LoopCircle text={"بهره گیری از سریع ترین زبان وب"} title={"سریع ترین زبان"} icon={<MdSpeed />} />
            </div>
          </div>
        </div>
        <div className="container pb-3 pb-sm-5">
          <div className="row footer-original">
            <div className="col-md-6 mt-4">
              <figure style={{ width: '100px' }}>
                <h4>Portfolio</h4>
              </figure>
              <p>دانلود بازی Amnesia The Bunker برای کامپیوتر Amnesia The Bunker بازیکنان را وارد دنیای وحشتناک و سیاه جنگ جهانی اول می‌کند. این بازی که چهارمین نسخه رسمی درون فرنچایز بزرگ Amnesia محسوب می‌شود، در 6 ژوئن 2023 برای چندین پلتفرم اصلی منتشر شد و بازیکنان را در یک تجربه عمیق ترس و بقا غرق می‌کند که شاید بهترین در سال جاری باشد. در داستان بازی شما </p>
            </div>
            <div className="col-md-3 col-6 text-center">
              <span>Contact US</span>
              <ul className="p-0">
                <li><Link to={"/about-me"}>درباره من</Link></li>
                <li><Link to={"/about-site"}>درباره سایت</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-6 text-center">
              <span>Useful Links</span>
              <ul className="p-0">
                <li><Link to={"/shopping"}>فروشگاه</Link></li>
                <li><Link to={"/estate/page/1"}>املاک</Link></li>
                <li><Link to={"/blog"}>وبلاگ</Link></li>
              </ul>
            </div>
            <div className="col-md-6 d-flex align-items-center mt-sm-5">
              <div className="news-footer w-100">
                <form action="">
                  <div className="row">
                    <div className="col-md-12">
                      <h5 className="mb-3 me-2">خبرنامه :</h5>
                    </div>
                    <div className="col-md-3 col-3 p-0 ">
                      <button>ارسال</button>
                    </div>
                    <div className="col-md-9 col-9">
                      <input type="text" placeholder='جیمیل خود را وارد کنید' />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 mt-5 d-flex align-items-end">
              <figure className="m-0" style={{ width: "100%" }}>
                <ImgTag src={"/payments.svg"} style={{ filter: 'drop-shadow(2px 4px 6px black)' }} />
              </figure>
            </div>
            <div className="col-md-12">
              <div className="copy-right">
                <div className="copy-share">
                  <i style={{cursor:"pointer"}} onClick={shareTel}><FaTelegramPlane /></i>
                  <i style={{cursor:"pointer"}} onClick={shareInesta}><AiFillInstagram /></i>
                  <i style={{cursor:"pointer"}} onClick={shareHiche}><FaLinkedinIn /></i>
                  <i style={{cursor:"pointer"}} onClick={shareHiche}><BsGithub /></i>
                </div>
                <div className="copy-text">
                  <span>تمام اطلاعات سایت محفوظ است | ©2023 Reza khani</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
