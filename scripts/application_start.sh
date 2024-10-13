cd /home/ec2-user/live-chat
yarn build
pm2 start yarn --name "next-app" -- start
pm2 save