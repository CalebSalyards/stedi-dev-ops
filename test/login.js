const fetch = require('node-fetch');

const login = async ()=>{
const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "fake@addresses.work",
    password:"STbluebell1!"
  })
})
};

export {login};