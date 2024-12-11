import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src="./logo.png" alt="" />
      </div>
      <div className="center-container">
        <span>Jacques on Demand 2025</span>
      </div>
      <div className="info-container">
        <div className="item">
          <img src="./office.svg" alt="" />
          <p>WeWork Sandton</p>
        </div>
        <div className="item">
          <img src="./phone.svg" alt="" />
          <p>(+27) 76 791 7073</p>
        </div>
        <div className="item">
          <img src="./mail.svg" alt="" />
          <p>jacquespienaar.software@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
