// console.log(require)
// setInterval(()=>{console.log("hello world!")},1000)



// kinda slow way to define the function and then exports it :

const sayHi=(name)=>{
    console.log(`hello ${name}`);
}

//module.exports=sayHi

export default sayHi





// multiple functions 
export function sayHi() {
    console.log('Hi!');
  }
  
export function sayBye() {
    console.log('Bye!');
  }
  