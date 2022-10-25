const express = require('express');
const app = express();
const port = 5000;

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Tuts Points server is running!');
});
app.get('/course/:id', (req, res) => {
  const target_course = courses.find((course) => course.id === parseInt(req.params.id));
  res.send(target_course);
});
app.get('/topic/:topic', (req, res) => {
  if (req.params.topic === 'all') {
    res.send(courses);
  } else {
    const target_course = courses.filter((course) => course.tags.includes(req.params.topic));
    res.send(target_course);
  }
});

app.listen(port, () => {
  console.log(`Tuts Points server is running on port: ${port}`);
});
