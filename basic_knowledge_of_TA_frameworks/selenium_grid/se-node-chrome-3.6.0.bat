set SERVER_VERSION=3.6.0
set HUB_PORT=5557
set REGISTER_IP=localhost:4444
set CHROME_DRIVER=./selenium_grid/chromedriver.exe
java -Dwebdriver.chrome.driver=%CHROME_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=chrome,version=81,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%