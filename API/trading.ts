import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Mock trade data
let trades = [
  {
    id: uuidv4(),
    from: 'user1',
    to: 'user2',
    items: [{ id: 'item1', name: 'Sword', value: 100 }],
    status: 'pending',
    createdAt: new Date().toISOString(),
    history: []
  }
];

// List all trades
router.get('/trades', (req: Request, res: Response) => {
  try {
    res.json(trades);
  } catch (err) {
    console.error('Error listing trades:', err);
    res.status(500).json({ error: 'Failed to list trades' });
  }
});

// Create a new trade
router.post('/trades', (req: Request, res: Response) => {
  try {
    const { from, to, items } = req.body;
    const newTrade = {
      id: uuidv4(),
      from,
      to,
      items,
      status: 'pending',
      createdAt: new Date().toISOString(),
      history: []
    };
    trades.push(newTrade);
    res.status(201).json(newTrade);
  } catch (err) {
    console.error('Error creating trade:', err);
    res.status(500).json({ error: 'Failed to create trade' });
  }
});

// Accept or decline a trade
router.post('/trades/:id/action', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { action } = req.body; // 'accept' or 'decline'
    const trade = trades.find(t => t.id === id);
    if (!trade) return res.status(404).json({ error: 'Trade not found' });
    if (trade.status !== 'pending') return res.status(400).json({ error: 'Trade already processed' });
    if (action === 'accept') {
      trade.status = 'accepted';
      trade.history.push({ action: 'accepted', at: new Date().toISOString() });
    } else if (action === 'decline') {
      trade.status = 'declined';
      trade.history.push({ action: 'declined', at: new Date().toISOString() });
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }
    res.json(trade);
  } catch (err) {
    console.error('Error updating trade:', err);
    res.status(500).json({ error: 'Failed to update trade' });
  }
});

// Get trade history
router.get('/trades/:id/history', (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const trade = trades.find(t => t.id === id);
    if (!trade) return res.status(404).json({ error: 'Trade not found' });
    res.json(trade.history);
  } catch (err) {
    console.error('Error getting trade history:', err);
    res.status(500).json({ error: 'Failed to get trade history' });
  }
});

export default router; 