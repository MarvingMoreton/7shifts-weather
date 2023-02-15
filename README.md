# ## **7shifts Weather App**

This app was built using Next.js 12.3 and is hosted on Vercel at **[https://7shifts-weather.vercel.app/](https://7shifts-weather.vercel.app/)**. It uses the OpenWeatherMap API to fetch weather forecast data for the cities of Ottawa, Moscow, and Tokyo.

## ## **Getting Started**

To run this app locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running **`npm install`** or **`yarn install`**.
3. Create a **`.env.local`** file and add your OpenWeatherMap API key as follows: **`OPEN_WEATHER_API_KEY=YOUR_API_KEY_HERE`**
4. Run the app using **`npm run dev`** or **`yarn dev`**.
5. Navigate to **`http://localhost:3000`** in your web browser to see the app running.

## ## **Deploying to Vercel**

To deploy this app to Vercel, follow these steps:

1. Create an account on Vercel if you haven't already.
2. Install the Vercel CLI by running **`npm i -g vercel`** or **`yarn global add vercel`**.
3. Log in to your Vercel account by running **`vercel login`**.
4. Run **`vercel`** in the root directory of the app and follow the prompts to create a new project.
5. Set the environment variable **`OPEN_WEATHER_API_KEY`** to your OpenWeatherMap API key in the Vercel project settings.
6. Push any changes to your Git repository to deploy them to Vercel.

## ## **About the App**

This app uses the **`getServerSideProps`** function in Next.js to fetch weather forecast data from the OpenWeatherMap API. The data is then displayed on the page using React components. The app is responsive and works well on desktop and mobile devices.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
