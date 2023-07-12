export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        name:"signup",
        path:"/user/SignUp",
        component: "./User/SignUp"
      }
    ],
  },
  {
    path:"/account",
    routes: [
      {
        name: 'settings',
        path: '/account/settings',
        component: './User/Settings',
      },
    ]
  },
  {
    path: '/product',
    component: "@/pages/Product"
  },
  
  {
    path: '/product',
    name: 'Product',
    icon: 'smile',
    // component: '@/pages/Jokes',
    // hideInMenu: true,
  },
  { path: "/", redirect: "/product" },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
