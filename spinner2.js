process.stdout.write('hello from spinner1.js... \rheyyy\n');


const spin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  \n']
let delay = 300;
for (const x of spin) {
  setTimeout(() => {
    process.stdout.write(x);
  }, delay);
  delay += 200;

}