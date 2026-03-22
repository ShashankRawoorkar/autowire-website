import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import contactRouter from './routes/contact.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactRouter);

// ─── Error handler ────────────────────────────────────────────────────────────
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[autowire] server listening on http://localhost:${PORT}`);
});
