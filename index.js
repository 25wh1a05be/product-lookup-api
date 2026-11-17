const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/shop/:category/:id', (req, res) => {
  const { category, id } = req.params;

  res.json({ category, id });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
