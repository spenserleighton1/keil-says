# keil-says
A spin on the classic Simon Says, built in React Native.

#Canarchy Canagement

### Setup/Development

To develop using this project you can run 

`npm run dev:serve`

and

`npm run dev:client` 

in seperate terminal instances. This will allow hot reloading of both changes to the server and changes to the client.

The server will require you to be running a local instance of [MongoDB](https://www.mongodb.com/).

`npm run static` will build the client-side JavaScript and start the hot reloading of the server environment. `npm run dev:serve` can also be used to just start the API if you are working on that prior to worrying about the client.

#### Scripts

A more detailed breakdown of the scripts are as follows:

| Command `npm run`| Server | Client |
| :------------- |:------------- |:- 
| `start`| Static| Static (requires `npm run build`)
| `dev:serve`      	| Hot reload | Static
| `dev:client` 		| None | Hot Reload 
| `build` | None | Bundled by Webpack
| `static` | Hot reload | Bundled by Webpack

## Endpoints

### Breweries 

`GET /api/breweries` will return all breweries.

Sample response:

```
{
    "breweries": [
        {
            "_id": "5c339c595372307c10ea5757",
            "updatedAt": "2019-01-07T18:37:13.181Z",
            "createdAt": "2019-01-07T18:37:13.181Z",
            "name": "Our Mutual Friend",
            "description": "Local brewery in Denvers ultra hot RiverNorth neighborhood.",
            "logo": "omf",
            "website": "omf.com",
            "phone": "555-555-5555",
            "email": "info@omf.com",
            "vipId": "1",
            "untappdId": "1",
            "__v": 0,
            "locations": ["5c2fe2eb0902fd6452ec9d21"],
            "users": [
                "5c2fdfb30902fd6452ec9d1e",
                "5c2fe2eb0902fd6452ec9d21"
            ]
        }
    ]
}
```

`GET /api/breweries/:id` will return a single brewery.

Sample response: 

```
{
    "brewery": {
        "_id": "5c339c595372307c10ea5757",
        "updatedAt": "2019-01-07T18:37:13.181Z",
        "createdAt": "2019-01-07T18:37:13.181Z",
        "name": "Our Mutual Friend",
        "description": "Local brewery in Denvers ultra hot RiverNorth neighborhood.",
        "logo": "omf",
        "website": "omf.com",
        "phone": "555-555-5555",
        "email": "info@omf.com",
        "vipId": "1",
        "untappdId": "1",
        "__v": 0,
        "locations": ["5c2fe2eb0902fd6452ec9d21"],
        "users": [
            "5c2fdfb30902fd6452ec9d1e",
            "5c2fe2eb0902fd6452ec9d21"
        ]
    }
}
```

### Beers

`GET /api/beers` will return all beers.

Sample response:

```
{
    "beers": [
        {
            "_id": "5c33ba29aafdc303acdb1ace",
            "updatedAt": "2019-01-07T20:44:25.585Z",
            "createdAt": "2019-01-07T20:44:25.585Z",
            "name": "Kolsch",
            "brewery": "5c339c595372307c10ea5757",
            "releaseDate": "2019-01-08T00:00:00.000Z",
            "description": "wet and cold.",
            "untappdId": "4",
            "srm": 6,
            "ibu": 6,
            "abv": 6,
            "style": "5c33b2a2aafdc303acdb1ac4",
            "packageArt": "image.jpg",
            "inGlassArt": "image.jpg",
            "__v": 0,
            "flavors": [
                "5c33b24aaafdc303acdb1ac1"
            ]
        }
    ]
}
```

`GET /api/beers/:id` will return a single beer.

Sample response:

```
{
    "beer": {
        "_id": "5c33ba29aafdc303acdb1ace",
        "updatedAt": "2019-01-07T20:44:25.585Z",
        "createdAt": "2019-01-07T20:44:25.585Z",
        "name": "Kolsch",
        "brewery": "5c339c595372307c10ea5757",
        "releaseDate": "2019-01-08T00:00:00.000Z",
        "description": "wet and cold",
        "untappdId": "4",
        "srm": 6,
        "ibu": 6,
        "abv": 6,
        "style": "5c33b2a2aafdc303acdb1ac4",
        "packageArt": "image.jpg",
        "inGlassArt": "image.jpg",
        "__v": 0,
        "flavors": [
            "5c33b24aaafdc303acdb1ac1"
        ]
    }
}
```

### Users

`GET /api/users` will return all users.

Sample response:

```
{
    "users": [
        {
            "_id": "5c2fdfb30902fd6452ec9d1e",
            "updatedAt": "2019-01-04T22:35:31.468Z",
            "createdAt": "2019-01-04T22:35:31.468Z",
            "firstname": "Kathleen",
            "lastname": "Kelly",
            "email": "shopgirl@aol.com",
            "role": "Admin",
            "authId": "5c2fdfb30902fd6452ec9d1d",
            "__v": 0,
            "breweries": [
                "5c339c595372307c10ea5757"
            ]
        }
    ]
}
```

`GET /api/users/:id` will return a single user.

Sample response:

```
{
    "user": {
        "_id": "5c2fdfb30902fd6452ec9d1e",
        "updatedAt": "2019-01-04T22:35:31.468Z",
        "createdAt": "2019-01-04T22:35:31.468Z",
        "firstname": "Kathleen",
        "lastname": "Kelly",
        "email": "shopgirl@aol.com",
        "role": "Admin",
        "authId": "5c2fdfb30902fd6452ec9d1d",
        "__v": 0,
        "breweries": [
            "5c339c595372307c10ea5757"
        ]
    }
}
```
