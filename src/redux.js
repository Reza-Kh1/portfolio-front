import { createSlice } from "@reduxjs/toolkit";
import { shopSingle } from "./server1";
const slice = createSlice({
    name: "cartBuy",
    initialState: [
        {
            id: 618, title: "هدست لاجتیک G635", price: 5800000,
            score: 4.8, category: "offer", store: 3, complus: 1, offer: 20,
            comments: [{
                id: 4589, author: "hamid", time: "1402/05/25", text: "بخرید ضرر نمیکنید خیلی خوبه مخصوصا دسته هاش", customer: true, answer: [
                    { id: 96321, author: "kyan", time: "1402/05/28", text: "باید یه پولی باشه که بتونیم بخریم یا نه همینطوری میگید بخرین...", customer: false, answer: [] }
                ]
            }, {
                id: 78945, author: "hamid", time: "1402/05/25", text: "ایا شرایط خرید قسطی از سایتتون هست و اگر هستش چطوریه یه توضیحی بدین", customer: false, answer: [
                    { id: 26359, author: "Admin", time: "1402/05/28", text: "ما فعلا به خاطر نوسانات ارزی فروش به صورت اقساطی نداریم و درصورت ثابت شدن شرایط حتما این گزینه رو هم براتون فراهم میکنیم", answer: [] }
                ]
            }],
            images: [{
                original: 'https://dkstatics-public.digikala.com/digikala-products/115063756.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
                thumbnail: 'https://dkstatics-public.digikala.com/digikala-products/115063756.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            }, {
                original: 'https://cdn.zoomg.ir/2019/2/132d155f-d6f2-45f0-827e-7b4b90764dec.jpg',
                thumbnail: 'https://cdn.zoomg.ir/2019/2/132d155f-d6f2-45f0-827e-7b4b90764dec.jpg',
            }, {
                original: 'https://pallstore.com/storage/images/logitech-g635-headset-5073-600x600.webp',
                thumbnail: 'https://pallstore.com/storage/images/logitech-g635-headset-5073-600x600.webp',
            }],
            skils: [
                {
                    id: 79834512, name: "مشخصات کل ", ulti: [
                        { id: 5986884, skils: "نوع درگاه", summery: "با سیم" },
                        { id: 5693, skils: "درگاه اتصال", summery: "جک 3.5 میلیمتری" },
                        { id: 78445, skils: "حساسیت هدفون", summery: "93 دسی بل" },
                        { id: 78498745, skils: "کاربری", summery: "گیمینگ" },
                    ]
                }, {
                    id: 3218920, name: "مشخصات کامل تر", ulti: [
                        { id: 3020, skils: "رزولوشن صفحه نمایش", summery: "۴۴۸x۳۶۸ پیکسل" },
                        { id: 3021065, skils: "حافظه داخلی", summery: "32 گیگ" },
                        { id: 220350, skils: "نوع باتری", summery: "لیتیوم یونی" },
                        { id: 65045, skils: "منبع شارژ ", summery: "شارژ بی سیم" },
                        { id: 98045, skils: "فناوری‌های مکان‌یابی", summery: "GPS" }
                    ]
                }
            ]
        },
    ],
    reducers: {
        setName: (state, action) => {
            const data = shopSingle
            const hol = data.find(i => i.id === action.payload)
            state.push(hol)
        },
        changeNumber: (state, action) => {
            state.forEach(fo => {
                if (fo.id === action.payload) {
                    fo.complus++
                }
            })
        },
        deleteName: (state, action) => {
            const gog = state.filter(i => i.id !== action.payload)
            return gog
        },
        restartArray: (state, action) => {
            const gog = state
            gog.splice(0, state.length)

        }
    }
})
export const { setName, changeNumber, deleteName, restartArray } = slice.actions
export default slice.reducer