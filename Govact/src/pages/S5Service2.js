import React, { useState } from "react";
import headersvg from "../assets/ka2.svg";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import chatbot from "../assets/chatbot.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Chatboot from "../components/Chatbot/Chatboot";
import Container from "@material-ui/core/Container";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
export default function S5Service2() {
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
            <Titre> النفاذ إلى المعلومة </Titre>
          </HeaderContent>
        </Header>
      </Container>
      <br />
      <br />
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />

      {chat ? <Chatboot /> : <></>}
      
      <Desc dir="rtl" lang="ar">     
      <Link to="S5Serv2"><B><S>طلب النفاذ للمعلومة </S><KeyboardArrowLeftIcon/></B></Link>
       <br/><br/><br/><br/><br/><br/><br/><br/>


        <h6>
          {" "}
          سياسة النفاذ إلى المعلومةالتقرير السنوي لسنة 2019 حول النفاذ الى
          المعلومةالحق في النفاذ إلى المعلومة لسنة 2018الحق في النفاذ إلى
          المعلومة لسنة 2016 تخوّل هذه الوثيقة إعادة الاستعمال لمجموعة البيانات
          والمعلومات المتاحة من طرف الهياكل العمومية طبقا للمقتضيات الواردة
          بالفصول التالية :
        </h6>
        <u> 1. الفصل الأوّل : تعريف </u>
        <br />
        <ul>
          <li>
            البيانات العمومية هي البيانات التي تنتجها الهياكل العمومية أو التي
            تتحصّل عليها في إطار مباشرتها لوظائفها المتمثلة في توفير المرافق
            العمومية. المعلومات هي البيانات التي تمت معالجتها بحيث أصبحت ذات
            معنى وباتت مرتبطة بسياق معين.
          </li>

          <li>
            يعتبر "منتجا" للبيانات العمومية الهياكل العمومية التي تضع على ذمّة
            العموم والمستعملين البيانات والمعلومات التي تنتجها وتجمّعها عندما
            تكون هذه البيانات غير خاضعة لحقوق الملكية الفكرية وغير مضرة بالأمن
            العام.ويعتبر "مستعملا" للبيانات العمومية كل شخص طبيعي أو معنوي
            يستعمل البيانات والمعلومات المتاحة من قبل الهياكل العمومية والموضوعة
            على ذمتهم من خلال موقع البيانات المفتوحة{" "}
          </li>
        </ul>
        <br />
        <u> 2. الفصل الثاني : حقوق المستعملين </u>
        <br />
        <ul>
          <li>
            حسب مقتضيات وثيقة سياسة البيانات المفتوحة، تخوّل الهياكل العمومية
            بصفتها المنتجة للبيانات العمومية لمستعملي هذه البيانات الحق الشخصي
            والمجاني في استعمال البيانات الموضوعة على ذمتهم ويبقى ذلك الحق
            مخوّلا لكل المستعملين دون أي تمييز أو اختلاف ودون أي تحديد لمكان ولا
            لمدّة زمنية
          </li>
        </ul>
        <br />
        <u> 3. الفصل الثالث : مجال الاستعمال </u>
        <br />
        <ul>
          <li>
            لا يمكن إعادة الاستعمال البيانات العمومية دون ذكر مسبق للجهة المصدرة
            لهذه البيانات والمعلومات ويمكن ذكر الجهة المصدرة للبيانات عن طريق
            توضيح الرابط أو الروابط الإلكترونية التي تمكّن من توجيه المستعمل
            للمصدر الأصلي للبيانات والمعلومات وذلك للمحافظة على ملكية الجهة
            المصدرة للمعلومة وعلى مصداقيتها وعلى صحّة مصدرها.ولا يجب أن تخوّل
            صفة ملكية المعلومة طابعا رسميا لإعادة استخدامها ولا يجب أن يتم إقرار
            أي ضمان من قبل المنتج لمن سيعيد استعمال المعلومة
          </li>
        </ul>
        <br />
        <u> 4. الفصل الرابع : مسؤولية المنتج </u>
        <br />
        <ul>
          <li>
            يتم وضع البيانات العمومية على الموقع في نسختها الأصلية كما أنتجتها
            أو تلقتها الهياكل العمومية وتضمن الهياكل العمومية بصفتها المنتجة
            للبيانات العمومية مجانية البيانات وعدم التعدي على حقوق الملكية
            الفكرية للغير.لكنها لا تضمن عدم وجود أخطاء أو مخالفات أو عيوب يمكن
            أن تكون قد تسبّبت في إفساد البيانات أو المعلومات.ولا تضمن الهياكل
            العمومية استمراريّة توفير المعلومة. ولا يمكن تحميلها المسؤولية في
            صورة ضياع أو ضرر أو خسارة ناتجة للغير بسبب إعادة استعمال البيانات
            العمومية
          </li>
        </ul>
        <br />
        <u> 5. الفصل الخامس : مسؤولية المستعمل </u>
        <br />
        <ul>
          <li>
            يعتبر مستعمل البيانات العمومية المسؤول الوحيد عن إعادة استعمال
            البيانات العمومية المدرجة بالموقع. ولا يجب أن تتسبب إعادة استعمال
            البيانات العمومية في أخطاء للغير قد تتعلق بمحتوى المعلومات وبمصدرها
            وبتاريخ إصدارها وتحيينها
          </li>
        </ul>
        <br />
        <u> 6. الفصل السادس : تطابق سياسة البيانات المفتوحة </u>
        <br />
        <ul>
          <li>
            تعتبر هذه السياسة متطابقة مع سياسات البيانات المفتوحة خاصة سياسة
            الحكومة المفتوحة في المملكة المتحدة ( Oپين عوڢيرنمينت ليچينچي)
            وسياسة مؤسسة المعرفة المفتوحة (L'وپين كنووليدعي فوونداتيون).
          </li>
        </ul>
        <br />
        <u> 7. الفصل السابع    </u>
        <br />
        <ul>
          <li>
          القانون الجاري به العمل : تخضع سياسة البيانات المفتوحة لمقتضيات القانون التونسي.
          </li>
        </ul>
      
      </Desc>
      <Footer />
    </>
  );
}

const S=styled.span`
cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
`
const B=styled.button`
display: inline-block;
border-radius: 4px;
background-color: #F9A826;
border: none;
color: #FFFFFF;
text-align: center;
font-size: 28px;
float:right;
padding: 20px;
width: 50%;
height: 10%;
transition: all 0.5s;
cursor: pointer;
margin: 5px;
`
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