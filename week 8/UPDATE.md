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
exports.register = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)      
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      res.redirect('/login')
    } catch(err) {
      res.redirect('/register')
    }
    }
};
```

#### After

Same as with login, a successful register should return status 200 - OK and include the same JSON response.

```javascript
// @access Public
exports.register = async (req, res, next) => {
  
  const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        message: `Email <${req.body.email}> already taken`,
      });
    } else {
    
     try { 
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newuser = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        });
           res.status(200).json({
              email: newuser.email,
              name: newuser.name,
           });
     }catch(error) {
        console.log(error)
        next(error);
    }
  };
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

We need to tweak `express-session` configuration to be able to store user sessions in the browser's cookies after a successful login. Otherwise, authenticated API routes will not work. We also need to install and use connect-mongo module, to store the session info in our mongodb.

```javascript

const MongoStore = require("connect-mongo");

const sessionStore = new MongoStore({
  mongoUrl: process.env.MONGO_URL,
  collection: "sessions",
});

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  unset: "destroy",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: true,
    secure: process.env.NODE_ENV !== "development"
  },
}));
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

// ********* CORS SETUP *************
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
  });
  
  app.use(
    cors({
      credentials: true,
      allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
    })
  );
  app.set("trust proxy", 1);
// ********* CORS SETUP *************
```
