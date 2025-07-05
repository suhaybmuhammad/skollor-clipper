# Install required dependencies
npm install tensorflow-lite
npm install pg-promise
npm install redis
npm install ws

# Set up database
psql -U postgres -f src/Database/schema.sql

# Start services
systemctl start redis
systemctl start postgresql