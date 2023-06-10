# CoffeeShop

## First Time:
- Clone the project with `git clone https://github.com/CoffeeShopTeam/CoffeeShop.git`.
- Install project's dependencies: `npm i`

## Develpment a new feature
### git
- Update the project: `git pull origin main`
- Create new branch and move to it: `git checkout -b branch-name`
- Add your changes to staging area: `git add .`
- Commit the changes you made: `git commit -m "meaningful message"`
- Publish the changes: `git push -u origin branch-name`
- Create a Pull Request on github.
- Wait to approval / fix the Code Review comments.
- Merge your branch to main with github.
### run project:
- `npm start`

### Structure
```
.
├── app.js
├── package.json
└── src
    ├── controllers
    │   ├── userController.js
    │   └── ...
    ├── models
    │   ├── user.js
    │   └── ...
    ├── public
    │   ├── css
    │   ├── js
    │   └── ...
    ├── routes
    │   ├── index.js
    │   ├── userRoutes.js
    │   └── ...
    └── views
        ├── layouts
        ├── partials
        └── ...
        ```
