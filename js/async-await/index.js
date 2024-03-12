const axios = require('axios')

async function getFact() {
  const url = 'https://api.aakhilv.me/fun/facts';
  const result = await axios.get(url);
  return result.data[0];
};

async function main() {
  //use promise.all for greatest optimization
  console.time('getFactTimer');
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(getFact());
  }
  const result = await Promise.all(promises);
  for (let i = 0; i < 5; i++) {
    console.log(`result no.${i+1}`, result[i]);
  }
  console.timeEnd('getFactTimer');


  // Using for loop 
  // console.time('getFactTimer');
  // for (let i = 1; i <= 5; i++) {
  //   const result = await getFact();
  //   console.log(`result no.${i}`, result);
  // }
  // console.timeEnd('getFactTimer');

  // Async await
  // console.log('Begin');
  // const result = await getFact();
  // console.log('result', result);
  // const secondResult = await getFact();
  // console.log('second result', secondResult);
  // const thirdResult = await getFact();
  // console.log('third result', thirdResult);
  // const fourthResult = await getFact();
  // console.log('fourth result', fourthResult);
  // const fifthResult = await getFact();
  // console.log('fifth result', fifthResult);
  // console.log('End');

  // callback HELL!
  // getFact().then((result) => {
  //   console.log('result:', result);
  //   getFact().then((secondResult) => {
  //     console.log('second result:', secondResult);
  //     getFact().then((thirdResult) => {
  //       console.log('third result:', thirdResult);
  //       getFact().then((fourthResult) => {
  //         console.log('fourth result:', fourthResult);
  //         getFact().then((fifthResult) => {
  //           console.log('fifth result:', fifthResult);
  //           console.log('End');
  //         });
  //       });
  //     });
  //   });
  // });
};

main()