export function handleChange(e,set,state){
console.log(e.target.name);
let st = {...state};
st[e.target.name] = e.target.value;
set(st);
}