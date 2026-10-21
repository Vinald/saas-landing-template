# Sanity Studio (saas-landing-template)

Content editor for this template's Sanity project (`rtb83dsn`, dataset `production`).

## First-time setup (run these yourself, from this folder)

```bash
npm install
npx sanity login      # opens your browser, log in with the Google account tied to Sanity
npx sanity deploy      # pick a studio hostname, e.g. saas-landing-template -> saas-landing-template.sanity.studio
```

After that, your content is editable at the `*.sanity.studio` URL `sanity deploy` gives you.
Waitlist signups collected from the live site also show up here, under Waitlist Signup.

## Local development

```bash
npm run dev
# -> http://localhost:3333
```
