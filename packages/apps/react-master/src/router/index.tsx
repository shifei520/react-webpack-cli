import React from "react";
import { RouteObject } from "react-router-dom";

export interface ExtrabizObject {
  title?: string;
  children?: Array<ZHRouter>;
}

export type ZHRouter = RouteObject & ExtrabizObject;

export const routes: Array<ZHRouter> = [
  {
    path: "/",
    title: "首页",
    children: [
      {
        path: "",
        element: <div>feeds</div>,
        title: "推荐",
      },
      {
        path: "follow",
        element: <div>follow</div>,
        title: "关注",
      },
      {
        path: "hot",
        element: <div>hot</div>,
        title: "热门",
      },
      {
        path: "zvideo",
        element: <div>zvideo</div>,
        title: "视频",
      },
    ],
  },
  {
    path: "/education",
    element: <div>education</div>,
    title: "教育",
  },
  {
    path: "/question/waiting",
    element: <div>waiting</div>,
    title: "问答",
  },
  {
    path: "/explorer",
    element: <div>explorer</div>,
    title: "发现",
  },
];
