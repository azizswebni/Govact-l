import React, { useState } from "react";
import headersvg from "../assets/ka3.svg";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import Chatboot from "../components/Chatbot/Chatboot";
export default function S5Service3() {
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="false" disableGutters="false">
        <Header className="Header">
          <Img src={headersvg} alt="svg" />
          <HeaderContent>
            <Titre> مثال التهيئة العمرانية </Titre>
          </HeaderContent>
        </Header>
      </Container><br/><br/>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />

      {chat ? <Chatboot /> : <></>}
      <Desc dir="rtl" lang="ar">
        <h6>
          {" "}
          تتمثّل وظيفة مثال التهيئة العمرانية الأساس في ضبط قواعد وارتفاقات
          استعمال الأراضي، وعلى خلاف المثال التوجيهي للتهيئة فإن مثال التهيئة
          العمرانية وثيقة ذات صبغة ترتيبية يخضع إعدادها لإجراءات الاستشارة
          والتعليق ويعارض بها الغير بعد المصادقة عليها.
        </h6>
        <h6>يتكون مثال التهيئة العمرانية من الوثائق التالية :</h6>
        <ol>
          <li>
            خريطة أو عدّة خرائط معدة بسلم يتراوح بين 1/5000 و 1/1000 تبرز
            بالخصوص المناطق التي تطبق داخلها التراتيب العمرانية المصاحبة لمثال
            التهيئة العمرانية وحوزة الطرقات والأماكن المخصصة للمنشآت العمومية
            والتجهيزات ذات المصلحة العامة والبراحات والمساحات الخضراء وكذلك
            المناطق الخاضعة للإرتفاقات ذات المصلحة العمومية،
          </li>

          <li>
            تراتيب عمرانية تضبط القواعد المشتركة بين كل المناطق المحددة بمثال
            التهيئة العمرانية والقواعد الخاصة بكل منطقة،
          </li>
          <li>تقرير تقديمي يتضمن بالخصوص العناصر التالية :</li>
          <ul>
            <li>
              كشف عن الوضع الاجتماعي والديموغرافي والاقتصادي للمنطقة المعنيّة
              وعرض آفاق التطور وخاصة تلك التي تتعلّق بالسكن والأنشطة الاقتصادية
              والتجهيزات العمومية،
            </li>
            <li>آفاق تطور مناطق العمران والمناطق المزمع تعميرها مستقبلا،</li>
            <li>
              تحليل لتأثيرات تطبيق مثال التهيئة على الخصوصيات الطبيعية والبيئية
              للمنطقة المعنية،
            </li>
            <li>تحديد مساحات مختلف أصناف المناطق،</li>
            <li>
              اقتراح وسائل تطبيق مثال التهيئة وخاصة منها التي تساعد على التحكم
              الملائم في العقارات،
            </li>
          </ul>
          <li>
            {" "}
            ملحقات تتضمن الوثائق التي استعملت في تصوّر مثال التهيئة العمرانيّة
            والتي منها بالخصوص أمثلة الشبكات الموجودة والمزمع إحداثها وقائمة
            الارتفاقات المتعلقة بالملك العمومي.
          </li>
          <ul>
            <li>
              مثال التهيئة التفصيلي والتقسيمات: وثائق تنفيذية أو عملياتيّة
            </li>
            </ul>
             <ul style={{listStyle:"none"}}>
            <li>
              يتمّ إعداد مثال التهيئة التفصيلي داخل دوائر التدخل العقاري لفائدة
              الدولة أو الجماعات العمومية المحلية أو الوكالات العقارية للصناعة
              والسياحة والسكن ووكالة التهذيب والتجديد العمراني، وذلك لإنجاز
              برامج تهيئة وتجهيز أو تجديد أو تهذيب تضبطها السلط المختصة طبقا
              لمثال التهيئة العمرانية أو للأمثلة التوجيهية إن وجدت.
            </li>
            <li> وتتمّ عمليات التقسيمات داخل أمثلة التهيئة العمرانية والتفصيلية وتتمثل في تجزئة قطعة أرض إلى 3 مقاسم فأكثر معدّة بعد التهيئة لبناء محلات سكنية أو مهنية أو صناعية أو سياحية أو تجهيزات مشتركة اجتماعية وثقافية.</li>
         <li>وعلى غرار مثال التهيئة العمرانية فإن أمثلة التهيئة التفصيليّة والتقسيمات وثائق يعارض بها الغير.</li>
          </ul>
        </ol>
      </Desc>
      <Footer />
    </>
  );
}
const Desc = styled.p`
  width: 80%;
  justify-content: center;
  text-align: right;
  margin-left: 10%;
`;
const Header = styled.div`
  flex: 1;
  padding: 10%;
  background: url(${bg}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderContent = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  align-items: flex-end;
 
`;
const Titre = styled.p`
  width: 100%;
  color: white;
  font-size: 5vw;
  text-align: center;
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
  width: 50%;
`;