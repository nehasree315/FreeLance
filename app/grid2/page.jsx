"use client";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NestedGrids() {
  return (
    <div>
      <Link
        className="mb-18 ml-7 font-semibold"
        style={{ textDecoration: "underline" }}
        href="/"
      >
        Home
      </Link>
      <Box sx={{ flexGrow: 1, marginTop: 9 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3, mt: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://b2c-contenthub.com/wp-content/uploads/2021/09/iphone-13-pro.jpg?quality=50&strip=all"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      I PHONE 13 PRO
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      IOS 17 is packed with new features that help you connect
                      with others, be more present and in the moment, explore
                      the world, and use powerful intelligence to do more with
                      iPhone than ever before.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}

          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://www.androidgreek.com/wp-content/uploads/2020/12/Download-Vivo-Y12s-Stock-Wallpaper-on-any-Android-device-FHD-Quality.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      VIVO PRO
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Create extraordinary for consumers with technology and
                      fashion at all times.Mobile phone products It includes the
                      latest vivo products where you can buy your own phone and
                      help you learn more about your smartphone.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}

          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image="https://tse1.mm.bing.net/th?id=OIP.WtJc6SZqvAb7a66uNbgbygHaEo&pid=Api&P=0&h=180"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Samsung Fold 3
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Create extraordinary for consumers with technology and
                      fashion at all times.Mobile phone products It includes the
                      latest vivo products where you can buy your own phone and
                      help you learn more about your smartphone.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
