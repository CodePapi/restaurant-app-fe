import Style from "../../components/restaurants/index.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Spin, Alert, message } from "antd";
import {
  get_Restaurants_,
  get_Restaurants_Cleanup,
} from "../../store/actions/get-restautants";
import { shuffle } from "../../utils/shuffle/index";

const Restaurants = () => {
  const { location, cuisine } = useParams();
  const [restaurantsData, setRestaurantsData] = useState([]);

  let query = { location: null, cuisine: null };

  if (window.location.pathname.length > 1) {
    query.cuisine = window.location.pathname.substring(1);
  }

  const dispatch = useDispatch();
  const getRestaurantState = useSelector((e) => e.getRestaurants);
  useEffect(() => {
    query.location = location;
    query.cuisine = cuisine;
    console.log("pathnane", window.location.pathname);
    dispatch(get_Restaurants_(query));
  }, []);

  useEffect(() => {
    if (getRestaurantState.isSuccessful) {
      let data = getRestaurantState.data;
      shuffle(data);
      setRestaurantsData(data);
      console.log(getRestaurantState.data);
      dispatch(get_Restaurants_Cleanup());
    } else if (getRestaurantState.error) {
      message.error("problem getting restaurants");
    }
  }, [getRestaurantState]);

  return (
    <div className={Style.containr + " container "}>
      <h1 className={Style.title}>
        {" "}
        Showing {getRestaurantState?.data?.length} Restaurants{" "}
      </h1>
      <div className={Style.float}>
        {getRestaurantState.isLoading ? (
          <Spin tip="Loading Restaurants...">
            <Alert
              style={{ height: "60vh" }}
              //   type="info"
            />
          </Spin>
        ) : (
          <section className="row">
            {restaurantsData.length < 1 ? (
              <h1 className="pl-5 ml-5 container">
                No Restaurants matches this querry
              </h1>
            ) : (
              <>
                {restaurantsData.map((restaurant, index) => (
                  <div
                    key={index}
                    className={"col-md-3 col-xl-6 " + Style.rescont}
                  >
                    <div className={Style.restaurant}></div>
                    <h4 className={Style.name}>{restaurant.Name}</h4>
                    <h5 className={Style.desc}>
                      <b>location:</b>
                      {restaurant.location} - <b>cuisine</b>:{" "}
                      {restaurant.cuisine}
                    </h5>
                  </div>
                ))}
              </>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
