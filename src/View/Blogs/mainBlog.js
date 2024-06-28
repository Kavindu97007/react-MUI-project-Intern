// // src/pages/Blogs.js
// import React from 'react';
// import { Grid, Container } from '@mui/material';
// import BlogCard from '../../Components/card';

// const Blogs = () => {
//   const blogPosts = [
//     { title: "Mobile Banking App Development", description: "Our Client Wanted Our Team to Develop A Mobile Banking Service...", time: "25 mins ago", comments: 6 },
//     { title: "AI Based Cloud Document", description: "Our Client Wanted Our Team to Develop A Cloud Solution That Uses AI...", time: "25 mins ago", comments: 6 },
//     { title: "Relational Database In Testing", description: "Our Client Wanted Our Team to Develop A Database Solution For Their...", time: "25 mins ago", comments: 6 },
//   ];

//   return (
//     <Container>
//       <Grid container spacing={4}>
//         {blogPosts.map((post, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <BlogCard {...post} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Blogs;
