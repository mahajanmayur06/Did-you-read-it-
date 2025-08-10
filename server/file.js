import CryptoJS from "crypto-js";

// 60-digit key (for demo, using a string of 60 numbers)
const key = "123456789012345678901234567890123456789012345678901234567890";

// Message to encrypt
const message = "This is a secret message";
console.log("\n\n\nOriginal:", message);
// Encrypt using AES
const encrypted = CryptoJS.AES.encrypt(message, key).toString();
console.log("Encrypted:", encrypted);

// Decrypt using AES
const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
console.log("Decrypted:", decrypted);


// asymmetric encryption example
import { generateKeyPairSync, publicEncrypt, privateDecrypt } from 'crypto';

// Generate key pair (usually done once per user)
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Encrypt with public key
const message1 = "Hello, asymmetric!";
const encrypted1 = publicEncrypt(publicKey, Buffer.from(message1));
console.log("Encrypted:", encrypted1.toString('base64'));

// Decrypt with private key
const decrypted1 = privateDecrypt(privateKey, encrypted1);
console.log("Decrypted:", decrypted1.toString());