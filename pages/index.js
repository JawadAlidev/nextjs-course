// domainName.com
// https://github.com/Kareem2002Shimes/nextjs-course
// npm i mongoose npm i axios npm i vercel
// vercel login vercel env add MONGO_URI vercel y vercel env add APP_PROD

// const products = [
//   {
//     id: 1,
//     image: 
//       "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     name: "Apple",
//     price: 18,
//     desc: "this is an apple",
//   },
//   {
//     id: 1,
//     image: 
//       "https://images.pexels.com/photos/260426/pexels-photo-260426.jpeg?auto=compress&cs=tinysrgb&w=1260&h",
//     name: "Watermelon",
//     price: 20,
//     desc: "this is an watermelon",
//   },
// ];

import ProductList from "@/components/products/ProductList";
import { Fragment } from "react";
// import axios from "axios";
import Head from "next/head";
import { dbConnect } from "../util/mongo";
import Product from "../models/Product";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse a list of new products" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <ProductList products={props.products} />
    </Fragment>
  );
}
export default HomePage;

export async function getServerSideProps() {
  // fetch data from an API
  // const res = await axios.get(
  //   `${process.env.APP_DEv || process.env.APP_PROD}/api/products`
  // products: res.data.data.map((product) => ({
  // )
  dbConnect();
  const productsData = await Product.find();

  return {
    props: {
      products: productsData.map((product) => ({
        image: product.image,
        name: product.name,
        price: product.price,
        id: product._id.toString(),
      })),
    },
  };
}