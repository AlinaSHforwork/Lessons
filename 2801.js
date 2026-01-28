console.log("lesson 28.01.2026")

function katyaThinking(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if(success){
                resolve("Katya finished thinking");
            } else {
                reject("Katya encountered an error while thinking");
            }
        }, 2000);
    });
}

try{

    console.log("Katya starts thinking...");
    katyaThinking().then((message) => {
        console.log(message);
    }).catch((error) => {
        console.error(error);
    });
    //throw new Error("Katya have error");
} catch(err){
    console.error("An error occurred:", err);
} finally{
    console.log("Katya have sucsess")
}