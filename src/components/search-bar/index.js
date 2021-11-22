import Style from "../search-bar/index.module.css";

import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;


const SearchBar = () => {
  return (
    <section className={Style.full}>
      <div className={Style.searchblock}>
        <div className={Style.search}>
          <Input.Group compact>
            <SearchOutlined style={{ fontSize: "25px", color: "#BDBDBD" }} />
            <input className={Style.searchbox} placeholder="Search Cuisine" />

            <Select defaultValue="Zhejiang" style={{border:"none"}}>
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Input.Group>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
