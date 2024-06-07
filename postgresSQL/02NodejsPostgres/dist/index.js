"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./db/index");
(0, index_1.connectDb)();
const createUserTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield index_1.client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `);
        console.log(res);
        console.log("User table created successfully");
    }
    catch (err) {
        console.log("Error creating user table", err);
    }
});
const createAddressTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield index_1.client.query(`
        CREATE TABLE address (
            id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        `);
        console.log(res);
        console.log("Address table created successfully");
    }
    catch (error) {
        console.log("Error creating address table", error);
    }
});
const insertData = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertQuery = `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
        `;
        const values = [username, email, password];
        const res = yield index_1.client.query(insertQuery, values);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
});
// createUserTable();
const fetchUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const values = [email];
        const query = `
        SELECT * FROM users WHERE id = $1;
        `;
        const res = yield index_1.client.query(query, values);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
});
const updateUser = (username, email, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const values = [username, email, id];
        const query = `
        UPDATE users SET username = $1, email = $2 WHERE id = $3;
        `;
        const res = yield index_1.client.query(query, values);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
});
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const values = [id];
        const query = `
    DELETE FROM users WHERE id = $1;
    `;
        const res = yield index_1.client.query(query, values);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
});
const insertAddress = (user_id, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insertQuery = `
        INSERT INTO address (user_id, city, country, street, pincode)
        VALUES ($1, $2, $3, $4, $5);
        `;
        const values = [user_id, city, country, street, pincode];
        const res = yield index_1.client.query(insertQuery, values);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
});
deleteUserById(2);
// updateUser("gaurav", "khanal@gmail.com", 1);
// insertData("gaura", "gaurb@gmail.com", "123456");
// fetchUserByEmail("gaurb@gmail.com")
// insertAddress(2, "Kathmandu", "Nepal", "Boudha", "44600");
// createAddressTable();
