#!/bin/bash

cd /var/www/live-chat && \

m2 start yarn --name "live-chat" -- start && \
pm2 save