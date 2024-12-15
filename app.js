import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import mainRoutes from './routes/mainRoutes.js';

const PORT = process.env.PORT || 8080;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// view settings (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});