import { Express } from "express";
const fs = require("fs");
const path = require("path");

function useRouter(app: Express) {
  const routesPath = path.join(__dirname);

  function loadRouters(dir: string) {
    fs.readdirSync(dir).forEach((file: any) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // 如果是文件夹，递归调用
        loadRouters(fullPath);
      } else if (file.endsWith(".routes.ts")) {
        // 如果是 router.ts 文件，加载路由
        const router = require(fullPath);
        const routerName = path.basename(file, ".routes.ts");

        app.use(`/api/${routerName}`, router.default || router);
      }
    });
  }

  // 从根目录开始加载路由
  loadRouters(routesPath);
}

export default useRouter;
