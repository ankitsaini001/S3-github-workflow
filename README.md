<p align="center">
  <img src="public/logo.png" alt="TechByte Chronicles logo" width="110" />
</p>

<h1 align="center">TechByte Chronicles — Website</h1>

<p align="center">
  <strong>IT, coding &amp; AI, made simple.</strong><br />
  Learn • Code • Build • Grow
</p>

<p align="center">
  <a href="https://amazn-s3-react-bucket.s3.ap-south-1.amazonaws.com/index.html"><b>🌐 Live site</b></a> ·
  <a href="https://www.youtube.com/@techbytechronicles-AJ"><b>▶️ YouTube</b></a> ·
  <a href="https://www.instagram.com/techbytechronicles"><b>📸 Instagram</b></a>
</p>

---

The official website of **TechByte Chronicles**, a channel with visual explainers on DSA, web development, deployment and AI.

It's a **React + Vite** app, deployed automatically to **Amazon S3** with **GitHub Actions** on every push to `main`. We built it while learning AWS, and it's also a working example of the pipeline we cover in our videos.

## ✨ Features

- **Animated bubble-sort visualiser** in the hero section, in the spirit of our *DSA Visualized* series
- **Latest videos**: a featured video plus a Shorts grid, using thumbnails straight from YouTube
- **Topics, community and about** sections
- **Dark / light theme** that remembers each visitor's choice
- **Fully responsive**: phones (down to 320px), tablets and desktops, with a mobile menu
- **Accessible**: respects *reduced motion*, keyboard-friendly menu, semantic HTML
- **No backend and no tracking**: just static files served from S3

## 🧰 Tech stack

| Layer | Tool |
|---|---|
| UI | [React 19](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Linting | [Oxlint](https://oxc.rs) |
| Hosting | [Amazon S3](https://aws.amazon.com/s3/) static website hosting |
| CI/CD | [GitHub Actions](https://docs.github.com/actions) |

## 🚀 Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/ankitsaini001/S3-github-workflow.git
cd S3-github-workflow
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Check the code with Oxlint |

## 🎬 Adding a new video

All site content lives in **[`src/data/channel.js`](src/data/channel.js)**. To add a Short, add one line to `SHORTS`:

```js
{ id: 'VIDEO_ID', title: 'Your video title', tag: 'DSA' },
```

The `id` is the last part of the video URL, for example `youtube.com/shorts/`**`gQ5vMOzJVB4`**. To change the featured video, edit `FEATURED`. Commit and push, and the site redeploys itself.

## 📁 Project structure

```
├── .github/workflows/
│   └── deploy-to-s3.yml    # CI/CD: build and upload to S3 on every push to main
├── public/
│   └── logo.png            # Logo and favicon (copied to dist/ as-is)
├── src/
│   ├── components/         # Nav, Hero, SortVisualizer, Topics, Videos, Community, About, Footer
│   ├── data/channel.js     # ← all content: links, topics, videos
│   ├── hooks/              # useTheme, useRevealOnScroll
│   ├── App.jsx
│   ├── index.css           # All styles and theme colours
│   └── main.jsx
├── index.html              # Vite entry page
└── vite.config.js
```

## ☁️ How deployment works

```
git push → GitHub Actions → npm ci && npm run build → aws s3 sync dist/ → live on S3
```

The workflow in [`.github/workflows/deploy-to-s3.yml`](.github/workflows/deploy-to-s3.yml) runs on every push to `main`:

1. Checks out the code and sets up Node.js 24
2. Installs dependencies with `npm ci` and builds the site with `npm run build`
3. Signs in to AWS using repository secrets
4. Syncs the `dist/` folder to the S3 bucket. `--delete` removes files that no longer exist in the build.

`dist/` and `node_modules/` are in `.gitignore`, because GitHub Actions builds the site fresh on every run.

### Deploy your own copy

**1. Create and configure an S3 bucket**

- Create a bucket and turn off *Block all public access* for **that bucket only**.
- **Properties → Static website hosting**: enable it and set the index document to `index.html`.
- **Permissions → Bucket policy**: allow public **read-only** access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

**2. Create an IAM user for GitHub Actions**, allowed to deploy to that one bucket only:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

**3. Add repository secrets.** Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Example value |
|---|---|
| `AWS_REGION` | `ap-south-1` |
| `AMAZN_BUCKET` | `your-bucket-name` (no `s3://`) |
| `ACCESS_KEY_ID` | Access key ID of the IAM user |
| `SECRET_ACCESS_KEY` | Secret access key of the IAM user |

> ⚠️ Never commit AWS keys to the repository. Keep them in GitHub Secrets only.

**4. Push to `main`.** Watch the run in the **Actions** tab, then open your bucket's website endpoint.

## 🔒 Security notes

- The bucket allows the public to **read files only**. Listing, uploading and deleting are denied.
- AWS credentials live in GitHub Secrets and are masked in workflow logs.
- Pull requests from forks never receive repository secrets and can't trigger a deployment.

## 🗺️ Roadmap

- [x] Static site on S3 with automated GitHub Actions deployment
- [x] React + Vite rebuild with responsive design
- [ ] Automatically pull the latest videos via a scheduled workflow
- [ ] CloudFront in front of S3 for HTTPS, caching and a custom domain

## 📺 Follow along

If this repo helped you, subscribe on **[YouTube](https://www.youtube.com/@techbytechronicles-AJ)** and follow us on **[Instagram](https://www.instagram.com/techbytechronicles)**. Got a topic you want explained? Send us a DM.

---

<p align="center">Made with ❤️ by <b>TechByte Chronicles</b> · Learn • Code • Build • Grow</p>
