import "./InfoCard.css";
import { IInfoCardProps } from "./types";

function InfoCard({ heading, subtitle, imageName, link }: IInfoCardProps) {
  return (
    <div className="info-card">
      <div className="heading">
        <h4>{heading}</h4>
      </div>
      <img src={imageName} alt="" className="cover-image" />
      <p>
        <b>{subtitle}</b>
      </p>
      <div>
        <button>Book a 30-min intro call</button>
      </div>
      <a className="link">{link?.text || null}</a>
    </div>
  );
}

export default InfoCard;
