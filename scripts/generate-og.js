const puppeteer = require('puppeteer');
const path = require('path');

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1200px; height: 630px; overflow: hidden; background: #070809; }
</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Outfit:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(232,201,122,0.04)" stroke-width="1"/>
      </pattern>
      <linearGradient id="topbar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#e8c97a"/>
        <stop offset="50%" style="stop-color:#5b9cf6"/>
        <stop offset="100%" style="stop-color:#64e8a0"/>
      </linearGradient>
      <radialGradient id="orb1" cx="75%" cy="30%" r="40%">
        <stop offset="0%" style="stop-color:rgba(232,201,122,0.07)"/>
        <stop offset="100%" style="stop-color:rgba(7,8,9,0)"/>
      </radialGradient>
      <radialGradient id="orb2" cx="20%" cy="80%" r="35%">
        <stop offset="0%" style="stop-color:rgba(91,156,246,0.05)"/>
        <stop offset="100%" style="stop-color:rgba(7,8,9,0)"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#070809"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <rect width="1200" height="630" fill="url(#orb1)"/>
    <rect width="1200" height="630" fill="url(#orb2)"/>
    <rect x="0" y="0" width="1200" height="3" fill="url(#topbar)"/>
    <rect x="72" y="80" width="3" height="470" fill="rgba(232,201,122,0.15)" rx="2"/>
    <text x="110" y="195" font-family="'Playfair Display', Georgia, serif" font-size="88" font-weight="700" fill="#eceef2" letter-spacing="-3">Votre site envoie</text>
    <text x="110" y="298" font-family="'Playfair Display', Georgia, serif" font-size="88" font-weight="700" fill="#eceef2" letter-spacing="-3">vos clients</text>
    <text x="110" y="401" font-family="'Playfair Display', Georgia, serif" font-size="88" font-weight="700" font-style="italic" fill="#e8c97a" letter-spacing="-3">sur Booking.</text>
    <line x1="110" y1="440" x2="560" y2="440" stroke="rgba(232,201,122,0.2)" stroke-width="1"/>
    <text x="110" y="482" font-family="'Outfit', system-ui, sans-serif" font-size="22" font-weight="400" fill="#7d8899" letter-spacing="0.5">Site de réservation directe · Livré en 15 jours · Maquette gratuite</text>
    <text x="890" y="200" font-family="'Playfair Display', Georgia, serif" font-size="72" font-weight="700" fill="#e8c97a" text-anchor="middle" letter-spacing="-2">15%</text>
    <text x="890" y="228" font-family="'Outfit', system-ui, sans-serif" font-size="13" fill="#3a4352" text-anchor="middle" letter-spacing="2">COMMISSION ÉVITÉE</text>
    <line x1="820" y1="248" x2="960" y2="248" stroke="rgba(232,201,122,0.1)" stroke-width="1"/>
    <text x="890" y="318" font-family="'Playfair Display', Georgia, serif" font-size="72" font-weight="700" fill="#e8c97a" text-anchor="middle" letter-spacing="-2">15j</text>
    <text x="890" y="346" font-family="'Outfit', system-ui, sans-serif" font-size="13" fill="#3a4352" text-anchor="middle" letter-spacing="2">DÉLAI DE LIVRAISON</text>
    <line x1="820" y1="366" x2="960" y2="366" stroke="rgba(232,201,122,0.1)" stroke-width="1"/>
    <text x="890" y="436" font-family="'Playfair Display', Georgia, serif" font-size="72" font-weight="700" fill="#e8c97a" text-anchor="middle" letter-spacing="-2">-60%</text>
    <text x="890" y="464" font-family="'Outfit', system-ui, sans-serif" font-size="13" fill="#3a4352" text-anchor="middle" letter-spacing="2">VS AGENCES PARISIENNES</text>
    <line x1="780" y1="140" x2="780" y2="490" stroke="rgba(28,32,40,1)" stroke-width="1"/>
    <rect x="0" y="560" width="1200" height="70" fill="rgba(13,15,18,0.8)"/>
    <line x1="0" y1="560" x2="1200" y2="560" stroke="rgba(28,32,40,1)" stroke-width="1"/>
    <text x="110" y="603" font-family="'Playfair Display', Georgia, serif" font-size="22" font-weight="700" fill="#eceef2" letter-spacing="-0.5">mustafah<tspan fill="#e8c97a">.</tspan>dev</text>
    <text x="310" y="599" font-family="'Outfit', system-ui, sans-serif" font-size="13" fill="#3a4352" letter-spacing="2">DAKAR · DISPONIBLE POUR MISSIONS FRANCE</text>
    <rect x="980" y="574" width="170" height="36" rx="4" fill="rgba(232,201,122,0.1)" stroke="rgba(232,201,122,0.3)" stroke-width="1"/>
    <text x="1065" y="597" font-family="'Outfit', system-ui, sans-serif" font-size="13" font-weight="600" fill="#e8c97a" text-anchor="middle" letter-spacing="0.5">Maquette gratuite →</text>
  </svg>
</body>
</html>`;

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({
    path: path.join(__dirname, '../public/og-image.png'),
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  await browser.close();
  console.log('✅ og-image.png generated');
})();
