const trim = function Trim(){
        const text = "   FunctionUP   ";
        console.log(text);
        const result = text.trim();
        console.log(result);

}
//trim();

const LowerCase = function changetoLowerCase(){
    const text = "SHIVANANDKASTURE";
    console.log(text);
    const result = text.toLowerCase();
    console.log(result);
}
//LowerCase();

const UpperCase = function  changeToUpperCase(){
    const text = "shivanandkasture";
    console.log(text);
    const result = text.toUpperCase();
    console.log(result);
}
//UpperCase();

module.exports.trim = trim;
module.exports.LowerCase = LowerCase();
module.exports.UpperCase = UpperCase();