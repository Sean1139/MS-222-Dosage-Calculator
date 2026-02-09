# MS-222 Dosage Calculator

A simple, browser-based tool to quickly calculate the amount of MS-222 (tricaine methanesulfonate) needed to anesthetize or euthanize fish based on container volume.

This calculator uses fixed concentrations from your lab/protocol:
- **Anesthesia**: 50 mg/L
- **Euthanasia**: 250 mg/L

Container volumes are entered in **bushels** (converted internally using 1 bushel = 35.2 liters).

Built as a lightweight static web app (HTML + CSS + JavaScript) — no backend, no dependencies, fully client-side.

Live demo: [https://your-repo-name.vercel.app](https://your-repo-name.vercel.app) (update this link after deploying)

## Features

- Select Anesthesia or Euthanasia mode
- Input volume in bushels (supports decimals, e.g., 0.5 for half-bushel)
- Instant calculation of grams of MS-222 powder required
- Shows equivalent liters and total milligrams for reference
- Mobile-friendly and responsive design
- Clear warnings and reminders to buffer to neutral pH

## Important Disclaimer & Safety Notes

**This tool is for quick reference only and is NOT a substitute for professional veterinary advice, institutional protocols, or IACUC approval.**

- Always buffer MS-222 solutions to pH ~7.0–7.5 (commonly with NaHCO₃ / sodium bicarbonate) before use — unbuffered MS-222 is acidic and stressful/harmful to fish.
- Confirm dosages with species-specific guidelines, as requirements vary (e.g., zebrafish, salmonids, ornamental fish).
- General literature (AVMA Guidelines for the Euthanasia of Animals, university IACUC docs) often cites:
  - Anesthesia: 50–200 mg/L (your protocol uses the lower end)
  - Euthanasia: 250–500+ mg/L (immersion until cessation of opercular movement + confirmation of death)
- Follow your institution's animal care and use protocols at all times.
- MS-222 is a controlled substance in some contexts — handle, store, and dispose of properly.

The authors assume no liability for misuse or errors.

## How to Use

1. Open the calculator in any modern browser (phone, tablet, desktop).
2. Select **Anesthesia** or **Euthanasia**.
3. Enter the volume of your bin/container in **bushels**.
4. Click **Calculate Dosage**.
5. Read the result — add the displayed grams of MS-222 powder to your water volume.

Bookmark the page or share the URL with lab members for easy access.

## Deployment (Free & Easy)

This is a static site — deploy in minutes with no server management:

### Recommended: Vercel (fastest)
1. Push this repo to GitHub.
2. Go to https://vercel.com → Sign up (free with GitHub).
3. New Project → Import Git Repository.
4. Deploy (zero config needed).
5. Get your permanent URL (e.g., `https://ms222-dosage-calculator.vercel.app`).

### Alternatives
- **Netlify**: Same process — drag/drop or Git connect.
- **GitHub Pages**: Enable in repo Settings → Pages → main branch.
- **Cloudflare Pages**: Great performance, free custom domain option.

## Local Development

Just open `index.html` in your browser — no build tools required.

## Tech Stack

- HTML5
- CSS (vanilla, responsive)
- JavaScript (pure, no frameworks)

## Contributing

Feel free to fork and submit pull requests! Ideas welcome:
- Add support for stock solutions (e.g., mL from 10 g/L stock)
- Species-specific presets
- Dark mode toggle
- Export/print results

## License

MIT License

Copyright (c) 2026 Sean R

See the [LICENSE](LICENSE) file for full details.

Permission is hereby granted, free of charge, to any person obtaining a copy...
(standard MIT text)

## Acknowledgments

- Inspired by common lab needs for quick, reliable dosage conversion.
- Conversion factor: 1 bushel ≈ 35.2 liters (as specified).

Questions or improvements? Open an issue or reach out.
