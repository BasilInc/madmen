# Madmen

A Mongoose/Express admin section to manage mongoose resources

## Basic Usage

You can mount madmen anywhere in your application but generally you want to mount it behind admin authentication

    var madmen = require('madmen');

    app.use('/admin', requireAdmin(), madmen.init({
      '/users'    : 'User',
      '/projects' : 'Project'
    }));

And thats it

There will be customization options coming in the future but for thats all you need.