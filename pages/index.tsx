import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "../src/Copyright";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ minWidth: 275, maxWidth: 375, borderRadius: 3, mb: 2 }}>
          <CardContent>
            <CardMedia
              sx={{ borderRadius: 3 }}
              component="img"
              image="image-qr-code.png"
              alt="QR code to frontendMentor.io"
            ></CardMedia>
            <Typography
              sx={{ my: 3, paddingX: 2, fontSize: 24, fontWeight: 700 }}
              variant="h1"
              component="h1"
              align="center"
            >
              Improve your front-end skills by building projects
            </Typography>
            <Typography
              sx={{
                mb: 1.5,
                paddingX: 4,
                fontSize: 15,
                fontWeight: 400,
                lineHeight: 1,
              }}
              color="text.secondary"
              align="center"
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Typography>
          </CardContent>
        </Card>
        <Copyright />
      </Box>
    </Container>
  );
}
