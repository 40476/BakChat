#!/bin/bash
echo "PLEASE CHECK AND UPDATE YOUR 'SCONFIG.JSON' IT MAY CONTAIN INCORRECT SETTINGS"



sleep 10
rm BAKCHAT.zip
wait -n
wget https://github.com/40476/BakChat/raw/main/BAKCHAT.zip
wait -n
unzip -o BAKCHAT.zip
wait -n
npm install
npm start