import "./panel.css";

function Panel({ number, icon, heading, text }: IPanelProps) {
  return (
    <div className="panel">
      <div className="panel-number">{number}</div>
      <div className="panel-icon">
        <img src={icon} alt="" />
      </div>
      <div className="panel-content">
        <div className="content-heading">
          <h4>{heading}</h4>
        </div>
        <div className="panel-text">{text}</div>
      </div>
    </div>
  );
}

export default Panel;
