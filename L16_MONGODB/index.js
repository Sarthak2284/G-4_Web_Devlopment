// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello World from L16_MONGODB/index.js');
// })

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'chitkara_0801';

async function run() {
    await client.connect();
    console.log('Connected to MongoDB server');
    const db = client.db(dbName);
    const user = [ {name: 'John Doe', age: 30, email: 'john@doe.com',rollNo : 101},
                   {name: 'Jane Smith', age: 25, email: 'jane@smith.com', rollNo : 102},
                   {name: 'Alice Johnson', age: 28, email: 'alice@johnson.com',rollNo : 103},
                   {name:'Bob Brown', age: 22, email: 'bob@brown.com', rollNo : 104},
                   {name: 'Ram Gopal', age: 22, email: 'ram@gopal.com', rollNo : 104}

     ];
    const collection = db.collection('users');

    // const insertResult = await collection.insertMany(user);
    // console.log('Inserted document:', insertResult);
    
     
    const findResult = await collection.find({}).toArray();
    console.log('Found documents:', findResult);

    const filterDocs = await collection.find({ age: { $lt: 25 } }).toArray();
    console.log('Filtered documents:', filterDocs);

    const updateResult = await collection.updateOne({ name: 'John Doe' }, {$set: {age:31}});
    console.log('Updated document:', updateResult);
    


    return 'done';
}
run().then(console.log)
.catch(console.error)
.finally(() => client.close()); 

