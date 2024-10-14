#!/bin/bash

cd /var/www/live-chat

~/.nvm/versions/node/v20.18.0/bin/pm2 start yarn --name "live-chat" -- start
~/.nvm/versions/node/v20.18.0/bin/pm2 save
