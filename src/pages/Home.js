import { Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Kelas from "../components/Kelas/Kelas";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setDataProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Hero />
      <Divider orientation="horizontal" flexItem />
      <Kelas data={dataProducts} color="blue" />
    </Layout>
  );
}
