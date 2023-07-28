import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Data1 } from "../data/data1";

const FooterB = () => {
  return (
    <>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Data1.map((el) => (
          <Card sx={{maxWidth: "400px", m: 3}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={el.image}
                alt={el.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component={"div"} sx={{textAlign: "center", fontSize:"20px"}}>
                    {el.title}
                </Typography>
                <Typography variant="body2" sx={{textAlign: "center"}}>
                    {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default FooterB;
