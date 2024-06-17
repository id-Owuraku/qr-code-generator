import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message: "Type in your URL",
    name: "URL",
},
  ])
  .then((answers) => {
    const url = answers.URL;
    let qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qrcode.png"));
    fs.writeFile("url-log.txt",url, (err, result) =>{
        if (err){
            console.log(err)
            return
        }
    })
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log("Something else went wrong")
    }
  });


