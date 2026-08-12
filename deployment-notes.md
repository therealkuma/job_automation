# GitHub Pages Deployment Notes

## Confirmed project state

The project is a Vite + React static frontend. Its Vite root is `client/` and its build output is currently `dist/public`. The current `pnpm build` script also bundles `server/index.ts` for Manus hosting, but GitHub Pages only needs the static Vite output.

## Official deployment findings

The official Vite guide states that a custom domain such as `www.example.com` can use the default Vite base path `/`; a repository subpath deployment would instead require `/<REPOSITORY>/`. It also recommends enabling GitHub Pages with **Settings → Pages → Source → GitHub Actions**, then deploying the built static output through a workflow.

GitHub’s custom-domain guidance states that the custom domain should be added in the repository Pages settings before DNS is configured. For a `www` subdomain, Cloudflare should create a `CNAME` record pointing `www.komi-ai.com` to the GitHub Pages default domain for the selected repository, such as `<owner>.github.io`. HTTPS should be enabled after DNS verification and propagation.

## Deployment decision

Use GitHub Actions to build the Vite frontend and publish `dist/public` as the Pages artifact. Keep the custom domain at `www.komi-ai.com`. The repository owner, repository name, visibility, and GitHub authentication are still required before pushing code or configuring Pages.

References:

- https://vite.dev/guide/static-deploy
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
