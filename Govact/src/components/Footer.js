import React from "react";
import styled from "styled-components";
import footerimg from "../assets/footersvg.png";
import logo from "../assets/logo.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';

import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <Foo>
      <div className="container">
        <div className="row" style={{marginTop:"50px"}}>
          {/* Column1 */}
          <div className="col" style={{paddingLeft:"50px"}}>
            <h6>إشترك ليصلك كل جديد<br/></h6>
            <ui className="list-unstyled">
              <Form>
              <Btn><Link to="#">
                <Icon1>
                  <EmailIcon fontSize="large" />
                </Icon1>
              </Link></Btn>

            <Mail type="email" name="email" placeholder="البريد الإلكتروني "/>
             </Form>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col" style={{marginRight:"50px"}}>
            <h6 style={{textAlign:"center"}}>للتواصل معنا </h6><br/>
            <ui className="list-unstyled" style={{textAlign:"center"}}>
            <li> الهاتف الجوال : 007 218 79 </li>
              <li> الهاتف القار : 110 218 79 </li>
              <li> contact@commune-hammamlif.gov.tn : البريد</li>
              <li>  العنوان : بلدية حمام الأنف شارع الجمهورية</li><br/>
              <li><Link to="#">
                <Icon>
                  <LinkedInIcon fontSize="large" />
                </Icon>
              </Link>
              <Link to="#">
                <Icon>
                  <FacebookIcon fontSize="large" />
                </Icon>
              </Link>
              <Link to="#">
                <Icon>
                  <TwitterIcon fontSize="large" />
                </Icon>
              </Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
            <Logo src={logo} alt="logo" />
            </ui>
          </div>
        </div>
      </div>
    </Foo>
  );
}

export default Footer;
const Foo = styled.div`
color: white;
background: url(${footerimg}) no-repeat;
    padding-top: 3em;
    bottom: 0;
    width: 100%;
    background-size: cover;
`
const Logo = styled.img`
height: 10vw;
width: 10vw;
padding: 2px 10px;
justify-content: right;
`;
const Icon = styled.div`
  color: #242424;
  display: inline-block;
`;

const Btn = styled.button`
background-color: #F9A826;
color: #fff;
cursor: pointer;
border: 0;
width:5vw;
border-radius:10px 0px 0px 10px;
padding: 0.625rem 0.9375rem;
margin-top: 0.3125rem;
`;
const Icon1 = styled.div`
  color: #000;
  width:3vw;
  height:30px;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Mail = styled.input`
    padding: 0.625rem;
    margin-top: 0.3125rem;
    border:0;
    width:20vw;
    `