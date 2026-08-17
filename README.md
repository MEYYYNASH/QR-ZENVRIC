# ZENVRIC QR Studio

A modern, responsive QR generator website inspired by the uploaded visual references.

## Included
- ZENVRIC branding
- English + Khmer language selector shown before first use
- Compact mode
- Website, Text, Email, SMS, Wi‑Fi, Phone, Contact and Location QR types
- Live QR preview
- QR foreground/background color controls
- Rounded QR frame control
- 8 visual QR background templates
- Download QR as PNG
- Copy QR content
- Share QR content using the Web Share API where supported
- Local QR history using browser localStorage
- Responsive desktop/tablet/mobile layout
- No backend required

## Run
Open `index.html` in a browser.

For the QR library, the page uses the qrcodejs CDN:
https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js

For best results, run it from a small local server, for example:
- VS Code Live Server
- `python -m http.server 2000`

Then open:
http://localhost:2000

## Notes
This is a frontend-only build. QR history is stored locally in the browser.
