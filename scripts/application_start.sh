#!/bin/bash

cd /var/www/live-chat

# export NVM_DIR="$HOME/.nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# source ~/.bashrc

# nvm install 20.17.0

# npm install -g yarn
# yarn install

# npm install -g pm2

~/.nvm/versions/node/v20.18.0/bin/pm2 start yarn --name "live-chat" -- start
~/.nvm/versions/node/v20.18.0/bin/pm2 save