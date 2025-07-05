import React, { useEffect, useState } from 'react';

interface TradeItem {
  id: string;
  name: string;
  value: number;
}

interface Trade {
  id: string;
  from: string;
  to: string;
  items: TradeItem[];
  status: string;
  createdAt: string;
  history: any[];
}

const Trading: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrades = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/trades');
      if (!res.ok) throw new Error('Failed to fetch trades');
      const data = await res.json();
      setTrades(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id: string, action: 'accept' | 'decline') => {
    try {
      const res = await fetch(`/api/trades/${id}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      if (!res.ok) throw new Error('Failed to update trade');
      await fetchTrades();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTrades();
  }, []);

  if (loading) return <div>Loading trades...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Trading Hub</h2>
      {trades.length === 0 ? (
        <div>No trades available.</div>
      ) : (
        <ul>
          {trades.map(trade => (
            <li key={trade.id} style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
              <div><b>From:</b> {trade.from} <b>To:</b> {trade.to}</div>
              <div><b>Status:</b> {trade.status}</div>
              <div><b>Items:</b> {trade.items.map(item => `${item.name} (${item.value})`).join(', ')}</div>
              <div><b>Created:</b> {new Date(trade.createdAt).toLocaleString()}</div>
              <div>
                {trade.status === 'pending' && (
                  <>
                    <button onClick={() => handleAction(trade.id, 'accept')}>Accept</button>
                    <button onClick={() => handleAction(trade.id, 'decline')}>Decline</button>
                  </>
                )}
              </div>
              <div>
                <b>History:</b>
                <ul>
                  {trade.history.map((h, i) => (
                    <li key={i}>{h.action} at {new Date(h.at).toLocaleString()}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchTrades}>Refresh</button>
    </div>
  );
};

export default Trading; 