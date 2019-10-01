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
    const elem = await browser.$('#text')
    assert.equal(console.log(elem.getText()), 'JoJo golden wind');
    
    console.log(await browser.getTitle()) 

})().catch((e) => console.error(e))
});
}
)