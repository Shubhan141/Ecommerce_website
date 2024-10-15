import { items } from "../data";
import { Link } from "react-router-dom";

export const List = () => {
  return (
    <div className="list page">
      <h3 style={{ textAlign:'center',fontSize:'2rem'}}>List page</h3>
      <div className="item-list">
        {items.map((item) => (
          <Link key={item.id} to={`/list/${item.id}`}>
            <div className="item">
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};