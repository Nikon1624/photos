import axios from 'axios';

const HTTP = axios.create({
    baseURL: 'https://api.unsplash.com/',
    responseType: 'json',
    headers: {
        Authorization: 'Client-ID pBwt2vJtfQA79EjNRiWYpFU8C-Zjr-JgqAI7s2ZM1Tw'
    }
});

export {HTTP};