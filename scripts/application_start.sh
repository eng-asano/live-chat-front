#!/bin/bash

cd /var/www/live-chat

npm install -g pm2
pm2 start yarn --name "live-chat" -- start
pm2 save