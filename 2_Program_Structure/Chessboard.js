size = 8;

for(let i = 0; i < size; i++){
  if(i % 2 === 0){
    character = " ";
    line = "";
    for(let j = 0; j < size; j++){
      line += character;
      if(character === " ") {
        character = "#";
      } else {
        character = " ";
      }
    }
    console.log(line)
    
  } else {
      character = "#";
      line = ""
        for(let j = 0; j < size; j++){
          line += character;
          if(character === " ") {
            character = "#";
          } else {
              character = " ";
            }
        }
    console.log(line);
    }
}
