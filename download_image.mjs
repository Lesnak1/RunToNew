import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

const url = "https://images.unsplash.com/photo-1580910594678-274cb6777088?q=80&w=2070&auto=format&fit=crop";
const dest = path.join(process.cwd(), 'public', 'images', 'butterfly_valley.jpg');

async function download() {
    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    await pipeline(response.body, fs.createWriteStream(dest));
    console.log('Download completed');
}

download().catch(console.error);
