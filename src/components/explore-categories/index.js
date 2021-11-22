import Style from "../explore-categories/index.module.css";
import { Link } from "react-router-dom";
const cuisnes = [
  "rice",
  "beans",
  "egusi",
  "chicken",
  "salad",
  "noodles",
  "fried yam",
  "scorge egg",
  "chinese fries",
  "fried fish",
];

const ExploreCategories = () => {
  return (
    <section className={Style.containr + " container"}>
      <h1 className={Style.title}>Explore by category</h1>
      <div className={Style.allcusines}>
        <div className={Style.cuisineparent}>
          {cuisnes.map((cuisne, index) => (
            <Link to={"/" + cuisne} className={Style.cus} key={index}>
              <div className={Style.cuisine}></div>
              <h5>{cuisne}</h5>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
