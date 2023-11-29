const { createApp } = require('./app');
const { appDataSource } = require('./api/models/dataSource');

const startServer = async () => {
  const app = createApp();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, async () => {
    await appDataSource
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((error) => {
        console.error('Error during Data Source initialization', error);
      });
    console.log(`Listening to request on 127.0.0.1:${PORT}`);
  });
};

startServer();