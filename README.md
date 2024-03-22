This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Hygraph Blog Website

This project is a blog website that fetches data from the Hygraph API using GraphQL. It renders multiple blogs with images and information such as text, titles, subtitles, etc. Users can click on individual blogs to be redirected to a specific URL within the page where they can view the details of that blog. Additionally, users have the ability to filter blogs based on their publication date and search for blogs by their titles.

## How to Run Locally

1. Clone this repository to your local machine.
2. Ensure you have Node.js and npm installed.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the project dependencies.
5. Once the installation is complete, run `npm start` to start the development server.
6. Open your web browser and navigate to `http://localhost:3000` to view the project.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure and Key Implementation Details

The project follows a standard React application structure with components organized in a modular way. Here's a brief overview:

- `src/components`: Contains React components used to build the user interface.
- `src/pages`: Contains page components representing different routes of the application.
- `src/services`: Includes service modules responsible for fetching data from the Hygraph API using GraphQL.
- `src/utils`: Contains utility functions used across the application.

Key implementation details include:
- Integration with the Hygraph API using GraphQL for fetching blog data.
- Rendering of blog content including images, text, titles, and subtitles.
- Dynamic routing to display individual blog details when clicked.
- Implementation of filtering functionality based on publication date.
- Integration of search functionality to filter blogs by title.

Feel free to explore the codebase for more detailed implementation specifics.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
