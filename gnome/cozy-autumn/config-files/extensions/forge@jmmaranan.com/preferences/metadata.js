var developers = Object.entries([
  {name:"Jose Maranan", email:"jmmaranan@gmail.com"},
  {name:"jmmaranan", email:"jmmaranan@gmail.com"},
  {name:"Benny Powers", email:"web@bennypowers.com"},
  {name:"Ted M Lin", email:"tedmlin@gmail.com"},
  {name:"Juarez Rudsatz", email:"juarezrudsatz@movida.com.br"},
  {name:"Heimen Stoffels", email:"vistausss@fastmail.com"},
  {name:"Craig Gross", email:"craig@c-gross.net"},
  {name:"Grant Ammons", email:"gammons@gmail.com"},
  {name:"William Roy", email:"wroy@proton.me"},
].reduce((acc, x) => ({ ...acc, [x.email]: acc[x.email] ?? x.name }), {})).map(([email, name]) => name + ' <' + email + '>')
