/// <reference types="vite/client" />

declare module "virtual:generated-pages" {
  import type { ComponentType } from "react";

  interface Route {
    path: string;
    component: ComponentType<any>;
  }

  const routes: Route[];
  export default routes;
}