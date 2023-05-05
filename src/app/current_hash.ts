import { SupportedHash } from "./supported_hash";
import * as CryptoJS from "crypto-js"

export const current_supported_hash: SupportedHash[] = [
    {
        "name": "MD-5",
        "description": "",
        "enabler": CryptoJS.MD5
    }, 
    {
        "name": "SHA-1",
        "description": "",
        "enabler": CryptoJS.SHA1
    }, 
    {
        "name": "SHA-256",
        "description": "One of the most used algo for hashing",
        "enabler": CryptoJS.SHA256
    }, 
    {
        "name": "SHA-512",
        "description": "",
        "enabler": CryptoJS.SHA512
    }, 
    {
        "name": "SHA-3 (Keccak)",
        "description": "",
        "enabler": CryptoJS.SHA3
    },
    {
        "name": "RIPEMD-160",
        "description": "",
        "enabler": CryptoJS.RIPEMD160
    }
]
