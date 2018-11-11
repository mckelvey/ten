export default {
  basePath: '/my-decade/',
  getSiteData: () => ({
    title: 'My Decade',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  siteRoot: 'https://mckelvey.github.io',
}
