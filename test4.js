const { remote } = require('webdriverio');
var assert = require('assert');
var should = require("should");
var supertest = require("supertest");
var mocha = require('mocha');

describe("Рандомный тест яндекса", function(){
    it("Test#1", function(){
 (async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })
    await browser.url('https://yandex.ru/')
    const inputElem = await browser.$('#text')
    await inputElem.setValue('JoJo golden wind');
    
    const submitBtn = await browser.$('.button_theme_websearch')
    await submitBtn.click();

    const button = await browser.$('.link_cropped_no')
    await button.click();

    const next_button = await browser.$('.service_name_images');
    await next_button.click()
    assert.equal(console.log(browser.getUrl()), "https://yandex.ru/images/search?from=tabbar&text=JoJo%20golden%20wind")

    console.log(await browser.getTitle()) 

})().catch((e) => console.error(e))
});
}
)