let data =
`1/1/2001: 2.5 hrs
1/2/2001: 5 hrs
1/3/2001: 0.25 hrs
1/4/2001: 4.5 hrs
1/5/2001: 4.667 hrs
1/1/2001: 2.5 hrs
1/2/2001: 5 hrs
1/3/2001: 0.25 hrs
1/4/2003: 4.5 hrs
1/5/2004: 4.667 hrs
1/1/2004: 2.5 hrs
1/2/2005: 5 hrs
1/3/2005: 0.25 hrs
1/4/2005: 4.5 hrs
1/5/2005: 4.667 hrs
1/1/2005: 2.5 hrs
1/2/2006: 5 hrs
1/3/2006: 0.25 hrs
1/4/2006: 4.5 hrs
1/5/2006: 4.667 hrs`;

let filtered = data.split('\n')
  .filter(line => line.split(': ')[0].split('/')[2] === '2005')
  .map(line => line.split(' ')[1])
  .reduce((total, hours) => total += parseFloat(hours), 0)

// Sum of all hours worked in 2005 
console.log(filtered);