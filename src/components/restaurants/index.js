import Style from "../../components/restaurants/index.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Spin, Alert, message, Button } from "antd";
import { Pagination } from "antd";
import {
  get_Restaurants_,
  get_Restaurants_Cleanup,
} from "../../store/actions/get-restautants";
import { shuffle } from "../../utils/shuffle/index";
const pageSize = 8;

const Restaurants = () => {
  const { location, cuisine } = useParams();
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [paginationConfig, setConfig] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

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

  const handleChange = (page) => {
    console.log(page);
    setConfig({
      data: restaurantsData,
      totalPage: restaurantsData.length,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  useEffect(() => {
    if (getRestaurantState.isSuccessful) {
      let data = getRestaurantState.data;
      shuffle(data);
      setRestaurantsData(data);
      setConfig({
        data,
        totalPage: data.length / pageSize,
        current: 1,
        minIndex: 0,
        maxIndex: pageSize,
      });
      console.log(getRestaurantState.data);
      dispatch(get_Restaurants_Cleanup());
    } else if (getRestaurantState.error) {
      message.error("problem getting restaurants");
    }
  }, [getRestaurantState]);
  const { data, current, minIndex, maxIndex } = paginationConfig;
  return (
    <div className={Style.containr + " container "}>
      <h1 className={Style.title}> Showing {data?.length} Restaurants </h1>
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
              <h1 className=" container">No Restaurants matches this querry</h1>
            ) : (
              <>
                {data.map(
                  (restaurant, index) =>
                    index >= minIndex &&
                    index < maxIndex && (
                      <div
                        key={index}
                        className={"col-md-3 col-xl-6 " + Style.rescont}
                      >
                        <div className={Style.restaurant}></div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <h4 className={Style.name}>{restaurant.Name}</h4>
                            <h5 className={Style.desc}>
                              <b>location:</b>
                              {restaurant.location} - <b>cuisine</b>:{" "}
                              {restaurant.cuisine}
                            </h5>
                          </div>
                          <div className={Style.bookdiv}>
                            <Button className={Style.bookbutton}>Book</Button>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </>
            )}
            <Pagination
              pageSize={pageSize}
              current={current}
              total={data.length}
              onChange={handleChange}
              style={{ bottom: "0px" }}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
