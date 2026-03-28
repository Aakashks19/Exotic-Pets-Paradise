const mongoose = require('mongoose');

const uri = 'mongodb+srv://aakashks1903_db_user:pRrCNDH06Ie81Jvj@cluster0.8g8kxge.mongodb.net/petshop?retryWrites=true&w=majority';

async function testDB() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(uri);
        console.log('Connected Successfully! ✅');
        
        // Count users
        const collection = mongoose.connection.collection('users');
        const count = await collection.countDocuments();
        console.log(`User count in DB: ${count}`);
        
    } catch (e) {
        console.error('Connection Failed! ❌', e.message);
    } finally {
        await mongoose.disconnect();
    }
}

testDB();
