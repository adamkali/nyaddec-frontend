#Nyaddec

##N (Nyaddec is)
##Y (Yet)
##A (Another)
##DD (Dungeons & Dragons)
##EC (Encounter Creator)

###nyaddec-frontend

Nyaddec's Frontend is made with Typescript react and uses an asynchronous format to communicate to nyaddec-backend. There are docstrings the React Componenets, classes, important data, and integral helper functions. The development mindset to this front end is to have pages be as self contained as posssible. For example: the file structure may look something like this: 
```
app
\__A
|  \__compnents
|  |  |
|  |  \__foo.tsx
|  |  |
|  |  \__bar.tsx
|  |
|  \__index.tsx
|
|
|
\__B
   \__components
   |  |
   |  \fiz.tsx
   |
   \__index.tsx
```
This website strives to have directery `A` not communicate with `B`.  Any communication between these two should be done through the api.

___

For now this frontend is stand alone until I am able to complete the backend. So if there is any data you need for a certain function that may be from the api, make a 
```
const whatever = {
  fiz: bazz,
  buzz: bop,
};
```

___



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm install`

Loads nessicary modules.

See [nyaddec-backend](https://github.com/adamkali/nyaddec-backend) for more information on website details.
