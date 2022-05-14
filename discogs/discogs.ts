import axios from 'axios';
import fs from 'fs';

const pullDiscogs = async () => {
    const data = axios.get('https://api.discogs.com/releases/249504', {
        headers: {
            'User-Agent': 'BotDiscogsChecker/3.0',
        },
        });    
    // fs.writeFileSync('discogs.json', data);
    console.log('File Written');
}

pullDiscogs();
export default pullDiscogs;