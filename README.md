# TVS Jupiter 110 — Emergency QR webpage

This is a starter static website for an emergency contact QR sticker. It is not live until you publish it with GitHub Pages.

## Files
- `index.html` — page content
- `style.css` — responsive navy/white styling
- `script.js` — contact details and click-to-call links

## Before publishing
1. Open `script.js`.
2. Replace `ownerName`, `ownerPhone`, `emergencyName`, `emergencyPhone`, and `bloodGroup`.
3. Use phone numbers with country code, for example `+91XXXXXXXXXX`.
4. Only publish information you are comfortable showing to anyone who scans the QR code.
5. Confirm the blood group from a reliable medical record before adding it. Do not rely on this page as medical verification.

## Publish with GitHub Pages
1. Sign in to GitHub and create a **new public repository** (for example `jupiter-emergency-card`).
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to publish. The URL normally resembles `https://YOUR-USERNAME.github.io/jupiter-emergency-card/`.
7. Open the URL on a phone and test both call buttons before generating/printing the QR.

The example URL is only a pattern; your actual URL depends on your GitHub username and repository name.

## Privacy and safety
- A public repository means the source files are public too. Never put passwords, private IDs, or unnecessary sensitive details in it.
- This static page does not collect, store, or send live location.
- The location button opens Google Maps only; it does not automatically share the scanner's location.
- This is a contact aid, not a replacement for local emergency services.
