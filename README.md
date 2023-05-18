# party-scoring-web

This is a website specially made for Anime World Indonesia community. The main purpose is just to let our Otaku Expert do their job properly. The old
way we do party scoring heavily depend on Google Sheet. Mes is the only person that do all the hard work, like gathering all video sources, creating
the spreadsheet, and making sure everyone volunteered in the party scoring gives their score.

The main downside of using spreadsheet is that everyone could see another's score, so there will be bias in their judgement on how much score they
gave. Furthermore, elitist in AWI will always got butthurt whenever their favourite song got poorly rated. Even if the others have the same opinion,
those elitists will always find their way to diss and tell them about their shitty taste.

I actually made improvement in the spreadsheet, in which every person has their own sheet, so that no one can see each other's score. But it is a pain
to setup and eventually we discard it.

## Developing

```bash
# clone to local
git clone https://github.com/Plyrs1/party-scoring-web
cd party-scoring-web

# install required packages
yarn

# start the server
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

To create a production version of your app:

```bash
yarn build
```

## Self-hosting

Currently, this project lives in [https://scoring.plyrs.party/](https://scoring.plyrs.party/), and the development version in
[https://scoring-dev.plyrs.party/](https://scoring-dev.plyrs.party/). But if somehow you want to run this website for your own community, you can!
This project is licensed under MIT License, you are free to do whatever you want, all you have to do is just keep the credit and license intact.

In the future, I am planning to add feature that allows other community to create their own group, so that they could start party scoring by
themselves.
