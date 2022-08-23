import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';
/* Promise based HTTP client for the browser and node.js */
const axios = require('axios');
const Gists = require('gists');



@Injectable()
export class GistService {
    constructor(
    ) { }

    async publicGists(username: string) {
        try {
            var date = new Date("30 July 2020 15:05 UTC");
            
            
            const gists = new Gists({
                username: 'muhammadbilalakbar021',
                password: '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'
            });
            const gist = await gists.list(`${username}?since=${date.toISOString()}`);
            return gist.body



        } catch (error) {
            console.log(error)
            throw new Error('Error while getting Public Gists From User' + error)
        }
    }
}
