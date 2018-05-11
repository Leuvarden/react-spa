import puppeteer from 'puppeteer';
import ContentArea from './../src/components/main/ContentArea.js';
import React from 'react';
import response from './movies';

/* eslint-disable no-undef */
describe('e2e tests', async () => {

    let page;
    let browser;

    beforeAll(async () =>{
        browser = await puppeteer.launch({
            headless: false
        });
    
        page = await browser.newPage();

        await page.goto('localhost:8080');
    });

    afterAll( () => {
        browser.close();
    });


    it('shows logo', async () => {
        await page.waitForSelector('.logo');

        const html = await page.$eval('.logo', e => e.innerHTML);
        expect(html).toBe('netflixroulette');
    });

    it('shows content', async () => {
        const main = shallow(<ContentArea />);
        main.setState({contentData: response.data});

        await page.waitForSelector('.content-item');
        const itemsCount = await page.$$eval('.content-item', e => e.length);
        //it gets like 6 movies from herokuapp
        expect(itemsCount).toBeGreaterThanOrEqual(6);

        //it renders filmPanel on click
        let html = await page.$('.film-panel');
        expect(html).toBeNull();
        
        await page.click('.content-item');
        await page.waitForSelector('.film-panel');
        html = await page.$eval('.film-panel', e => e.innerHTML);
        expect(html).toBeDefined();
    });


}, 10000);
