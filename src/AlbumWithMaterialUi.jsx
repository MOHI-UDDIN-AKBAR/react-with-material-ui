import React from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Box } from "@mui/material";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const AlbumWithMaterialUi = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h5" sx={{ pl: 2 }}>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 10 }}>
        <Typography>
          <Typography variant="h2" align="center">
            Album layout
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
            sx={{ mt: 3 }}
          >
            Something short and leading about the collection below its contents,
            the creator,etc. Make it short and sweet, but not too short so folks
            don't simply skip over it entirely.
          </Typography>
          <Grid
            container
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
              align: "center",
              mt: 8,
            }}
          >
            <Grid item sx={{ mx: 2 }}>
              <Button variant="contained" size="large">
                MAIN CALL TO ACTION
              </Button>
            </Grid>
            <Grid item sx={{ mx: 2 }}>
              <Button variant="outlined" size="large">
                MAIN CALL TO ACTION
              </Button>
            </Grid>
          </Grid>
        </Typography>
      </Container>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: { xs: "90%", md: "80%", lg: "70%" },
          mx: "auto",
          mt: 4,
        }}
      >
        {array?.map((_, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                image="	https://source.unsplash.com/random"
                height="250"
                alt="album photo"
              ></CardMedia>
              <CardContent>
                <Typography variant="h4" align="left">
                  Heading
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="large"
                  marginTop="17px"
                  align="left"
                >
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" size="large" sx={{ mx: 2, mr: 3 }}>
                  VIEW
                </Button>
                <Button variant="text" size="large">
                  EDIT
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box component="footer" sx={{ maxWidth: 1, my: 12 }}>
        <Typography variant="h6" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          Copyright © 2022.
        </Typography>
      </Box>
    </>
  );
};

export default AlbumWithMaterialUi;
