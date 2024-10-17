#!/bin/bash

cd /var/www/live-chat

sudo unzip -o build.zip
/usr/bin/pm2 start /usr/bin/yarn --name "live-chat" -- start
/usr/bin/pm2 save
