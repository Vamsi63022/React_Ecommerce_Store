import React from "react";
import Mobiles from "./Mobiles";
import Computer from "./Computer";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import Ac from "./Ac";

const Products = () => {
  return (
    <div>
      <Mobiles limit={5} />
      <Computer />
      <Watch />
      <Men />
      <Woman />
      <Furniture />
      <Ac />
    </div>
  );
};

export default Products;