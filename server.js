const express = require('express')
const app = express()

const connectDB = require('./config/db')

// connect DB
connectDB()

app.get('/', (req, res) => {
    res.send('API running')
})

// define routes
app.use('/api/users', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/post'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))