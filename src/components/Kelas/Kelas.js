import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../helper/format/currency";
import "../../styles/KelasStyles.css";

export default function Kelas(props) {
  const { data } = props;
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "11px", sm: "26px" },
        }}
        {...props}
        // color="blue"
      >
        Kelas yang tersedia
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "center" },
          alignItems: { xs: "center", sm: "start" },
          gap: 4,
        }}
      >
        {data.map((item, index) => (
          <Link
            to={`/detail/${item.id}`}
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
              key={index}
            >
              <img
                src={item.thumbnail}
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
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginTop: "4px",
                }}
              >
                {item.description}
              </Typography>
              <Typography sx={{ color: "blue" }}>
                {item.price.currency()}
              </Typography>
            </Box>
          </Link>
        ))}
      </Container>
    </>
  );
}
