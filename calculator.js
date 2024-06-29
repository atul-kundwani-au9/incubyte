

function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    numbers = numbers.replace(/\n/g, delimiter);
  
    const nums = numbers.split(delimiter).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);
  
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  
  
  