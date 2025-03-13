# AthleticDB Frontend

> Front end for AthleticDB.

## Tech

The frontend is built with:

- TypeScript
- React with Next.js
- Tailwind CSS
- shadcn

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) w/ NPM
- An internet connection.

### Installation

**1. Clone this repository.**

```
git clone https://github.com/sGrie/athletic_db.git
cd athletic_db/frontend
```

**2. Install required dependencies.**

```
npm i
```

**3. Create a `.env` file.**

The `.env` file in the `/frontend` directory must be created with the following fields. Below is an example.

```
BACKEND_URL="http://localhost:8001"
```

- `BACKEND_URL`: The URL at which the backend is hosted.
  - **DO NOT INCLUDE THE TRAILING SLASH!**

**4. Start the Development Server (Optional)**

```
npm run dev
```

The application can now be reached at http://localhost:8000.

### Deployment

**5. Build and Start the Production Server**

```
npm run build
npm start
```

The application can now be reached at http://localhost:3000. You can change the port it is hosted on by editing the project's `package.json` file, and changing the `"start"` script.

```json
{
  ...
  "scripts": {
    ...
    "start": "next start -p 3001",
    ...
  },
  ...
}
```
