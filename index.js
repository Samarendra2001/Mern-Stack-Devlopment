const http = require('http');// this is for server
const fs = require('fs');// this is for filesystem

const index = fs.readFileSync('index.html', 'utf-8');//reading that html file
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));//reading that data files
const products = data.products; // to get the products from data file using data.products

const server = http.createServer((req, res) => { /*  Server Created */
  console.log(req.url, req.method);


  //const id = req.url.split('/')=if we do console.log then it will give us 
 // an array with ['','product','1'] and we need that 1for id and this 1 is in index 2
 //so that's why i hv used [2] after split
  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]//this is for product id one by one like 1,2,3,4
    const product = products.find(p=>p.id===(+id))//it will fetch the product one by one 
    console.log(product)
    res.setHeader('Content-Type', 'text/html');
          let modifiedIndex = index.replace('**title**', product.title)
          .replace('**url**', product.thumbnail)
          .replace('**price**', product.price)
          .replace('**rating**', product.rating)
          res.end(modifiedIndex);
          return;
  }
// the above code is for products like if the url starts with (/product) then it will show the result
//   '/product':
//       res.setHeader('Content-Type', 'text/html');
//       let modifiedIndex = index.replace('**title**', product.title)//replacing one with another 
//       .replace('**url**', product.thumbnail)//which is there in data.json file
//       .replace('**price**', product.price)
//       .replace('**rating**', product.rating)
//       res.end(modifiedIndex);
//       break;

// header settings with switch case like if we type url with / , /api, and default

  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.end(index);
      break;
    case '/api':
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      break;

    default:
      res.writeHead(404);
      res.end();
  }

  console.log('server started  ');
  //   res.setHeader('Dummy', 'DummyValue');

  //
});

server.listen(8080);
// we need to provide a server location as we used to get in react ,port 3000
//similarly in node it will be 8080