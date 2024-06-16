import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const blogs = [
  {
    date: 'Oct 6, 2022',
    src: '/imgs/blog/1.webp',
    time: '7 min read',
    title: '他 23 歲月領 14 萬！ MixerBox 如何煉就超狂全端開發者，讓新鮮人就能主導新產品線開發？',
    url: 'https://medium.com/mixerboxinc/howard-tang-9c1fc93f38ee',
  },
];

export default function Blog() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        padding: '72px 24px',
      }}
    >
      <Box sx={{ maxWidth: '850px', width: '100%' }}>
        <Typography
          sx={{ color: 'text.secondary', marginBottom: '32px', width: '100%' }}
          variant="T14B"
        >
          BLOG
        </Typography>
      </Box>

      <Grid
        container
        spacing={6}
        sx={{
          left: '-48px',
          margin: 'auto',
          maxWidth: '850px',
          position: 'relative',
          top: '-24px',
          width: '100%',
        }}
      >
        {blogs.map(({ date, src, time, title, url }) => (
          <Grid item key={title} md={6} xs={12}>
            <Card
              onClick={() => window.open(url, '_blank', 'noopener')}
              sx={{
                '&:hover': { '& img': { transform: 'scale(1.2)', transition: 'transform 0.5s' } },
                bgcolor: '#FFFFFF14',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <Box sx={{ height: '200px', overflow: 'hidden' }}>
                <CardMedia alt={title} component="img" height={200} image={src} />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="T24B">
                  {title}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary" variant="T14M">
                    {date}
                  </Typography>

                  <Typography color="text.secondary" variant="T14M">
                    {time}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
