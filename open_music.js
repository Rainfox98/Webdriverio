const { remote } = require('webdriverio');
var assert = require('assert');

//describe("Тест яндекс музыки", function(){
    //it("Должна включиться песня The Husk", function(){
(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://yandex.ru/')
    
    const music = await browser.$('=Музыка')
    await music.click();

    const inputElem = await browser.$('.d-input__field')
    await inputElem.setValue('Rings of Saturn');

    focus = await browser.$('//*[text()="Rings of Saturn"]/parent::div/parent::div/child::a');
    await focus.click();
     
    const choose_track = await browser.$('//span[@class="button2__label"]')
    await choose_track.click();
    
    const the_husk = await browser.$('//div[@title="Пауза [P]"]/following-sibling::div');
    await the_husk.click();
    
    //var equal_song = await browser.$('//div[class="d-track__bubble"]/parent::div[class="d-track__start-column"]//a');
    //assert.equal(equal_song.getText(), "The Husk")

    console.log(await browser.getTitle())
})().catch((e) => console.error(e))
//})
//})