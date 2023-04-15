import { Link } from "react-router-dom";

const HeaderButton = () => {
  return (
    <Link to="/cart">
      <button className="btn">
        <span className="icon">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.l3BvMxlb7oMstBEG7Ciy_AHaHa&pid=Api&P=0"
            alt=""
          />
        </span>
        <span className="cart">votre panier</span>
        <span className="badge">4</span>
      </button>
    </Link>
  );
};
export default HeaderButton;
