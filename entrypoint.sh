#!/bin/sh

# Starts varnish
varnishd -a :3000 -f /etc/varnish/default.vcl -s malloc,512m &


echo "-------------------- NOTE --------------------"
echo ""
echo "SERVING CACHED PROJECT ON http://localhost:3000."
echo ""
echo "-------------------- NOTE --------------------"

# Starts API
npm start
