import Style from "../explore-categories/index.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCuisines,
  getCuisinesCleanup,
} from "../../store/actions/get-cuisines";
import { get_Restaurants_ } from "../../store/actions/get-restautants";

import { message } from "antd";

const ExploreCategories = () => {
  const dispatch = useDispatch();
  const getCuisinesState = useSelector((s) => s.getCuisines);

  useEffect(() => {
    dispatch(getCuisines());
  }, []);

  let query = { cuisine: null };
  const filterByCuisines = (cu) => {
    query.cuisine = cu;
    dispatch(get_Restaurants_(query));
  };

  useEffect(() => {
    if (getCuisinesState.isSucessfull) {
      dispatch(getCuisinesCleanup());
    } else if (getCuisinesState.error) {
      message.error("Failed to get cuisines, try reloading");
      dispatch(getCuisinesCleanup());
    }
  }, []);
  return (
    <section className={Style.containr + " container"}>
      <h1 className={Style.title}>Explore by category</h1>
      {getCuisinesState.isLoading && <h5>Loading Categories...</h5>}

      <div className={Style.allcusines}>
        <div className={Style.cuisineparent}>
          {getCuisinesState?.data?.map((cuisne, index) => (
            <Link
              onClick={() => filterByCuisines(cuisne)}
              to={"/cuisine/" + cuisne}
              className={Style.cus}
              key={index}
            >
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
