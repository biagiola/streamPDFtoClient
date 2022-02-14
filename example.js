// Enter any texts ( User input)
process.stdin.on('data', data => {
  console.log(`You typed ${data.toString()}`);
  process.exit();
});
