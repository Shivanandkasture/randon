
const printDate = function printDate(){
        const date = new Date();
        const n = date.getDate();
        console.log('Date: ' + n);
}


const printMonth = function printDate(){
    const month = new Date() ;
    const m = month.getMonth() + 1;
    console.log("Current Month : "+m);
}


const getBatchInfo  = function getBatchInfo() {
    
    console.log("Radon, Week : 3, Day : 17, the topic for today is Nodejs module system" );
    
}

module.exports.Date = printDate();
module.exports.month = printMonth();
module.exports.info = getBatchInfo();