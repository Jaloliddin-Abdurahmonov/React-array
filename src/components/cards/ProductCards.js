import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import honor from "../../images/honor.jpg";
function ProductCards() {
  const products = [
    {
      title: "O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
      photoURL:
        "https://olcha.uz/image/700x700/products/0ck58PLQC8rZRfy5xfMRRswAeBM2ynhopVtCEiMTt2PPdRV3TLeVsMbRpVCp.jpg",

      oldPrice: "9 000 000",
      nowPrice: "7 300 000",
      nasiya: "855 000",
    },
    {
      title: "Apple iPhone 15 Pro",
      photoURL:
        "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-07-24/GXnlCe9OvklS1p0BdVMR0qp9NhQhJQz3ySaRmEnz7XbK8BjnEPLZhKxR2gzw.jpg",
      oldPrice: "",
      nowPrice: "14 726 864",
      nasiya: "1 725 000",
    },
    {
      title: "O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
      photoURL:
        "https://olcha.uz/image/700x700/products/0ck58PLQC8rZRfy5xfMRRswAeBM2ynhopVtCEiMTt2PPdRV3TLeVsMbRpVCp.jpg",

      oldPrice: "9 000 000",
      nowPrice: "7 300 000",
      nasiya: "855 000",
    },
    {
      title: "Apple iPhone 15 Pro",
      photoURL:
        "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-07-24/GXnlCe9OvklS1p0BdVMR0qp9NhQhJQz3ySaRmEnz7XbK8BjnEPLZhKxR2gzw.jpg",

      oldPrice: "",
      nowPrice: "14 726 864",
      nasiya: "1 725 000",
    },

    {
      title: "O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
      photoURL: `${honor}`,

      oldPrice: "9 000 000",
      nowPrice: "7 300 000",
      nasiya: "855 000",
    },
  ];

  return (
    <div className="cards_box">
      {products.map((product) => (
        <div className="card">
          <div className="card_header">
            <img src={product.photoURL} alt="" />
            <div className="product_icons">
              <FavoriteBorderIcon className="icon" />
              <EqualizerIcon className="icon" />
            </div>
          </div>
          <div className="card_body">
            <p>{product.title}</p>
            <div className="price">
              <h3>{product.nowPrice}</h3>
              <p>{product.oldPrice}</p>
            </div>
            <div className="card_kredit">
              <span>{product.nasiya} so'm x 12</span>
            </div>
          </div>
          <div className="card_footer">
            <button>
              <ShoppingCartIcon />
            </button>
            <button>Muddatli to'lov</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
