export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { shortId } = req.body;
    if (!urlDatabase[shortId]) {
        return res.status(404).json({ message: "Short URL not found" });
    }

    urlDatabase[shortId].clicks += 1; // Increment click count
    return res.json({ longUrl: urlDatabase[shortId].longUrl });
}
