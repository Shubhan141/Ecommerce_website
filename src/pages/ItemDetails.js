import { useParams } from "react-router-dom";
import { itemDetailsData } from "../data";
import { Link } from "react-router-dom";

export const ItemDetails = () => {
  const { itemId } = useParams();
  console.log("itemId is:",itemId);

  const item = itemDetailsData.find((i) => i.id === itemId);
 console.log("items is clicked :",item);
  if (!item) {
    return <h3> Item details not found.</h3>;
  }

  return (
    <div className="item-details page">
      {/* print the details of that item */}
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
      <ul className="specs">
        {item.specs.map((spec, i) => (
          <li key={i}>{spec}</li>
        ))}
      </ul>

      <p>{item.description}</p>
      <br/>
      <Link 
  to='/list' 
  style={{
    padding: '10px 20px', 
    fontSize: '18px', 
    textDecoration: 'none', 
    backgroundColor: '#007BFF', // A nicer shade of blue
    color: 'white', 
    borderRadius: '1.5rem', 
    marginTop: '2rem', 
    transition: 'background-color 0.3s ease', // Smooth hover effect
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow for depth
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'} // Darker shade on hover
  onMouseLeave={(e) => e.target.style.backgroundColor = '#007BFF'} // Reset background color
>
  Back
</Link>
    </div>
  );
};
