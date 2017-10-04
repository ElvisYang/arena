import bodyParser from 'body-parser';
import express from 'express';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/*', ssr);

app.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
