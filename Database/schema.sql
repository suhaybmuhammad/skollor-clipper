-- Real-time analytics tables
CREATE TABLE trade_history (
    id SERIAL PRIMARY KEY,
    trade_id VARCHAR(255),
    value DECIMAL(10,2),
    prediction DECIMAL(10,2),
    accuracy DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE server_metrics (
    id SERIAL PRIMARY KEY,
    server_id VARCHAR(255),
    population INT,
    performance_score DECIMAL(5,2),
    stability_score DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE market_analysis (
    id SERIAL PRIMARY KEY,
    item_id VARCHAR(255),
    current_value DECIMAL(10,2),
    predicted_value DECIMAL(10,2),
    confidence_score DECIMAL(5,2),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);