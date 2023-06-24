/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs'; 
import inquirer from 'inquirer';
import qr from "qr-image";
inquirer
  .prompt([
    /* Pass your questions in here */
    {
    message: "Text which has to be converted into QR code.",
    name:  "URL"
}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    fs.writeFile("message.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });;

      var qr_svg = qr.image(url);
      qr_svg.pipe(fs.createWriteStream('qr_img.png'));
       
    //   var svg_string = qr.imageSync(answers, { type: 'svg' });

  })
  .catch((error) => {
    if (error.isTtyError) {
       "Prompt couldn't be rendered in the current environment"
    
    } else {
       "Something else went wrong"
    }
  });

