# up mongo db
docker-compose up -d

# install node modules
cd backend
npm install

# run seed
cd seeders
node createAdmin.js

