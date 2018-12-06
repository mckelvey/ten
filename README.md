# Ten

This is a simple and fun celebration of my decade on GitHub.

I was passing through my profile page on GitHub a month ago and saw that my decade anniversary was coming up and realized how much fun it would be to do something simple to celebrate, and what better way than to build something and publish it on GitHub.

You’ll see that my early days are pretty spare— like one commit and then six months of silence. :) But I’ve made up for it since.

How about you? How long have you been committing to GitHub? (Oh yes, that pun was intended.) Naturally, you can fork this repo and make it your own. Can you improve on the graph? How about the content? I’m sure you can best my numbers, but this is more about the fun than the actual commits. If you do make something, let me know as I’d love to see where this goes. I’ll post any great examples.

~ David ~
6 Dec 2018

[Sites made for people.](https://sitesmade4people.co)
[mckelvey/creative](https://mckelveycreative.com)

### Make Your Ten (or Five)

Fork this repository and install the needed dependencies. I used node v10.13.0 managed by nvm and have committed an `.nvmrc` file for ease, otherwise be sure to have node v10 available as your default.

```
$ yarn install
```

#### Updating the Data

Since this was intended as a snapshot rather than a “live” commit count, I used the GitHub-provided SVGs shown on my contribution activity rather than digging into the API. (Literally, I copied the `<svg>` element for each year into a file in `data/`.) I then wrote a simple parser that would extract the needed days and commit information into a master file.

You can do the same. Update or delete the SVG files in `data/` and then re-run the parser.

```
$ yarn parse
```

#### Development through to Production

After this, it’s up to you to make it your own. Please do change the colors and other styles, how the graph iterates, etc. This app uses `react-static` under the hood if you want to go deep, but all the basic scripts are available in the package.

```
$ yarn start # run development with HMR
$ yarn stage # build to dist/ for testing with ...
$ yarn serve # serve stage from dist/
$ yarn build # build for production
$ yarn deploy # deploy to GitHub pages
```

Be sure and update the `siteRoot` (and `basePath` if your repo name isn’t ten) in `static.config.js` before building for production and deploying to ensure that your fork is referenced properly.

## Contributions

Since this is my snapshot, contributions are welcome but should focus on errors and issues in the process of making it your own, or extending it to allow for other technologies where not already possible. Create a PR to suggest changes and fix issues.
