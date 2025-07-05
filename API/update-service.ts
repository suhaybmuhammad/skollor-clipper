import express from 'express';
import WebSocket from 'ws';
import { verify } from 'jsonwebtoken';

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

// Connected clients
const clients = new Map();

// Authentication middleware
const authenticateToken = (token: string) => {
    try {
        return verify(token, process.env.JWT_SECRET!);
    } catch (err) {
        return null;
    }
};

// WebSocket connection handler
wss.on('connection', (ws, req) => {
    const token = req.url?.split('token=')[1];
    const user = token ? authenticateToken(token) : null;
    
    if (!user) {
        ws.close();
        return;
    }
    
    clients.set(ws, user);
    
    ws.on('close', () => {
        clients.delete(ws);
    });
});

// Update notification endpoint
app.post('/update/notify', (req, res) => {
    const update = {
        type: 'update',
        timestamp: new Date().toISOString(),
        version: req.body.version,
        changes: req.body.changes
    };
    
    // Broadcast to all connected clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(update));
        }
    });
    
    res.status(200).json({ success: true });
});

export { app, wss };