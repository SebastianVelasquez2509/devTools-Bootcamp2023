const drawX = (tamano) => {
    
    if (tamano % 2 === 0) {
      tamano++;
    }
    
    for (let i = 0; i < tamano; i++) {
      let jsv = "";
      
      for (let x = 0; x < tamano; x++) {
        if (i === x || i + x === tamano - 1) {
          jsv += "* ";
        } else {
          jsv += "  ";
        }
      }
      console.log(jsv);
    }
  }
  
  drawX(5);
 

  
  
  
  
  
  
  