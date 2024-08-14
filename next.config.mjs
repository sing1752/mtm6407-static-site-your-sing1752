const isProd = process.env.NODE_ENV === 'production';


export default {
  output: 'export',
  images: {
    unoptimized: true,  // Necessary for static export
  },
  basePath: isProd ? '/mtm6407-static-site-sing1752' : '',
  trailingSlash: true,
};
