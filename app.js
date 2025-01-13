import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import mainRoutes from './routes/mainRoutes.js';
import bodyParser from 'body-parser';

const app = express();

// Middleware dla parsera formularzy
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// view settings (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(express.static('public'));

// routes
app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});