import Style from "../search-bar/index.module.css";
import React, { useState } from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      console.log(window.location.pathname)
    }
  };

  return (
    <section className={Style.full}>
      <div className={Style.searchblock}>
        <div className={Style.search}>
          <Input.Group compact>
            <SearchOutlined style={{ fontSize: "25px", color: "#BDBDBD" }} />
            <input
              value={value}
              onChange={handleChange}
              onKeyUp={handleKeypress}
              className={Style.searchbox}
              placeholder="Search Cuisine"
            />

            <Select defaultValue="Zhejiang" style={{ border: "none" }}>
              <Option value="Zhejiang" onSelect={()=>console.log("sssss")}>Zhejiang</Option>
              <Option value="Jiangsu" onClick={()=>console.log("Jiangsu")}>Jiangsu</Option>
            </Select>
          </Input.Group>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
