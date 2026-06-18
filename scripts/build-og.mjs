// Generates the social share image (public/og.png, 1200x630) by rendering an
// on-brand terminal screen with the site's gohu font and screenshotting it.
//
//   node scripts/build-og.mjs
//
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Palette mirrors src/config/appearance.ts
const colors = {
  background: "#0a0b11",
  foreground: "#fefefe",
  accent: "#37f712",
  link: "#7dcfff"
};

// Mirrors siteConfig.homeAsciiArt (src/config/site.ts)
const banner = ` ██████╗  ██╗   ██╗ ██╗       █████╗  ███╗   ██╗ ███████╗ ███████╗
 ██╔══██╗ ╚██╗ ██╔╝ ██║      ██╔══██╗ ████╗  ██║ ██╔════╝ ╚══███╔╝
 ██║  ██║  ╚████╔╝  ██║      ███████║ ██╔██╗ ██║ ███████╗   ███╔╝
 ██║  ██║   ╚██╔╝   ██║      ██╔══██║ ██║╚██╗██║ ╚════██║  ███╔╝
 ██████╔╝    ██║    ███████╗ ██║  ██║ ██║ ╚████║ ███████║ ███████╗
 ╚═════╝     ╚═╝    ╚══════╝ ╚═╝  ╚═══╝ ╚═══╝  ╚═══╝ ╚══════╝ ╚══════╝`;

const fontBuf = await readFile(resolve(root, "public/fonts/gohu-subset.woff"));
const fontData = fontBuf.toString("base64");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      @font-face {
        font-family: "gohu";
        src: url("data:font/woff;base64,${fontData}") format("woff");
        font-display: block;
      }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { width: 1200px; height: 630px; }
      body {
        background: ${colors.background};
        color: ${colors.foreground};
        font-family: "gohu", ui-monospace, monospace;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 84px;
        -webkit-font-smoothing: none;
        font-smooth: never;
      }
      .frame {
        position: absolute;
        inset: 28px;
        border: 2px solid ${colors.accent}33;
      }
      .banner {
        font-size: 26px;
        line-height: 1.18;
        white-space: pre;
        color: ${colors.foreground};
        text-shadow: 0 0 14px ${colors.accent}44;
      }
      .meta { margin-top: 44px; font-size: 22px; line-height: 1.8; }
      .prompt { color: ${colors.accent}; }
      .accent { color: ${colors.accent}; }
      .link { color: ${colors.link}; }
      .dim { color: ${colors.foreground}; opacity: 0.55; }
    </style>
  </head>
  <body>
    <div class="frame"></div>
    <div class="banner">${esc(banner)}</div>
    <div class="meta">
      <div><span class="prompt">~ $</span> whoami</div>
      <div><span class="accent">&gt;</span> fullstack engineer &middot; fintech, stablecoins &amp; DeFi</div>
      <div class="dim">6+ years shipping production systems end-to-end</div>
      <div><span class="link">dylansz.com</span> <span class="dim">&middot; github.com/dylanszejnblum</span></div>
    </div>
  </body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const out = resolve(root, "public/og.png");
await mkdir(dirname(out), { recursive: true });
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

console.log(`og image written to ${out}`);
