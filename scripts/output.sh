echo "Removing old output" &&
rm -rf output &&
echo "creating new output" &&
mkdir output && 
echo "output deleted" &&
resumed render chrisreagle.json --theme jsonresume-theme-even --output output/pdf_output.html &&
resumed render chrisreagle.json --theme jsonresume-theme-even --output index.html 