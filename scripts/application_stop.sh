#!/bin/bash
pm2 stop live-chat || true
pm2 delete live-chat || true