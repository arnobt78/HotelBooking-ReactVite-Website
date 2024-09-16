
<img width="1275" alt="Screenshot 2024-09-13 at 00 01 03" src="https://github.com/user-attachments/assets/51070abc-f3ae-47ef-8bc1-e17151f075da"> ![Screenshot 2024-09-13 at 00 08 31](https://github.com/user-attachments/assets/5b984db0-c8c0-4a9a-bc25-543d30586225) <img width="1201" alt="Screenshot 2024-09-13 at 00 03 29" src="https://github.com/user-attachments/assets/4e1a4f30-ab6a-492a-8607-68963542f151"> ![Screenshot 2024-09-13 at 00 08 53](https://github.com/user-attachments/assets/edbabe77-1879-477d-8711-30bf245ff5b7)

## HotelBooking-ReactVite-Website

Hotel-Booking is a Static React-Vite Frontend Website, using React.js, React-Compotents, React-context API, Hooks, TailwindCSS, React Date Picker, Responsive Mobile Menu, Swiper Slider, Data Loading Spinner Effect, Scroll To Top Component, when page or location changes and deploy on Netlify.

**Note: To check this web app live, click here:** https://hotel-booking-arnob.netlify.app

## To Install Dependences

Before launching this web application, be sure to install all required dependencies, which are listed in the package.json file.

To install all dependences, run this command from your project folder: `npm install`

## To Install NodeJS

Make sure you have NodeJS installed in your machine first, The installation instructions are here: https://nodejs.org/en/

## To Create TailwindCSS React Vite Project

Open up your terminal and bootstrap a new React Vite App by: `npm create vite@latest my-project -- --template react`

Then go to that project folder, and write this command via terminal from your project folder: `npm install -D tailwindcss postcss autoprefixer`

Then install tailwindcss and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files: `npx tailwindcss init -p`

Then add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Run your project: `npm run dev`

Run on your browser Local: `http://localhost:5173/`

(For more details, visit: https://tailwindcss.com/docs/guides/vite )

## Project Dependencies Package Installation Command

* npm create vite
* npm add -D react-icons
* npm add -D react-router-dom
* npm add -D react-datepicker
* npm add -D @headlessui/react
* npm add -D spinners-react
* npm add -D swiper
* npm add -D vite-plugin-svgr
* npm add -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
