import axios from 'axios';

const API_URL = 'https://backend-gp8a.onrender.com';

async function testAuth() {
    console.log('--- Testing Authentication ---');
    
    // 1. Test registration
    try {
        console.log('Testing Registration...');
        const regRes = await axios.post(`${API_URL}/api/auth/register`, {
            name: 'Test User ' + Date.now(),
            email: `test${Date.now()}@example.com`,
            password: 'testpassword123',
            phone: '1234567890',
            address: 'Test Address'
        });
        console.log('Registration Success:', regRes.data.user.email);
    } catch (e) {
        console.error('Registration Failed:', e.response?.data || e.message);
    }

    // 2. Test login
    try {
        console.log('\nTesting Login...');
        const loginRes = await axios.post(`${API_URL}/api/auth/login`, {
            email: 'admin@exoticpets.com',
            password: 'admin123'
        });
        console.log('Login Success! Token received.');
        console.log('User Role:', loginRes.data.user.role);
    } catch (e) {
        console.error('Login Failed:', e.response?.data || e.message);
    }
}

testAuth();
