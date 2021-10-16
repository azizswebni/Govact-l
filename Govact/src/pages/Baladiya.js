import React, { useRef, useState } from "react";
import Navbar from "../components/Naavbar";
import styled from "styled-components";
import bg from "../assets/bg.png";
import Container from "@material-ui/core/Container";
import Card from "../components/Card";
import card1 from "../assets/c1.svg";
import card2 from "../assets/c2.svg";
import card3 from "../assets/c3.svg";
import card4 from "../assets/c4.svg";
import Footer from "../components/Footer";

import chatbot from "../assets/chatbot.png";
import Chatboot from "../components/Chatbot/Chatboot";

export default function Baladiya() {
  const [chat, setChat] = useState(false);
  const OpenChatbot = () => {
    setChat((prev) => !prev);
  };

  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3 = useRef(null);
  const sec4 = useRef(null);

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
  const gotosec3 = () => {
    window.scrollTo({
      top: sec3.current.offsetTop - 110,
      behavior: "smooth",
    });
  };
  const gotosec4 = () => {
    window.scrollTo({
      top: sec4.current.offsetTop - 110,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="false" disableGutters="false">
        <Header className="Header">
          <HeaderContent>
            <Titre> البلدية </Titre>
            <Description>معلومات حول بلدية حمام الانف</Description>
          </HeaderContent>
        </Header>
      </Container>
      <Wrapper>
        <div onClick={gotosec4}>
          <Card titre="التعاون الدولي" svg={card4} />
        </div>
        <div onClick={gotosec3}>
          <Card titre="تاريخ الاحداث" svg={card3} />
        </div>
        <div onClick={gotosec2}>
          {" "}
          <Card titre="المصالح البلدية" svg={card2} />
        </div>
        <div onClick={gotosec1}>
          <Card titre="تعريف البلدية" svg={card1} />
        </div>
      </Wrapper>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />
      <Sec ref={sec1}>
        <Im src={card1}></Im>
        <Desc dir="rtl" lang="ar">
          <h3>تعريف البلدية</h3>
          <li>  البلدية هي دائرة حكومية تقوم بتطوير المدن والقرى المحيطة بها وإنارة الطرق وتجميل الشوارع بالأشجار واللوحات الإرشادية وتنفيذ المخططات للمواطنين وتنظيم الأسواق وتقوم بتصريف مياه الأمطار والمحافظة على نظافة المدينة وتقوم الدولة بتخصيص
             ميزانية ضخمة للبلدية من أجل التطور وتحسين مظاهر المدن. عادة تتكون من عدة أقسام كالتالي : </li>
          
          <b> رئيس البلدية</b> هو المسؤول الأول في البلدية وله صلاحيات شاسعه من
          حيث تنفيذ المشاريع والتوظيف وشراء السيارات اللازمة له ولموظفي البلدية
          والمعدات الثقيلة وبناء المباني المملوكة للبلدية ويستطيع أن يفوض بعض
          صلاحياته لنائبه أو مساعده
          <br />
          <b>القسم الفني</b> وهو مسؤول عن تخطيط المدن والمباني والمشاريع
          الحكومية وإعطاء التراخيص اللازمة لذلك
          <br />
          <b>قسم صحة البيئة</b> ويرأسه عادة طبيب بيطري أو مراقب صحي مهمة هذا
          القسم منح الصحة لفتح المحلات التجارية والخاصة بالأطعمة وما في حكمها
          ومتابعة نظافة المدينة ومراقبة الأسواق والمحلات التي لها علاقة بالصحة
          العامة وتحرير المخالفات للمخالفين من أصحاب المحلات التجارية
          <br />
          <b>قسم مراقبة الأراضي والتعديات</b> هو قسم مسؤول عن مراقبة الأراضي
          الحكومي والبيضاء ومنع التعدي عليها أو البناء فيها دون صك ملكية أو رخصة
          بناء من البلدية
          <br />
          <b>قسم الشؤون المالية</b> وهو المسؤول عن المصروفات والإيرادات من
          الميزانية التي خصصت للبلدية ويقوم بتامين المعدات اللازمة للاقسام
          الأخرى في البلدية
          <br />
          <b>قسم الاستثمارات</b> هو قسم مسؤول عن الاستثمارات البلدية ومنح
          الأراضي والمخططات وتخصيص أراضي للجهات الحكومية الأخرى وغيرها.
          <br />
          <b>قسم شؤون الموظفين</b> وهو مسؤول عن كل الموظفين من حيث رواتبهم
          وإجازاتهم وحقوقهم كما يتولى منصب مدير شؤون الموظفين في العادة مساعد
          رئيس البلدية
        </Desc>
      </Sec>
      <Sec ref={sec2}>
        <Im src={card2}></Im>
        <Desc dir="rtl" lang="ar">
          <h3>المصالح البلدية</h3>
          <b> الادارة الفرعية للشؤون الادارية والاجتماعية والثقافية</b> : التصرف
          في شؤون الموظفين والعملة والحرص على رسكلة الأعوان وتقديم الخدمات
          الوقائية وتوفير السلامة المهنية ومتابعة سير الحالة المدنية :<br /> -
          مصلحة الموارد البشرية
          <br /> - مصلحة الحالة المدنية والانتخابات <br />- مصلحة الشؤون
          العقارية والنزاعات
          <br /> - مصلحة الشؤون الاجتماعية والثقافية والشباب والرياضة <br />
          <b>الادارة الفرعية للشؤون المالية وتنمية الموارد</b> :<br /> - مصلحة
          الحسابيات والميزانية
          <br /> - مصلحة الآداءات والمعاليم <br />- مصلحة الصفقات والتزود
          والشراءات <br />- مصلحة الشؤون الاقتصادية والحجز
          <br /> <b>الادارة الفرعية للطرقات والاشغال</b>:
          <br /> - مصلحة الطرقات والمرور
          <br /> - مصلحة التنوير العمومي <br />- مصلحة الورشات والصيانة
          <br /> <b>إدارة حفظ الصحة والنظافة والعناية بالبيئة</b>:
          <br /> للسهر على انجاز الاشغال المتعلقة بتنظيف المنطقة البلدية ورفع
          الفضلات ومعالجتها والتصرف فيها في المصب البلدي وتسييره والعناية
          بالبيئة ومقاومة التلوث حفاظا على سلامة المحيط ، كما تعنى باحداث
          المناطق الخضراء والحدائق وتعهدها، وتضم الإدارات والمصالح التالية:
          <br /> <u>الادارة الفرعية لحفظ الصحة</u> : <br />- مصلحة المراقبة
          الصحية
          <br />- مصلحة مقاومة الحشرات والاوبئة والتلوث <br />
          <u>الادارة الفرعية للنظافة والعناية بالبيئة</u> : <br />- مصلحة
          النظافة
          <br /> - مصلحة البستنة <br />
          <u> الادارة الفرعية للعمران</u> : <br />- مصلحة التقسيمات ورخص البناء
          <br /> - مصلحة التهيئة العمرانية والدراسات ومتابعة المشاريع
        </Desc>
      </Sec>
      <Sec ref={sec3}>
      <Im src={card3}></Im>

        <Desc dir="rtl" lang="ar">
          <h3>تاريخ الاحداث</h3>
                <b>تاريخ المدينة</b>
                <div>
                  عرفت مدينة حمّام الأنف منذ القديم بإسم" نارو " NARO" و هي
                  "بونيّة" الأصل برزت كقرية صغيرة متواضعة إشتهرت بعيون معدنية
                  تنبع من سفح جبل (بوقرنين) جبل "BAAL –KARNEINE" ، الذي يعني
                  باللغة الفينيقية "إلاله صاحب القرنين"، الذي إشتهر في العهد
                  القرطاجي، و قد وقع العثور على معبده الذي تم مزجه بالإله
                  الروماني "SATURNE" (القرن الثاني و الثالث ميلادي) إلى جانب
                  العديد من النقائش النظرية المهداة إلى هذا الإله المسمى
                  ""SATURNE BAL KARNENSIS " . وعرفت مدينة حمام الأنف في العهد
                  الرماني بإسم "AD AQUAS PERSIEA NAE" حيث إمتدت كمدينة صغيرة على
                  السفح الغربي لجبل بوقرنين أين إكتشفت آثار لمعابد مسيحية و
                  يهودية "SYNAGOGUE" أ ثناء حفريات تمت في أواخر القرن التاسع عشر
                </div>
                <div >
                  اكتشافات أثريَة بالمتطقة (1999) في بداية سنة 1999 تم إكتشاف حي
                  صناعي يرجع إلى العهد الروماني والبيزنطي (من القرن الثالث إلى
                  السابع ميلادي) يضم أنقاض منشآت يرجح أنها كانت مخصصة لصبغ
                  الملابس أو الجلد كما تم إكتشاف معبد مسيحي محاذ لهذه المنشآت
                  الصناعية ومعصرة خمر وورشة لصناعة البلور و هي معالم تشهد على
                  وجود حي صناعي هام في هذه المنطقة التابعة للمدينة القديمة . أما
                  في عهد الفتح العربي الإسلامي، فقد عرفت مدينة حمّام الأنف بـ
                  "حمّام الجزيرة" (جزيرة أبو شريك سابقا-الوطن القبلي حاليا) ثم
                  أطلق عليها إسم حمام الأنف نظرا إلى خصوصية مياهها السخنة
                  الحاوية لمادة الكبريت.
                </div>
                <div >
                  و في سنة 1705إعتلى عرش تونس حسين بن علي باشا باي الذي حط رحاله
                  في ليلته الأولى بسفح "جبل بوقرنين" بالقرب من العين الباطنية
                  القديمة وقد أمر الباي سنة 1750 ببناء جناح في هذا المكان ليقيم
                  فيه خلال فصل الشتاء وتم منذ ذلك التاريخ تشييد العديد من القصور
                  لفائدة الوزراء والأمراء و تهيئة العيون لتغذية العديد من
                  المسابح بها و حول هذه العيون إستقر العديد من السكان الذين
                  جاؤوا من أماكن بعيدة للإستحمام.
                </div>
        </Desc>
      </Sec>
      <Sec ref={sec4}>
        <Im src={card4}></Im>

        <Desc dir="rtl" lang="ar">
          <h3>التعاون الدولي</h3>
           <li>التعاون الدولي هو مصطلح يطلق على الجهود المبذولة بين دول العالم من أجل تحقيق مصلحة الدول المتعاونة وفي سبيل تحقيق الأمن والسلم الدوليين ومواجهة التحديات السياسية والاجتماعية والاقتصادية و الأمنية. كما يمكن للتعاون الدولي أن يتم على مستوى الأفراد بين الدول والمجتمعات والاعراق المختلفة إضافة إلى المنظمات الحكومية والغير حكومية، بشكل عام التعاون الدولي يتم بصفة رسمية عبر الاتفاقيات والمعاهدات البينية أو الدولية كما يمكن أن يتجسد في المساعدات الإنسانية والتحركات المشتركة، يعد هذ المبدأ من القواعد الأساسية التي تقوم عليها منظمة الأمم المتحدة وتدعو إلى تحقيقها.</li>        </Desc>
      
      
      </Sec>
      <ChatBot src={chatbot} alt="Chatbot" onClick={OpenChatbot} />

      {chat ? <Chatboot /> : <></>}
      <Footer />
    </div>
  );
}
const Sec = styled.div`
  margin: 50px;
  border-radius: 20px;
  padding: 2px 16px;
  display: flex;
  gap: 2rem;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
const Desc = styled.p`
  width: 80%;
  justify-content: center;
  text-align: right;
`;
const Im = styled.img`
  height: 15vw;
  width: 15vw;
  padding: 2px 16px;
  border-radius: 20px;
  justify-content: left;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 1rem;
  justify-content: center;
`;
const Header = styled.div`
  margin-bottom: 30px;
  height: 600px;
  flex: 1;
  padding: 10%;
  background: url(${bg}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const HeaderContent = styled.div`
  width:100%
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
 
`;
const Titre = styled.p`
  width: 100%;
  color: white;
  font-size: 5vw;
  text-align: center;
`;
const Description = styled.p`
  color: white;
  font-size: 2vw;
  display: flex;
  text-align: center;
  widht: 100%;
`;
const ChatBot = styled.img`
  height: 15vh;
  width: 15vh;
  position: fixed;
  right: 0;
  bottom: 0;
`;