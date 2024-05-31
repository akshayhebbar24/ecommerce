import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import amazonEchoImage from './Amazon.jpg';
import Iphone from './Iphone.jpg';
import Iphone1 from './Nothing.jpg';
import Iphone2 from './speaker.jpg';
import Footer from './Footer';
function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Apple Iphone",
      description: "This is a great product with excellent features and benefits.",
      price: "₹999",
      brand: "Brand A",
      image: Iphone
    },
    {
      id: 2,
      title: "Amazon Echo",
      description: "This is another great product that offers amazing value.",
      price: "₹1499",
      brand: "Brand B",
      image: amazonEchoImage
    },
    {
      id: 3,
      title: "Nothing",
      description: "A top-notch product with high-quality materials and performance.",
      price: "₹1999",
      brand: "Brand C",
      image: Iphone1
    },
    {
      id: 4,
      title: "Speaker",
      description: "An affordable product with essential features for everyday use.",
      price: "₹499",
      brand: "Brand D",
      image:Iphone2
    },
  ];

  return (
    <Container sx={{ padding: 2 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '200px', md: '300px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          textAlign: 'center',
          mb: 4,
          backgroundColor: '#f0f0f0',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', fontSize: { xs: 'h4.fontSize', md: 'h3.fontSize' } }}>
          Welcome to Our E-commerce Store ShopEase
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mt: 2, fontSize: { xs: 'h6.fontSize', md: 'h5.fontSize' } }}>
          Discover amazing products and great deals!
        </Typography>
      </Box>

      {/* Promotional Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontSize: { xs: 'h5.fontSize', md: 'h4.fontSize' } }}>
          Big Summer Sale!
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Save up to 50% on selected items.
        </Typography>
        <Typography variant="h6" component="div" color="primary" sx={{ fontWeight: 'bold' }}>
          Shop Now
        </Typography>
      </Box>

      {/* Featured Products Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center', fontSize: { xs: 'h5.fontSize', md: 'h4.fontSize' } }}>
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ maxWidth: 345, mx: 'auto' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontSize: { xs: 'h6.fontSize', md: 'h5.fontSize' } }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.brand}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontSize: { xs: 'h5.fontSize', md: 'h4.fontSize' } }}>
          Why Shop With Us?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We offer the best products at the best prices. Enjoy fast shipping and excellent customer service.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
