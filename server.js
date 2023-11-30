const { createApp } = require('./app');
const { appDataSource } = require('./api/models/dataSource');

const startServer = async () => {
  const app = createApp();

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, '0.0.0.0', async () => {
    await appDataSource
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((error) => {
        console.error('Error during Data Source initialization', error);
      });
    console.log(`Listening to request on 0.0.0.0:${PORT}`);
  });
};

startServer();
