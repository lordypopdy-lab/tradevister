import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

const MainNavBar = () => {
  const logout = () => {
    localStorage.removeItem("user");
    location.href = "/login";
  };

  return (
<Navbar
  expand="lg"
  fixed="top"
  className="shadow-lg"
  style={{
    background: "linear-gradient(90deg, #0f172a 0%, #1e293b 100%)",
    zIndex: 1050,
    padding: "0.5rem 1rem",
  }}
>
  <Container fluid>
    {/* Logo & Brand */}
    <Navbar.Brand href="/dashboard" className="d-flex align-items-center">
      <img
        src="img/logo_2.png"
        width={30}
        height={30}
        className="d-inline-block align-top me-2"
        alt="logo"
      />
      <span
        className="fw-bold"
        style={{
          color: "#10b981",
          fontSize: "1.25rem",
          letterSpacing: "1px",
        }}
      >
        TradeVister
      </span>
    </Navbar.Brand>

    <Navbar.Toggle
      aria-controls="navbarScroll"
      className="border-0"
      style={{ backgroundColor: "#10b981" }}
    />

    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
        {/* Nav Links */}
        <Nav.Link
          href="/dashboard"
          className="text-white d-flex align-items-center mx-1 px-3 py-2 rounded hover-glow"
        >
          <i className="fas fa-user-circle me-2"></i>Account
        </Nav.Link>

        <Nav.Link
          href="/deposite"
          className="text-white d-flex align-items-center mx-1 px-3 py-2 rounded hover-glow"
        >
          <i className="fas fa-money-bill-wave me-2"></i>Deposit
        </Nav.Link>

        <Nav.Link
          href="/withdraw"
          className="text-white d-flex align-items-center mx-1 px-3 py-2 rounded hover-glow"
        >
          <i className="fas fa-hand-holding-usd me-2"></i>Withdraw
        </Nav.Link>

        <Nav.Link
          href="/settings"
          className="text-white d-flex align-items-center mx-1 px-3 py-2 rounded hover-glow"
        >
          <i className="fas fa-cog me-2"></i>Account Settings
        </Nav.Link>

        <Nav.Link
          href="/contact"
          className="text-white d-flex align-items-center mx-1 px-3 py-2 rounded hover-glow"
        >
          <i className="fas fa-question-circle me-2"></i>Contact Support
        </Nav.Link>

        <Nav.Link
          onClick={logout}
          href="#"
          className="text-danger d-flex align-items-center mx-1 px-3 py-2 rounded hover-red"
        >
          <i className="fas fa-sign-out-alt me-2"></i>Logout
        </Nav.Link>

        {/* Premium Dropdown */}
        <NavDropdown
          title={
            <span className="text-white d-flex align-items-center">
              Where to Buy <i className="fas fa-angle-down ms-1"></i>
            </span>
          }
          id="navbarScrollingDropdown"
          className="mx-1 px-3 py-2 rounded hover-glow"
          menuVariant="dark"
        >
          {[
            { name: "Bitso", link: "https://bitso.com/" },
            { name: "Binance", link: "https://www.binance.com/" },
            { name: "Huobi", link: "https://www.huobi.com/" },
            { name: "OKEx", link: "https://www.okex.com/" },
            { name: "CoinEx", link: "https://www.coinex.com/" },
            { name: "KuCoin", link: "https://www.kucoin.com/" },
            { name: "Bitstamp", link: "https://www.bitstamp.net/" },
            { name: "Luno", link: "https://www.luno.com/" },
            { name: "Remitano", link: "https://remitano.com/" },
            { name: "Moonpay", link: "https://www.moonpay.com/" },
            { name: "Paxful", link: "https://paxful.com/" },
            { name: "Coinbase", link: "https://www.coinbase.com/" },
            { name: "Ramp", link: "https://ramp.network/buy" },
            { name: "Banxa", link: "https://openocean.banxa.com/" },
            { name: "Chainbits", link: "https://www.chainbits.com/" },
            { name: "Bitcoin.com", link: "https://www.bitcoin.com/" },
          ].map((item, idx) => (
            <React.Fragment key={idx}>
              <NavDropdown.Item href={item.link} target="_blank">
                {item.name}
              </NavDropdown.Item>
              {idx < 15 && <NavDropdown.Divider />}
            </React.Fragment>
          ))}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>

  {/* CSS for hover effects */}
  <style jsx>{`
    .hover-glow:hover {
      background: rgba(16, 185, 129, 0.15);
      transition: all 0.3s ease;
      color: #10b981 !important;
    }
    .hover-red:hover {
      background: rgba(239, 68, 68, 0.15);
      transition: all 0.3s ease;
      color: #ef4444 !important;
    }
  `}</style>
</Navbar>
  );
};

export default MainNavBar;
