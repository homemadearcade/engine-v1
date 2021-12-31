#!/bin/bash

npm run build

# Stop all servers and start the server as a daemon
forever stopall
forever start ./server/server.js