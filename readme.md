# SonomaFireInfo.com

> Code that runs the <http://sonomafireinfo.com> website.

This is based on Github pages and utilizes React/WebPack/Babel for the interactive components. All data is loaded cia AirTable lists (email [info@chimeraarts.org](mailto:info@chimeraarts.org) to be added).

## Setup

```bash
# Install nvm first then:
nvm install
nvm use

# Install dependencies
npm install

# Run locally
npm run dev
```

## Contributing

- The `config.js` file contains code that generates the main menus as well as does the API requests
  - To add a new menu item, add an entry to `sections`
    - The order is important when adding items into `sections`
  - Add an item to resources as well if the page is not a custom page
    - If a standard resource, add to the `resources` list and this will get passed into the `<GenericList>` component as props.
  - If custom, add a route to your custom component in `application.js`
- Check issues list for how to contribute
- Submit a PR describing what you did
- Test on mobile! 60-80% of users are on mobile.
- Commit compiled code with your PR
- Document if you can