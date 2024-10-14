#!/bin/bash

cd /var/www/live-chat

~/.nvm/versions/node/v20.18.0/bin/pm2 stop live-chat || true
~/.nvm/versions/node/v20.18.0/bin/pm2 delete live-chat || true