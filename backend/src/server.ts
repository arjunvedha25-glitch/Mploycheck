import express from 'express';
import cors from 'cors';
import { loginUser, getUsers, createNewUser } from './data/controllers/user.controllers';
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', loginUser);
app.get('/api/users', getUsers);
app.post('/api/manage-users', createNewUser);

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
