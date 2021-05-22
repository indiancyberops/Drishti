
#colour section
red='\033[1;31m'
rset='\033[0m'
grn='\033[1;32m'
ylo='\033[1;33m'
#script coding starts
clear
echo " "
echo " "
echo "
 ##::::'##:'########::'########:::::'###::::'########:'#######
 ##:::: ##: ##.... ##: ##.... ##:::'## ##:::... ##..:: ##.....
 ##:::: ##: ##:::: ##: ##:::: ##::'##:. ##::::: ##:::: ##:::::
 ##:::: ##: ########:: ##:::: ##:'##:::. ##:::: ##:::: #######
 ##:::: ##: ##.....::: ##:::: ##: #########:::: ##:::: ##.....
 ##:::: ##: ##:::::::: ##:::: ##: ##.... ##:::: ##:::: ##:::::
. #######:: ##:::::::: ########:: ##:::: ##:::: ##:::: #######
:.......:::..:::::::::........:::..:::::..:::::..:::::........

"|lolcat
echo " "
echo " "
sleep 5.0
clear
echo -e "$red  ▰▱▱▱▱▱▱ checking..$rset"
sleep 0.8
clear
echo -e "$red  ▰▰▱▱▱▱▱ checking..$rset"
sleep 0.8
clear
echo -e "$red  ▰▰▰▱▱▱▱ checking..$rset"
sleep 0.8
clear
echo -e "$red  ▰▰▰▰▱▱▱ checking..$rset"
sleep 0.8
clear
echo -e "$ylo  ▰▰▰▰▰▱▱ checking..$rset"
sleep 0.8
clear
echo -e "$ylo  ▰▰▰▰▰▰▱ checking..$rset"
sleep 0.8
clear
echo -e "$ylo  ▰▰▰▰▰▰▰ checking..$rset"
sleep 0.8
clear
echo " "
echo " "
echo -e "$grn       Updating the Drishti please wait.... $ylo"
echo " "
echo " "
sleep 2.0
cd $HOME
rm -rf Drishti
git clone https://github.com/INDIANCYBEROPS/Drishti
clear
echo " "
echo -e "$grn      Drishti has been updated check it now...$rset"
sleep 3.0
echo " "
cd $HOME
cd Drishti
node main.js

