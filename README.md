# NovelNest : Book Details Generator with Vite + React, Tailwind CSS, and OpenLibrary API

## Table of Contents

- [Project Setup](#project-setup)
- [Development Server](#development-server)
- [Building for Production](#building-for-production)
- [Using FoodiFy](#using-foodify)
- [Contributing](#contributing)
- [License](#license)

---

## Limitations

This API gives data very slowly when you search ! So the screen might remain blank when fetching search results for one or two seconds.

Get an Open Library here --

```bash
https://openlibrary.org/developers/api
```
this is absolutely free to use as many time as you want ! no restrictions on calling !

## Project Setup

### Prerequisites

- Node.js (version 14 or later) and npm (or yarn) installed on your system. You can verify this by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

### Clone the Repository

```bash
git clone https://github.com/ArunavaCoderEm/novelnest.git
cd novelnest
```

### Install Dependencies

```bash
npm install
```
OR IF YOU PREFER YARN
```bash
yarn install
```
## Development Server
### Start the Server

```bash
npm run dev
```
OR IF YOU PREFER YARN
```bash
yarn dev
```
This will start the development server at http://localhost:3000 by default.

## Building for Production
### Production Build

```bash
npm run build
```
OR IF YOU PREFER YARN
```bash
yarn build
```

This will create an optimized production build in the dist folder, ready for deployment to a web server.

## Using NovelNest
### OpenLibrary API Key

To use the Openlibrary API, you'll need a free API link. Obtain one from Openlibrary website.


## Search for books

1. Enter your desired books or keywords in the search bar.
2. Click the "Go" button or press Enter to initiate the search using the Openlibrary API link.
3. NovelNest will display a list of matching books along with relevant information.

## View Books Details

1. Click on "Get Details that will land you in a new page showing several details about that book.

## Images



## Contributing

We welcome contributions to FoodiFy! Please refer to the CONTRIBUTING.md file for guidelines on creating pull requests, code style, and testing practices.

## License

This project is licensed under the MIT License (see LICENSE file).