// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"login","path":"/user/login","parentId":"1","id":"2"},"3":{"name":"signup","path":"/user/SignUp","parentId":"1","id":"3"},"4":{"path":"/account","parentId":"ant-design-pro-layout","id":"4"},"5":{"name":"settings","path":"/account/settings","parentId":"4","id":"5"},"6":{"path":"/product","parentId":"ant-design-pro-layout","id":"6"},"7":{"path":"/product","name":"Product","icon":"smile","parentId":"ant-design-pro-layout","id":"7"},"8":{"path":"*","layout":false,"id":"8"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__User__SignUp__index" */'@/pages/User/SignUp/index.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__User__Settings__index" */'@/pages/User/Settings/index.tsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__Product__index" */'@/pages/Product/index.tsx')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/home/tobit/codecave/afta_commerce_ui/src/.umi/plugin-layout/Layout.tsx')),
},
  };
}