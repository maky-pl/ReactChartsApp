## Simple Graphs with Charts.js and Material Kit React.

Simple react app showing graphs with Charts.js and Material Kit React (and jest/enzyme).
Clone repo and your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components
        layouts
            header.jsx
    Chart.jsx
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

In the project directory, you can run:

```sh
npm install
```

```sh
npm test
```

```sh
npm start
```

This will install all dependencies (react-chartjs-2, jest, enzyme), run tests and start application.
Go to: [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

App will show two graphs from json data. Click on labels to toggle data.

![App](https://image.ibb.co/gvjGBL/myapp.png)

### Todos

- Add MD elements to the app to add more functionality
- update header with react-helmet (Meta Tag Management)

## License

MIT
