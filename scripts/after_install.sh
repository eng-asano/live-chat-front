#!/bin/bash

cd /var/www/live-chat

sudo unzip build.zip
/usr/bin/pm2 start /usr/bin/yarn --name "live-chat" -- start --cwd /var/www/live-chat
/usr/bin/pm2 save
