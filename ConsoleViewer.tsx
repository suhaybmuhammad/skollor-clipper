import React, { useState, useEffect } from 'react';

interface LogEntry {
    timestamp: string;
    level: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR';
    message: string;
    data?: any;
}

const ConsoleViewer: React.FC = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [filter, setFilter] = useState<string>('ALL');
    
    useEffect(() => {
        // Connect to WebSocket for real-time logs
        const ws = new WebSocket('wss://api.skollor.dev/console');
        
        ws.onmessage = (event) => {
            const log = JSON.parse(event.data);
            setLogs(prev => [...prev, log].slice(-1000));
        };
        
        return () => ws.close();
    }, []);
    
    return (
        <div className="console-viewer">
            <div className="console-header">
                <h1>Skollor Console</h1>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="ALL">All Logs</option>
                    <option value="DEBUG">Debug</option>
                    <option value="INFO">Info</option>
                    <option value="WARNING">Warning</option>
                    <option value="ERROR">Error</option>
                </select>
            </div>
            <div className="console-body">
                {logs
                    .filter(log => filter === 'ALL' || log.level === filter)
                    .map((log, index) => (
                        <div key={index} className={`log-entry ${log.level.toLowerCase()}`}>
                            <span className="timestamp">{log.timestamp}</span>
                            <span className="level">{log.level}</span>
                            <span className="message">{log.message}</span>
                            {log.data && (
                                <pre className="data">{JSON.stringify(log.data, null, 2)}</pre>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ConsoleViewer;