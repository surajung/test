# test.surajung.com Dummy Site (Next.js)

External verification site for `test.surajung.com`.
Recommended operation model is Docker + existing cloudflared tunnel container.

## 1) Run with Docker

Create `.env` file in project root:

```bash
BASIC_AUTH_USER=admin
BASIC_AUTH_PASSWORD=your-strong-password
```

Build and run:

```bash
docker compose up -d --build
```

Check local access:

```bash
curl -I http://127.0.0.1:3000
```

## 2) Endpoints

- `GET /api/health`
- `POST /api/mock/login`
- `GET /api/mock/orders`

Example login payload:

```json
{
  "email": "demo@surajung.com",
  "password": "password123"
}
```

## 3) Connect to existing cloudflared container

If your cloudflared is already running in Docker (for example `biseo-cloudflared`), add one hostname rule:

- Hostname: `test.surajung.com`
- Service: `http://host.docker.internal:3000`

This works because the app is published on host loopback as `127.0.0.1:3000`.

If your cloudflared uses config file ingress, add:

```yaml
- hostname: test.surajung.com
  service: http://host.docker.internal:3000
```

Then reload/restart only cloudflared container.

## 4) Notes

- Basic Auth is enforced by `middleware.ts` when env vars are set.
- If auth env vars are empty, auth is bypassed.
- App container name is `test-surajung-web`.
