import React from "react";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Data2 } from "../data/data2";

const FooterF = () => {
  return (
    <>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {Data2.map((el) => (
          <Card sx={{maxWidth: "230px", m: 3}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "230px" }}
                component={"img"}
                src={el.image}
                alt={el.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component={"div"} sx={{textAlign: "center", fontSize:"15px", color: "#002684"}}>
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

export default FooterF;
