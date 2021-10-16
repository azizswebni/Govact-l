import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { Button } from "react-bootstrap";
export default function Naavbar() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  const [show1, setShow1] = useState(false);

  const showDropdown1 = (e) => {
    setShow1(!show1);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setAuth(true);
      setName(localStorage.getItem("username")[0]);
    }
  }, [auth, name]);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {auth ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <MeetingRoomIcon
              color="primary"
              style={{ marginRight: "2vh", cursor: "pointer" }}
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            />
            <Avatar>{name.toUpperCase()}</Avatar>
          </div>
        ) : (
          <>
            <Nav.Link href="/SignIn">
              <Button variant="outline-warning" size="lg" id="boutton">
                الدخول
              </Button>
            </Nav.Link>
          </>
        )}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth ? (
              <Nav.Link href="/Reclamation" className="bt">
                شكاوي
              </Nav.Link>
            ) : (
              <></>
            )}
            <Nav.Link href="/Contact" className="bt">
              التواصل
            </Nav.Link>

            <NavDropdown
              onToggle={() => {
                window.location.href = "/Actualite";
              }}
              className="bt"
              title="المستجدات"
              id="basic-nav-dropdown"
              show={show1}
              onMouseEnter={showDropdown1}
              onMouseLeave={hideDropdown1}
            >
              <NavDropdown.Item href="/Avis">استطلاعات الرأي</NavDropdown.Item>
              <NavDropdown.Item href="/Suggest">مقترحات</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              onToggle={() => {
                window.location.href = "/Khadamet";
              }}
              className="bt"
              title="الخدمات"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="/Service1">
                الحالة المدنية
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service2">
                الخدمات الادارية
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service3">
                الجباية المحلية
              </NavDropdown.Item>

              <NavDropdown.Item href="/Service4">
                الشؤون الاقتصادية
              </NavDropdown.Item>
              <NavDropdown.Item href="/Service5">
                خدمات على الخط
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Baladiya" className="bt">
              البلدية
            </Nav.Link>
            <Nav.Link href="/">
              <HomeIcon className="Icon" fontSize="large" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
