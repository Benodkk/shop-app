import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { datas } from "../../database/data";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

function List() {
  const { type } = useParams();
  let display = [];

  const [title, setTitle] = useState("");

  if (type == "all") {
    display = datas;
  } else {
    display = datas.filter((x) => x.type == type);
  }

  useEffect(() => {
    if (type == "all") {
      setTitle("All Products");
    } else if (type == "laptop") {
      setTitle("Laptops");
    } else if (type == "smartphone") {
      setTitle("Smartphones");
    }
  }, [type]);

  return (
    <div className="productListContainer">
      <h1 className="title">{title}</h1>
      <div className="productList">
        {display.map((element) => {
          return <ItemCard key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
}

export default List;
