import React, { useState,useRef } from "react";
import headersvg from "../assets/k2.svg"
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import Footer from "../components/Footer";
import Chatboot from "../components/Chatbot/Chatboot";
import chatbot from "../assets/chatbot.png";
import Container from "@material-ui/core/Container";
import Card from "../components/Card";
import card1 from "../assets/s2_1.svg";
import card2 from "../assets/s2_2.svg";
export default function Service2() {
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
  const sec1 = useRef(null);
  const sec2 = useRef(null);


  const gotosec1 = () => {
    window.scrollTo({
      top: sec1.current.offsetTop - 110,
      behavior: "smooth",
    });
  };
  const gotosec2 = () => {
    window.scrollTo({
      top: sec2.current.offsetTop - 110,
      behavior: "smooth",
    });
  };
    return (
        <>
            <Navbar />
            <Container maxWidth="false" disableGutters="false">
                <Header className="Header">
                    <Img src={headersvg} alt="svg" />
                    <HeaderContent>
                        <Titre> الخدمات الادارية </Titre>

                    </HeaderContent>
                </Header>
            </Container>
            <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
     
     {chat ? <Chatboot /> : <></>}
     <Wrapper>
        <div onClick={gotosec2}>
          {" "}
          <Card titre=" الإشهاد بمطابقة النسخ للأصل" svg={card2} />
        </div>
        <div onClick={gotosec1}>
          <Card titre=" التعريف بالإمضاء" svg={card1} />
        </div>
      </Wrapper>
     <Desc ref={sec1} dir="rtl" lang="ar">
       <h2> <b> التعريف بالإمضاء</b></h2>
          <h4> المراجع</h4>
          <u> المراجع التشريعية و الترتيبية </u>
          <br />
              <ol>
                <li>
                  القانون عدد 103 لسنة 1994 المؤرخ في غرة أوت 1994 المتعلق
                  بتنظيم التعريف بالإمضاء والإشهاد بمطابقة النسخ للأصل كما وقع
                  تنقيحه و إتمامه بالقانون عدد 19 لسنة 1999 المؤرخ في غرة مارس
                  1999
                </li>

                <li>
                  القانون عدد 27 لسنة 1993 المؤرخ في 22 مارس 1993 المتعلق ببطاقة
                  التعريف الوطنية كما وقع تنقيحه وإتمامه بالقانون عدد 18 لسنة
                  1999 المؤرخ في غرة مارس 1999
                </li>

                <li>
                  الأمر عدد 1968 لسنة 1994 المؤرخ في 26 سبتمبر 1994 المتعلق بضبط
                  قائمة الوثائق الرسمية المعتمدة للتعريف بالإمضاء
                </li>

                <li>
                  الأمر عدد 1969 لسنة 1994 المؤرخ في 26 سبتمبر 1994 المتعلق بضبط
                  تعريفة المعلوم المستخلص مقابل التعريف بالإمضاء والإشهاد
                  بمطابقة النسخ للأصل
                </li>

                <li>الفصل 378 من مجلة الحقوق العينية</li>

                <li>قرار وزير الداخلية المؤرخ في 16 ديسمبر 1995</li>
              </ol>
              <h4> شروط</h4>
              <u> شروط الانتفاع بالخدمة </u>
              <br />
              <ol>
                <li>أن تكون الوثيقة المقدمة للتعريف بالإمضاء</li>
                <ul>
                  <li>* غير منافية للأخلاق وغير مخلة بالنظام العام</li>
                  <li>* محررة باللغة العربية أو بلغة مستعملة عموما بالإدارة</li>
                </ul>
                <li>
                  أن تتوفر في طالب الخدمة الشروط القانونية فيما يتعلق بالأهلية
                  القانونية للإمضاء
                </li>

                <li>
                  أن يكون حاملا لوثيقة رسمية تثبت هويته ( بطاقة تعريف وطنية أو
                  جواز سفر ساري المفعول)
                </li>

                <li>دفع المعلوم الموظف</li>
                <li>
                  أن يحضر ويمضي بنفسه أمام العون ( باستثناء حالات الإمضاء
                  المودعة بدفاتر البلدي )
                </li>
              </ol>
              <h4>الوثائق</h4>
              <u> الوثائق المطلوبة </u>
              <br />
              <ol>
                <li>الوثيقة المراد التعريف بها</li>
                <li>الوثيقة الرسمية لإثبات الهوية (بطاقة التعريف، جواز سفر)</li>
              </ol>
              <h4>مكان إيداع</h4>
              <u> مكان إيداع الملف </u>
              <br />
              <ol>
                <li>البلدية أو الدائرة البلدية</li>
                <li>الإدارة السريعة</li>
                <li>وكالة النهوض بالصناعة</li>
                <li>مكتب تسريح السيارات بالديوانة</li>
                <li>المعتمدية في المناطق غير البلدية</li>
                <li>السفارة أو القنصلية للمقيمين في الخارج</li>
              </ol>
              <h4>مكان الحصول</h4>
              <u> مكان الحصول على الخدمة </u>
              <br />
              <ol>
                <li>البلدية أو الدائرة البلدية</li>
                <li>الإدارة السريعة</li>
                <li>وكالة النهوض بالصناعة</li>
                <li>مكتب تسريح السيارات بالديوانة</li>
                <li>المعتمدية في المناطق غير البلدية</li>
                <li>السفارة أو القنصلية للمقيمين في الخارج</li>
              </ol>
              <h4>أجل الحصول</h4>
              <u> أجل الانتفاع بالخدمة </u>
              <br />
              فورا
              <h4>ملاحظات</h4>
              <u> ملاحظات </u>
              <br />
              <ol>
                <li>
                  تتم للأشخاص الأميين وغير القادرين على الإمضاء تلاوة الكتب
                  عليهم بمحضر شاهدين من أهل الثقة مصحوبين ببطاقة التعريف
                  والتنصيص على ذلك بالدفتر
                </li>
                <li>
                  الوثائق المقدمة من طرف مصالح الدولة والمؤسسات العمومية ذات
                  الصبغة الإدارية معفية من دفع المعلوم المستوجب
                </li>
                <li>
                  التعريف بالإمضاء على الوثائق الخاصة بالتبرع بالأعضاء البشرية
                  أو بالتراجع فيه تتم مجانا
                </li>
              </ol>

        </Desc>
    <br/><Desc ref={sec2} dir="rtl" lang="ar">
      <h2><b> الإشهاد بمطابقة النسخ للأصل</b></h2>
            <h4>المراجع</h4>
              <u> المراجع التشريعية و الترتيبية </u>
              <br />
              <ol>
                <li>
                  القانون عدد 103 لسنة 1994 المؤرخ في غرة أوت 1994 المتعلق
                  بتنظيم التعريف بالإمضاء والإشهاد بمطابقة النسخ للأصل كما وقع
                  تنقيحه و إتمامه بالقانون عدد 19 لسنة 1999 المؤرخ في غرة مارس
                  1999
                </li>
                <li>
                  الأمر عدد 1969 لسنة 1994 المؤرخ في 26 سبتمبر 1994 المتعلق بضبط
                  تعريفة المعلوم المستخلص مقابل التعريف بالإمضاء والإشهاد
                  بمطابقة النسخ للأصل
                </li>
                <li>قرار وزير الداخلية مؤرخ في 16 ديسمبر 1995</li>
              </ol>
            <h4>شروط</h4>
              <u> شروط الانتفاع بالخدمة </u>
              <br />
              <ol>
                <li>
                  أن تكون الوثيقة المقدمة للإشهاد بمطابقة نسخها للأصل غير منافية
                  للأخلاق و غير مخلة بالنظام العام
                </li>
                <li>
                  أن تكون الوثيقة محررة باللغة العربية أو بلغة مستعملة عموما من
                  طرف الإدارة المعنية بالخدمة
                </li>
                <li>خلاص المعلوم المستوجب</li>
              </ol>
            <h4>الوثائق</h4>
              <u> الوثائق المطلوبة </u>
              <br />
              <ol>
                <li>الوثيقة الأصلية</li>
                <li>النسخ المراد الإشهاد بمطابقتها للأصل</li>
                <li>الإستظهار ببطاقة تعريف مقدم الوثيقة</li>
              </ol>
            <h4>مكان إيداع</h4>
              <u> مكان إيداع الملف </u>

              <br />
              <ol>
                <li>البلدية أو الدائرة البلدية</li>
                <li>الإدارة السريعة</li>
                <li>وكالة النهوض بالصناعة</li>
                <li>مكتب تسريح السيارات بالديوانة</li>
                <li>المعتمدية في المناطق غير البلدية</li>
                <li>السفارة أو القنصلية للمقيمين في الخارج</li>
              </ol>
            <h4>مكان الحصول</h4>
              <u> مكان الحصول على الخدمة </u>
              <br />
              <ol>
                <li>البلدية أو الدائرة البلدية</li>
                <li>الإدارة السريعة</li>
                <li>وكالة النهوض بالصناعة</li>
                <li>مكتب تسريح السيارات بالديوانة</li>
                <li>المعتمدية في المناطق غير البلدية</li>
                <li>السفارة أو القنصلية للمقيمين في الخارج</li>
              </ol>
 
            <h4>أجل الحصول</h4>
              <u> أجل الانتفاع بالخدمة </u>
              <br />
              فورا
   
            <h4>ملاحظات</h4>
              <u>
                الوثائق التي تستوجب مطابقتها للأصل حسب قرار وزير الداخلية
                والتنمية المحلية هي
              </u>
              <br />
              <ol>
                <li>مختلف الشهادات ذات الطابع العلمي أو المدرسي</li>
                <li>عقود الكراء</li>
              </ol>
            
    </Desc>
     
     <Footer />
        </>

    )
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 1rem;
  justify-content: center;
`;
const Desc = styled.p`
  width: 80%;
  justify-content: center;
  text-align: right;
`;
const Header = styled.div`
flex:1;
padding:10%;
background:url(${bg}) no-repeat;
background-size: cover;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;
const HeaderContent = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 
`;
const Titre = styled.p`
 width:100%;
  color: white;
  font-size:5vw;
  text-align:center;
`;

const ChatBot = styled.img`
  height: 15vh;
  width: 15vh;
  position: fixed;
  right: 0;
  bottom: 0;
`;
const Img = styled.img`
  height: 500px;
  width:50%
`;