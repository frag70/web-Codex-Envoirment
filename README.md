# Al Ciliegino — exact published website export

Standalone static HTML/CSS website exported from published Site version 3.
Original source commit: `d1e5fd1d5480a403cde5db13f111babc3b6e4729`.

## Run locally

From this folder run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No installation, build step, framework, API keys or JavaScript is required. Edit `index.html` and `style.css` in Codex. All three photos and the complete `menu.pdf` are included locally. The HTML retains its title, description, favicon, noindex directive and original external phone/directions/source links.

## Preservation

Every website file is copied byte-for-byte from the existing published source. Files were moved from its `dist/` directory to this standalone project root; all relative references remain unchanged. Hosting authentication/access gating is provided by ChatGPT Sites and is not part of the standalone webpage. This export includes no credentials or account access configuration.

`docs/content-sources.md` records content/photo provenance. `docs/export-checksums.json` records SHA-256 checksums. `docs/original-hosting.json` retains the original non-secret Site identifier and static-directory configuration as a reference only; it is not needed to run this project.

Keep the existing independent commercial-demo disclaimer. Photos are illustrative stock, not actual restaurant photos, and must be replaced with authorized restaurant originals before an official launch.
