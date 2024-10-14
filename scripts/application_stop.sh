#!/bin/bash

# cd /var/www/live-chat

# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# source ~/.bashrc

# nvm install 20.17.0

# npm install -g pm2

~/.nvm/versions/node/v20.18.0/bin/pm2 stop live-chat || true
~/.nvm/versions/node/v20.18.0/bin/pm2 delete live-chat || true