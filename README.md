<h1>Movie Quotes</h1>

<P style="font-size: 16px">Movie Quotes App</P>

- [Production Url](https://movie-quotes.omar.redberryinternship.ge) - https://movie-quotes.omar.redberryinternship.ge

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- _Node JS @16.X and up_
- _npm @6 and up_

#

### Tech Stack

- [Next.js 12.2](https://nextjs.org) - front-end framework
- [Tailwind Css @3](https://tailwindui.com/documentation) - A utility-first CSS framework
- [Formik ](https://formik.org) - easy form validation
- [React-Toastify](https://www.npmjs.com/package/react-toastify) - cool notifications
- [Redux Toolkit](https://redux-toolkit.js.org) - global state management
- [React Select](https://react-select.com/home) - select Input control
- [Axios](https://axios-http.com/docs/intro) - promise-based HTTP client
- [Headless UI](https://headlessui.com) - UI components, designed to integrate beautifully with Tailwind CSS.
- [Yup](https://www.npmjs.com/package/yup) - schema builder for value parsing and validation

#

## Getting Started

#

### Clone repository

#

1\. First of all you need to clone Covid repository from github:

```sh
git clone https://github.com/RedberryInternship/movie-quotes-front-omarijalagania.git
```

2\. Next step requires install all the dependencies.

```sh
npm ci
```

#

### How to setup environment variables

#

</hr>
<p style="margin: 10px 0">We use environment variables heavily in our projects. It allows us to have personalized configurations, but it also makes it easy to deploy our projects without having to store sensitive values in our codebase.</p>

#### A short introduction to the config file

<p>In the root of project you find example env file looks like this:</p>

```sh
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
```

<p>Create your .env.local file in the root of project and copy everything from .env.example to your .env, in your terminal type:</p>

```sh
cp .env.example .env.local
```

<P>After you copy everything in your env file, replace dummy urls with your own</p>

#

3\. After installing all dependencies and env setup you can start project

```
 npm run dev

```

#

### Project Structure

```bash
├─── readme   # readme assets
│   ├─── components   # reusable components
│   ├───├─── component-folder   # component folder name
│   ├───├───├─── index.ts               # export default component
│   ├───├───├─── component.tsx     # react component
    ├─── schema   # form validations
    ├─── services   # all api functions
    ├─── pages      # react navigation screens
        ├─── api   # api
        ├─── home  #home folder
        - index.tsx         #page imports
    ├─── state      # reduxtoolkit state management
│   ├───├─── pages-folder  # react navigation screens
│   ├───├───├─── index.ts            # export default screen
│   ├─── helpers      # global helpers
    ├─── types      # typescript types
    ├─ hooks       #custom hooks
─ next-env.d.ts
─ next-i18next.config.js
─ next.config.js
- .eslintrc.json   # eslint config file
- .prettierrc.js   # prettier config file
- package.json     # dependency manager configurations

```

### Deployment

```sh
npm run build
```

- creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.<hash>.js are served with the contents of the /static/js/main.<hash>.js file. For more information see the [production](https://create-react-app.dev/docs/production-build/) build section.
