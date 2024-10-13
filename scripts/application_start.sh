yarn build
pm2 start yarn --name "next-app" -- start
pm2 save