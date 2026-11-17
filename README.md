# Product Lookup API

A minimal Express REST API that returns the category and product ID supplied in the URL.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```sh
npm install
npm start
```

The server listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

## Endpoint

```http
GET /api/shop/:category/:id
```

Example request:

```text
http://localhost:3000/api/shop/electronics/123
```

Example response:

```json
{
  "category": "electronics",
  "id": "123"
}
```

This example echoes the URL parameters; it does not retrieve product data from an inventory.
