const decode = input => {
    const step1 = input.split('');
    const step2 = step1.map(char => (char === '.' ? 1 : 0));
    const step3 = [];

    let currentGroup = '';
    for (const bit of step2) {
      currentGroup += bit.toString();
      if (bit === 1) {
        step3.push(parseInt(currentGroup, 2));
        currentGroup = '';
      }
    }
  
    const step4 = step3.map((num, i) => [String.fromCharCode(num), i]);
    const step5 = step4.sort((a, b) => a[1] - b[1]);
    const step6 = step5.map(pair => pair[0]);
    const step7 = step6.join('');
  
    return step7;
  };
  
  const encodedString = encode("Save Code");
  console.log(encodedString);
  const decodedString = decode(encodedString);
  console.log(decodedString);
  