# EcoCatch Tours Boat Tracker
## Deployment scripts

## Instructions

# 1. Build images
docker-compose -f docker-compose.yaml build

# 2. Start database
docker-compose up -d postgres_db

# 3. Run database scripts manually. 

Run the following scripts from pgAdmin or sql commandline
3.1. ../db/boat_tracker_db_ddl.sql
3.2. ../db/boat_guide_dml.sql

# 4. Start Boat Tracker API
docker-compose up -d api

# 4. Start Web App
docker-compose up -d react-web

# 5. Health check
Database is exposed outside on port 6000 (localhost:6000)
API is published on http://localhost:5000/
Web is available on http://localhost:3000/
Please note that ports needs to be opened up for exposing these urls to public.
