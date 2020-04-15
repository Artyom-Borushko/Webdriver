set SERVER_VERSION=3.6.0
set HUB_PORT=5558
set REGISTER_IP=localhost:4444
set GECKO_DRIVER=./selenium_grid/geckodriver.exe
java -Dwebdriver.chrome.driver=%GECKO_DRIVER% -jar selenium-server-standalone-%SERVER_VERSION%.jar -role node -hub http://%REGISTER_IP%/grid/register -browser "browserName=firefox,version=75,maxinstance=5,platform=WINDOWS" -port %HUB_PORT%