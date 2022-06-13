const axios = require('axios');

const strapi = `http://localhost:1337`

const get = async (contentType) => {
    const { data } = await axios.get(`${strapi}/${contentType}`);
    return data
}

export {
    get
}