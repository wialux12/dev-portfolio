# dev-portfolio

Личный сайт-портфолио. Next.js 16 (App Router) + React 19 + TypeScript +
Tailwind CSS v4 + shadcn/ui (Base UI) + Framer Motion + GSAP.

Статический экспорт (`output: "export"` в `next.config.ts`) — все роуты
статические, сайт раздаётся nginx без Node-процесса.

## Разработка

```bash
npm install
npm run dev       # http://localhost:3000
```

## Сборка и деплой

```bash
NEXT_PUBLIC_SITE_URL="https://kirillspynu.duckdns.org" npm run build
```

Результат — папка `out/`. Деплой на сервер (Timeweb Cloud, тот же, что и
`dom-galeeva`/`valeriaonelove`, IP 217.149.22.12):

```bash
rsync -az --delete out/ root@217.149.22.12:/var/www/kirillspynu/
ssh root@217.149.22.12 "chown -R www-data:www-data /var/www/kirillspynu"
```

nginx-конфиг — `/etc/nginx/sites-available/kirillspynu.duckdns.org` на
сервере (try_files под flat-file структуру статического экспорта:
`$uri $uri.html $uri/`). HTTPS — Let's Encrypt/certbot, автопродление
включено. Домен — DuckDNS `kirillspynu.duckdns.org`, уже указывал на IP
сервера на момент первого деплоя.

Живой сайт: https://kirillspynu.duckdns.org
