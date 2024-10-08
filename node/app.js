
const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})
client.set('visits',0);
app.get('/', (req, res) => {
  client.get('visits',(err,visit)=>
  {
    res.send('the number of times page was visited is :'+visit);
    client.set('visits',parseInt(visits)+1);
  })
    
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
