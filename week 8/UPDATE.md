# UPDATE 26/07/2021

With its original approach, the API was meant to be deployed along with the frontend application, so they would share the same domain. But this is not our current approach for the frontend application and therefore we need the API to be completely decoupled from it.

So we need to make some small changes in our authentication controller.

## Updating API controller methods

### Login method

#### Before

Previously, login would redirect the application to one page or another based on whether the authentication was successful or not.

```javascript
// @access Public
exports.login = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/", //page all movies with some functionality like add?
    failureRedirect: "/", //redirect to a page == to decide which TODO
  })(req, res, next);
};
```

#### After

Login will simply return status 401 - Unauthorized when authentication fails for whatever reason, and status 200 - OK when it's successful.
Additionally you can return a JSON response with the user's information.

```javascript
// @access Public
exports.login = (req, res, next) => {
  passport.authenticate("local", function (err, user) {
    if (err || !user) {
      res.status(401).send("Unauthorized");
    } else {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          email: user.email,
          name: user.name,
        });
      });
    }
  })(req, res, next);
};
```

### Logout method

#### Before

Previously, logout would redirect to a page in our application with `res.redirect('/')`.

```javascript
// @access Public
exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/"); //TODO decide which page
};
```

#### After

Logout will simply return status 200 OK

```javascript
// @access Public
exports.logout = (req, res) => {
  req.logout();
  res.clearCookie("connect.sid", { path: "/" });
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).send();
  });
};
```

### Register method

#### Before

Previously, a successful register operation would redirect to a page in our application with `res.redirect('/')`.

```javascript
// @access Public
exports.register = (req, res, next) => {
  User.findOne({ email: req.body.email }, function (error, user) {
    if (user) {
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
      let user = new User(req.body);
      user.generateHashPassword(req.body.password);
      user.save((error, User) => {
        if (error) {
          next(error);
        } else {
          //Auto-login
          req.login(user, function (err) {
            if (err) {
              next(err);
            }
            res.redirect("/");
          });
        }
      });
    }
  });
};
```

#### After

Same as with login, a successful register should return status 200 - OK and include the same JSON response.

```javascript
// @access Public
exports.register = (req, res, next) => {
  User.findOne({ email: req.body.email }, function (error, user) {
    if (user) {
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
      let user = new User(req.body);

      user.generateHashPassword(req.body.password);
      user.save((error) => {
        if (error) {
          next(error);
        } else {
          //Auto-login
          req.login(user, function (err) {
            if (err) {
              next(err);
            }
            res.status(200).json({
              email: user.email,
              name: user.name,
            });
          });
        }
      });
    }
  });
};
```

### Get user method

This is a new method we need to add in order to retrieve a user's information while their session is still active; i.e. when we reload the movies app, if we were already logged in we should stay logged in!

#### Add a new authentication route

```javascript
[...]

router.get("/getuser", authController.getUser);
```

#### Add the `getUser` method in the authentication controller

```javascript
exports.getUser = (req, res) => {
  res.status(200);

  if (!req.isAuthenticated()) {
    res.send();
  } else {
    res.json({
      email: req.user.email,
      name: req.user.name,
    });
  }
};
```

## Configure `express-session`

We need to tweak `express-session` configuration to be able to store user sessions in the browser's cookies after a successful login. Otherwise, authenticated API routes will not work.

```javascript
module.exports = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    httpOnly: true,
    maxAge: ONE_DAY,
    sameSite: "none",
    secure: process.env.NODE_ENV !== "development",
  },
});
```

## Configure CORS

If you haven't done so yet, add the `cors` dependency to your node project.

```
npm install cors
```

Then use it in the main file, where the Express server is instantiated and started.

```javascript
const cors = require("cors");

[...]

const app = express();
app.use(cors({ origin: "*", credentials: true }));
```
