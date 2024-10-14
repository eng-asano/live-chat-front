#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc

nvm install 20.17.0
node -v

npm install -g yarn
yarn -v
# yarn install
# yarn build
# pm2 start yarn --name "live-chat" -- start
# pm2 save