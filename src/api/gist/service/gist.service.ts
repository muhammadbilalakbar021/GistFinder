import { Injectable } from '@nestjs/common';
/* Promise based HTTP client for the browser and node.js */
const axios = require('axios');


@Injectable()
export class GistService {
    public readonly gitUrl = 'https://gist.github.com/'
    constructor(){}

    async publicGists(username:string){
        try {
            return await axios.get(`${this.gitUrl}username`);
        } catch (error) {
            throw new Error('Error while getting Public Gists From User')
        }
    }
}
