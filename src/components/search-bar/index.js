import Style from "../search-bar/index.module.css";
import React, { useState, useEffect } from "react";
import { Input, message, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  getLocations,
  getLocationsCleanup,
} from "../../store/actions/get-locations";
import { get_Restaurants_ } from "../../store/actions/get-restautants";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const SearchBar = () => {
  const navigate = useNavigate();
  const [cuisine, setCuisineValue] = useState("");
  const dispatch = useDispatch();
  const locationsState = useSelector((l) => l.getLocations);
  const cuisineState = useSelector((c)=>c.getCuisines)


  const handleChange = (e) => {
    setCuisineValue(e.target.value);
  };

  let query = { location: null, cuisine:null };
  const FilterLocation = (loc) => {
    navigate("/" + loc);
      if(cuisine.trim().length>0){
        navigate(`/${loc}/${cuisine}` );
        query.cuisine = cuisine;  
      }
  
    query.location = loc;
    dispatch(get_Restaurants_(query));
  };
  useEffect(() => {
    dispatch(getLocations());
  }, []);
  useEffect(() => {
    if (locationsState.isSuccesful) {
      dispatch(getLocationsCleanup());
    } else if (locationsState.error) {
      message.error("Problems getting locations");
      dispatch(getLocationsCleanup());
    }
  }, []);

  return (
    <section className={Style.full}>
      <div className={Style.searchblock}>
        <div className={Style.search}>
          <Input.Group className={Style.in} compact>
            <SearchOutlined style={{ fontSize: "25px", color: "#BDBDBD" }} />
            <input
              value={cuisine}
              onChange={handleChange}
              className={Style.searchbox}
              placeholder="Search Cuisine"
            />

            <Select
            disabled={cuisine.trim().length>0&&cuisineState?.data.includes(cuisine)===false}
              onChange={(e) => FilterLocation(e)}
              defaultValue="location"
              style={{ border: "none",outline:"none", width:"150px"}}
            >
              {locationsState?.data?.map((location, index) => (
                <Option key={index} value={location}>
                  {location}{" "}
                </Option>
              ))}
            </Select>
          </Input.Group>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
