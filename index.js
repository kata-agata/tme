const Runner = require('./runner');
const runner = new Runner();


// helper function to test if works.
//await must be in async function
const run = async()=>{
  await runner.collectFiles(process.cwd());//process.cwd returns current directory
  console.log(runner.testFiles);
}
run();
