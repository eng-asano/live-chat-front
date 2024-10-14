#!/bin/bash

cd /var/www/live-chat && \

pm2 stop live-chat || true && \
pm2 delete live-chat || true