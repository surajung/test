# GitHub Actions Auto Deploy (Mac mini)

This repository uses `.github/workflows/deploy-macmini.yml`.
On push to `main`, GitHub Actions SSHes into Mac mini and redeploys Docker.

## Required GitHub Secrets

Add these in: `Repository -> Settings -> Secrets and variables -> Actions`

- `MAC_HOST`: Mac mini public host or DDNS domain
- `MAC_USER`: SSH username on Mac mini (example: `surajung`)
- `MAC_PORT`: SSH port (usually `22`)
- `MAC_SSH_KEY`: private key content used by GitHub Actions

## Required Mac mini setup

- SSH server enabled on Mac mini
- Public key corresponding to `MAC_SSH_KEY` added to:
  - `~/.ssh/authorized_keys`
- Repo exists at:
  - `~/www/project`
- Docker and docker-compose available

## Deployment command executed on Mac mini

```bash
cd ~/www/project
git fetch origin main
git reset --hard origin/main
docker-compose up -d --build
```
