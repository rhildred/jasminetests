export function hello(){
    return "hello";
}

if(import.meta.main){
    console.log(`hello() returns ${hello()}`);
}