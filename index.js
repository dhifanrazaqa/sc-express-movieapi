const express = require('express');

const router = require('./routers');
const NotFoundMiddleware = require('./middleware/not-found');
const ErrorHandlerMiddleware = require('./middleware/error-handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(NotFoundMiddleware);
app.use(ErrorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
