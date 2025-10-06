import express from 'express';
import userRouter from './routes/user.js';
import sequelize from './config/db.js';

const app = express();
app.use(express.json());

app.use('/api/users', userRouter);

sequelize.sync().then(() => {
    console.log('数据库连接成功');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`iACG社区后端已启动，端口：${PORT}`);
});
