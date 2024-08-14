const isProd = process.env.NODE_ENV === 'production';

export default {
  assetPrefix: isProd ? '/mtm6407-static-site-your-github-username/' : '',
  basePath: isProd ? '/mtm6407-static-site-your-github-username' : '',
};
