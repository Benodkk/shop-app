import { useParams } from "react-router-dom";
import { datas } from "../../database/data";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

function List() {
  const { type } = useParams();
  let display = [];

  if (type == "all") {
    display = datas;
  } else {
    display = datas.filter((x) => x.type == type);
  }

  return (
    <div className="productList" style={{ paddingTop: "70px" }}>
      {display.map((element) => {
        return <ItemCard key={element.id} element={element} />;
      })}
    </div>
  );
}

export default List;
