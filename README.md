This is a front-end application which would help users list and browse all launches by SpaceX program.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Approach
1. Created 3 main components (Layout, Filter & ProductList)
- Layout component is used to structure the page (Header, Content & Footer).
- Filter component is generic component which is resposible for rendering initial filters, toggling feature & updating the url with filters applied.
- ProductList component is displaying all the data of launch programms based on filters selected.

2. Apllication has only one page which is managing
    - Server side rendering of data on page load.
    - listening to changes in filter component to reload the data.

3. Used React redux for storing information of all filers available and selected filter.
4. Toggling of filter is based on current selected filter value and selected values present in reducer. 

## Lighthouse score
![Lighthouse scrore](/C:/Users/smane3/Documents/lighhouse.JPG?raw=true "Lighthouse score")
To learn more about Next.js, take a look at the following resources:

