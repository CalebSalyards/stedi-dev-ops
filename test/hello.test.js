const {hello} = require('./hello.js')

it('Should print hello',()=>{

    const helloRespone = hello();
    expect(helloRespone).toBe('hello');
});