const [addNums, addManyNums] = require("./phase-1");


function addNums10Timing(increment) {
  let newArr = [];
  start = Date.now();
  for (let i = 1, j = increment; i <= 10; i++, j += increment) {
    startTime = Date.now();
    newArr.push(addNums(j));
    endTime = Date.now();

    console.log(endTime - startTime);
  }

  console.log(`total: ${Date.now() - start}ms`)
}


function addManyNums10Timing(increment) {
  let newArr = [];
  start = Date.now();
  for (let i = 1, j = increment; i <= 10; i++, j += increment) {
    startTime = Date.now()
    newArr.push(addManyNums(j));
    endTime = Date.now()

    console.log(endTime - startTime);
  }

  console.log(`total: ${Date.now() - start}ms`)
}


addNums10Timing(1000000);



console.log("\n***********\n");


addManyNums10Timing(5000);

// results can be viewed at google sheets: "https://docs.google.com/spreadsheets/d/1_s71ki7pD6Neiv1gF0cntf6tdvMI2BYFSc7rcBgSHRE/edit#gid=0"