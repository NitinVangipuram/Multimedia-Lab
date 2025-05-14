# EMA Lab Website Frontend

Frontend repository for the Emerging Multimedia & AI Lab (EMA) website at IIT Dharwad.

## About EMA Lab

The Emerging Multimedia and AI Lab (EMA) is a pioneering research lab dedicated to advancing the fields of multimedia processing, artificial intelligence, and natural language processing. Named after the Manipuri word for "mother," EMA symbolizes our commitment to nurturing innovative technologies that bridge the gap between cutting-edge research and real-world applications. Our lab focuses on developing AI-driven solutions that enhance human-computer interaction, with a special emphasis on low-resource languages, cultural preservation, and assistive technologies.

## Quick Start Guide

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NitinVangipuram/Multimedia-Lab.git
   cd Multimedia-Lab
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_API_ENDPOINT=your_strapi_backend_url
     ```

4. Start the development server:
   ```bash
   npm run start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm run start
# or
yarn start
```

## Content Management

This frontend connects to a Strapi CMS backend. Content updates should be made through the Strapi admin panel, which will automatically reflect on the website.
