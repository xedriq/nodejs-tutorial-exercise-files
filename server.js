const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/rootDir')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, './public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res) => {
    res.sendFile(path.join(rootDir, './views/404.html'))
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});