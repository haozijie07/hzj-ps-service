import express from "express";
import cors from "cors";

/* ---------------------------------- 环境配置 ---------------------------------- */
import dotenv from "dotenv";
dotenv.config();

/* -------------------------------- express示例 ------------------------------- */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------------------------- 响应中间件 --------------------------------- */
import responseMiddleware from "./middlewares/responseMiddleware";
app.use(responseMiddleware);

/* ----------------------------------- 路由 ----------------------------------- */
import useRouter from "./routes";
useRouter(app);

/* ---------------------------------- 启动服务 --------------------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
