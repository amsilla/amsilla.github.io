# The install file for plate.
# To get this, pop open a BASH terminal and type in the command below:
#curl https://amsilla.github.io/install.sh >> install.sh && bash install.sh
echo "The Plate installer has been installed."
unalias plate
curl https://amsilla.github.io/plate.sh >> plate.sh # > ls || plate.sh
chmod +x plate.sh
alias plate='./plate.sh'
rm install.sh
echo "Plate has been installed and will run by the command 'plate'"
