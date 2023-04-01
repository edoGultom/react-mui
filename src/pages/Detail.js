import { Box, Button, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Select from "../components/Select/Select";
import "../helper/format/currency";
import "../helper/format/thousand";
import { useGlobalContext } from "../helper/hook/useGlobalState";

export default function Detail() {
  const { detailId } = useParams();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [jadwal, setJadwal] = useState("");

  const { dispatch } = useGlobalContext();

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${detailId}`
      );
      setData(response.data);
      setImages(response.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (detailId) {
      getData();
    }
  }, [detailId]);

  const handleCart = () => {
    const form = {
      id: data.id,
      title: data.title,
      price: data.price,
      thumbnail: data.thumbnail,
      jadwal: jadwal,
    };

    dispatch({ type: "ADD_CART", item: form });
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            // bgcolor: "lemonchiffon",
            display: "flex",
            mx: "70px",
            gap: "40px",
            my: "40.5px",
            alignItems: "center",
          }}
        >
          <img
            src={data.thumbnail}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "16px",
              width: "400px",
              height: "266.67px",
            }}
            alt=""
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              // bgcolor: "cyan",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontWeight: "light", color: "gray", fontSize: "16px" }}
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {data.description}
            </Typography>
            <Typography sx={{ color: "blue", fontSize: "24px" }}>
              {parseInt(data.price).currency()}
            </Typography>

            {/* SELECT */}
            <Select
              label="Pilih Jadwal Kelas"
              value={jadwal}
              onSelectChange={(e) => setJadwal(e.target.value)}
            />

            {/* BTN */}
            <Box sx={{ display: "flex", mt: "60px", gap: "16px" }}>
              <Button variant="contained" onClick={handleCart}>
                Masukkan Keranjang
              </Button>
              <Button variant="outlined">Beli Sekarang</Button>
            </Box>
            {/*TUTUP BTN */}
          </Box>
        </Box>
        <Box sx={{ mt: "40px", mx: "70px", my: "40.5px" }}>
          <Typography fontSize="24px">Deskripsi</Typography>
          <Typography fontSize="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "40px",
            mx: "70px",
            my: "40.5px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xs: "center", sm: "start" },
            gap: 4,
          }}
        >
          {images.map((item, index) => (
            <Link
              to={`/detail/${index}`}
              style={{ textDecoration: "none", color: "black" }}
              key={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100px", sm: "300px" },
                  my: 3,
                  cursor: "pointer",
                }}
              >
                <img
                  src={item}
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: "16px",
                    width: "100%",
                    height: "200px",
                  }}
                  alt=""
                />
                <Typography sx={{ fontWeight: "light", color: "gray", my: 2 }}>
                  {/* {item.title} */}
                  Drum
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                    marginTop: "4px",
                  }}
                >
                  {/* {item.description} */}
                  Deskripsi
                </Typography>
                <Typography sx={{ color: "blue" }}>
                  {/* {item.price.currency()} */}
                  IDR 5.450.000
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Divider orientation="horizontal" flexItem />
    </Layout>
  );
}
