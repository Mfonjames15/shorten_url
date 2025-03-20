import { nanoid } from "nanoid";

let urlDatabase = {}; // Stores URL mappings in memory

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ message: "URL is required" });
    }

    const shortId = nanoid(6); // Generate a random 6-character ID
    urlDatabase[shortId] = { longUrl, clicks: 0 };

    return res.json({ shortUrl: `http://localhost:3000/${shortId}` });
}
