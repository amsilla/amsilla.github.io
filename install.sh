# The install file for plate.
# To get this, pop open a BASH terminal and type in the command below:
#curl https://amsilla.github.io/install.sh >> install.sh && bash install.sh
echo "The Plate installer has been installed."
echo "Please type the below command into the terminal"
echo "-------------------"
echo "unalias plate"
echo "-------------------"
echo "If it says that the plate alias is not found, it does not matter"
echo "Press enter to begin the installation"
read
curl https://amsilla.github.io/plate.sh >> plate.sh
chmod +x plate.sh
echo "One last step. Please type the below command into the terminal."
echo "-----------------------"
echo "alias plate='./plate.sh'"
echo "------------------------"
echo "Press enter to continue"
read
echo "The installation has finished!"
