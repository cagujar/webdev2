    var result = 0;
    for ( var a = 2 ; a < process.argv.length ; a++)  
        result += Number(process.argv[a])
 
    console.log(result);

