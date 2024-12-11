import "./ReviewCard.css";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="top">
        <img src="./avatar.png" alt="" className="avatar" />
        <div className="top-text">
          <span className="name">John</span>
          <span className="description">Verified Buyer</span>
        </div>
      </div>
      <div className="review-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        autem sequi corporis iusto exercitationem iste saepe doloribus.
      </div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star empty"></div>
      </div>
    </div>
  );
};

export default ReviewCard;
