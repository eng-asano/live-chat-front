#!/bin/bash

cd /var/www/live-chat && \

pm2 start yarn --name "live-chat" -- start && \
pm2 save