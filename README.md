## Cài đặt

Phía Client

```bash
cd client
npm install
```

Phía Server

```bash
cd server
npm install
```

## Chạy chương trình

Cần 4 terminal để khởi chạy chương trình này - 1 cho client và 3 cho server với 3 server: server-api, server-auth, server-socket

```bash
cd client
npm start
```

```bash
cd server
npm run devStart
```

```bash
cd server
npm run devStartAuth
```

```bash
cd server
npm run devStartSocket
```
## Cấu hình biến môi trường

```
DATABASE_URL=string (required)
PORT=3000 (required number)
AUTH_PORT=4000 (required number)
ACCESS_TOKEN_SECRET=string (required string)
REFRESH_TOKEN_SECRET=string (required string)
```
