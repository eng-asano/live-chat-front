#!/bin/bash

cd /var/www/live-chat

/usr/bin/pm2 start yarn --name "live-chat" -- start
/usr/bin/pm2 save
