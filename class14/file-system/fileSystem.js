const txtService = require("./textService");

txtService.write("I want this text to be added to my txt file");
txtService.append("This is new line added in my text file  ");



console.log("==========This is the file content:==========");
txtService.read();