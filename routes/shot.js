var express = require('express');
var puppeteer = require('puppeteer');

const router = express.Router();

router.get('/', async function(req, res, next) {
    console.log(req.query.url);

    puppyShot(req.query.url);

    res.render('shot', { title: 'Express' });
});

const puppyShot = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.emulateMedia('screen');
    await page.pdf({path: 'page.pdf', format: 'A4'});

    await browser.close();
};

module.exports = router;
