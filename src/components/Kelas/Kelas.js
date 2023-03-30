import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../../helper/format/currency";
import image from "../../images/image-1.jpg";
import "../../styles/KelasStyles.css";

export default function Kelas(props) {
  const { data, color } = props;
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
          my: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "start" },
          alignItems: { xs: "center", sm: "start" },
          gap: 2,
        }}
      >
        {data.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100px", sm: "300px" },
              my: 3,
            }}
            key={index}
          >
            <img
              src={item.images[0]}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "10px",
                width: "200px",
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
        ))}
      </Container>
    </>
  );
}
