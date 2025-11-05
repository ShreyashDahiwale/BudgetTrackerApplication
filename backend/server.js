import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';
import transactionRoutes from './src/routes/transactionRoutes.js';
import budgetRoutes from './src/routes/budgetRoutes.js';


import initialise from '../backend/app-utils/_initialise.js';
let config = null;
let server;

initialise.initialize((app), (err) => {
  if (err) { throw err; }
  else {
    config = Object.assign({}, global.gConfig);
    require('./app-utils/_expressify').expressify((app), (error) => {
      if (error) { throw error; }
      else {
        server = app.listen((process.env.PORT || config.server.port), () =>
          console.log('Running on port ' + (process.env.PORT || config.server.port))
        );
        server.timeout = 600000;
      }
    })
  }
});

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
  process.exit(1)
});

process.on('SIGTERM', () => {
  closeApp('SIGTERM');
});

process.on('SIGINT', () => {
  closeApp('SIGINT');
});

const closeApp = (event) => {
  console.info(event + ' signal received. Closing app.');
  server.close(() => {
    console.log('Http server closed.');
  });
  require('./app-utils/exitHandler');
  process.exit(0);
}

export const app = express();
// dotenv.config();



// const app = express();
// app.use(cors({ origin: true, credentials: true }));
// app.use(express.json());

// app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
// app.use('/api/auth', authRoutes);
// app.use('/api/transactions', transactionRoutes);
// app.use('/api/budgets', budgetRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`API listening on ${PORT}`));


