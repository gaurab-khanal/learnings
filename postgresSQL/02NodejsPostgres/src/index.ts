import { connectDb, client } from './db/index';

connectDb();

const createUserTable = async () => {
    try {
        const res = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)
        console.log(res)
        console.log("User table created successfully")
    } catch (err) {
        console.log("Error creating user table", err)
    }
}

const createAddressTable = async () => {
    try {
        const res = await client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
    user_id INTEGER UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        `)
        console.log(res);
        console.log("Address table created successfully");
    } catch (error) {
        console.log("Error creating address table", error)
    }

}

const insertData = async (username: string, email: string, password: string) => {
    try {
        const insertQuery = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
        `
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

// createUserTable();

const fetchUserByEmail = async (email: string) => {
    try {
        const values = [email];
        const query = `
        SELECT * FROM users WHERE id = $1;
        `
        const res = await client.query(query, values);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (username: string, email: string, id: number) => {
    try {
        const values = [username, email, id];
        const query = `
        UPDATE users SET username = $1, email = $2 WHERE id = $3;
        `
        const res = await client.query(query, values);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}

const deleteUserById = async (id: number) => {
    try {
        const values = [id];
        const query = `
    DELETE FROM users WHERE id = $1;
    `
        const res = await client.query(query, values);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

const insertAddress = async (user_id: number, city: string, country: string, street: string, pincode: string) => {
    try {
        const insertQuery = `
        INSERT INTO address (user_id, city, country, street, pincode)
        VALUES ($1, $2, $3, $4, $5);
        `
        const values = [user_id, city, country, street, pincode];
        const res = await client.query(insertQuery, values);
        console.log(res);
    } catch (error) {
        console.log(error)
    }
}


const getUserAndAddressWithJoin = async (id: number)=>{
    try {
        const values = [id];
        const query = `
        SELECT users.id, users.username, users.email, address.city, address.country
        FROM users
        JOIN address ON users.id = address.user_id
        WHERE users.id = $1;
        `
        const res = await client.query(query, values);
        console.log(res.rows);
    } catch (error) {
        console.log(error)
    }
}

// deleteUserById(2)
// updateUser("gaurav", "khanal@gmail.com", 1);
// insertData("khanal", "gaurab@mail.com", "1234596");
// fetchUserByEmail("gaurb@gmail.com")

// insertAddress(6, "Kathmandu", "Nepal", "Boudha", "44600");
// createAddressTable();
getUserAndAddressWithJoin(6);