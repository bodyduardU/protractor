/// <reference path="../../built/ambient.d.ts" />
import {ElementArrayFinder, ElementFinder, ElementHelper, ProtractorBy} from 'protractor';
let element: ElementHelper;
let by: ProtractorBy;
let $: (search: string) => ElementFinder;
let $$: (search: string) => ElementArrayFinder;
element.all(by.css('')).clone('clone');
element.all(by.css('')).clone(1);
element.all(by.css('')).clone(false);
element.all(by.css('')).clone(() => {});
element.all(by.css('')).then();
element.all(by.css('')).then(() => {});
element.all(by.css('')).then('fn');
element.all(by.css('')).then('fn', 'err');
element.all(by.css('')).then(1);
element.all(by.css('')).then(1, -1);
element.all(by.css('')).then(false);
element.all(by.css('')).then(false, false);
element.all(by.css('')).then(1, 'err');
element.all(by.css('')).then(() => {}, () => {}, () => {});
element.all(by.css('')).filter('filter');
element.all(by.css('')).filter(1);
element.all(by.css('')).filter(false);
element.all(by.css('')).get('0');
element.all(by.css('')).get(false);
element.all(by.css('')).get(() => {});
element.all(by.css('')).first('first');
element.all(by.css('')).first(true);
element.all(by.css('')).first(0);
element.all(by.css('')).first(() =>{});
element.all(by.css('')).last('last');
element.all(by.css('')).last(false);
element.all(by.css('')).last(0);
element.all(by.css('')).last(() => {});
element.all(by.css('')).count('count');
element.all(by.css('')).count(false);
element.all(by.css('')).count(0);
element.all(by.css('')).count(() => {});
element.all(by.css('')).locator('locator');
element.all(by.css('')).locator(false);
element.all(by.css('')).locator(1);
element.all(by.css('')).locator(() => {});
element.all(by.css('')).each('each');
element.all(by.css('')).each(1);
element.all(by.css('')).each(false);
element.all(by.css('')).each(() => {} , () => {});
element.all(by.css('')).map('map');
element.all(by.css('')).map(1);
element.all(by.css('')).map(false);
element.all(by.css('')).map(() => {} , () => {});
element.all(by.css('')).reduce('reduce');
element.all(by.css('')).reduce(1);
element.all(by.css('')).reduce(false);
element.all(by.css('')).reduce(() => {}, '', 'additional param');
element.all(by.css('')).evaluate(1);
element.all(by.css('')).evaluate(false);
element.all(by.css('')).evaluate(() => {});
element.all(by.css('')).allowAnimations(0);
element.all(by.css('')).allowAnimations('true');
element.all(by.css('')).allowAnimations(() => {});
element.all(by.css('')).$$(0);
element.all(by.css('')).$$(true);
element.all(by.css('')).$$(() => {});
element.all(by.css('')).getDriver(0);
element.all(by.css('')).getDriver('1');
element.all(by.css('')).getDriver(true);
element.all(by.css('')).getDriver(() => {});
element.all(by.css('')).getId(0);
element.all(by.css('')).getId('1');
element.all(by.css('')).getId(true);
element.all(by.css('')).getId(() => {});
element.all(by.css('')).getRawId(0);
element.all(by.css('')).getRawId('1');
element.all(by.css('')).getRawId(true);
element.all(by.css('')).getRawId(() => {});
element.all(by.css('')).serialize(0);
element.all(by.css('')).serialize('1');
element.all(by.css('')).serialize(true);
element.all(by.css('')).serialize(() => {});
element.all(by.css('')).click(0);
element.all(by.css('')).click('1');
element.all(by.css('')).click(true);
element.all(by.css('')).click(() => {});
element.all(by.css('')).getTagName(0);
element.all(by.css('')).getTagName('1');
element.all(by.css('')).getTagName(true);
element.all(by.css('')).getTagName(() => {});
element.all(by.css('')).getCssValue();
element.all(by.css('')).getCssValue(0);
element.all(by.css('')).getCssValue(true);
element.all(by.css('')).getCssValue(() => {});
element.all(by.css('')).getAttribute();
element.all(by.css('')).getAttribute(0);
element.all(by.css('')).getAttribute(true);
element.all(by.css('')).getAttribute(() => {});
element.all(by.css('')).getText(0);
element.all(by.css('')).getText('1');
element.all(by.css('')).getText(true);
element.all(by.css('')).getText(() => {});
element.all(by.css('')).getSize(0);
element.all(by.css('')).getSize('1');
element.all(by.css('')).getSize(true);
element.all(by.css('')).getSize(() => {});
element.all(by.css('')).getLocation(0);
element.all(by.css('')).getLocation('1');
element.all(by.css('')).getLocation(true);
element.all(by.css('')).getLocation(() => {});
element.all(by.css('')).isEnabled(0);
element.all(by.css('')).isEnabled('1');
element.all(by.css('')).isEnabled(true);
element.all(by.css('')).isEnabled(() => {});
element.all(by.css('')).isSelected(0);
element.all(by.css('')).isSelected('1');
element.all(by.css('')).isSelected(true);
element.all(by.css('')).isSelected(() => {});
element.all(by.css('')).submit(0);
element.all(by.css('')).submit('1');
element.all(by.css('')).submit(true);
element.all(by.css('')).submit(() => {});
element.all(by.css('')).clear(0);
element.all(by.css('')).clear('1');
element.all(by.css('')).clear(true);
element.all(by.css('')).clear(() => {});
element.all(by.css('')).isDisplayed(0);
element.all(by.css('')).isDisplayed('1');
element.all(by.css('')).isDisplayed(true);
element.all(by.css('')).isDisplayed(() => {});
element.all(by.css('')).takeScreenshot(0);
element.all(by.css('')).takeScreenshot('1');
element.all(by.css('')).takeScreenshot(() => {});
element.all(by.css('')).getOuterHtml(0);
element.all(by.css('')).getOuterHtml('1');
element.all(by.css('')).getOuterHtml(true);
element.all(by.css('')).getOuterHtml(() => {});
element.all(by.css('')).getInnerHtml(0);
element.all(by.css('')).getInnerHtml('1');
element.all(by.css('')).getInnerHtml(true);
element.all(by.css('')).getInnerHtml(() => {});
$$('').clone('clone');
$$('').clone(1);
$$('').clone(false);
$$('').clone(() => {});
$$('').then();
$$('').then(() => {});
$$('').then('fn');
$$('').then('fn', 'err');
$$('').then(1);
$$('').then(1, -1);
$$('').then(false);
$$('').then(false, false);
$$('').then(1, 'err');
$$('').then(() => {}, () => {}, () => {});
$$('').filter('filter');
$$('').filter(1);
$$('').filter(false);
$$('').get('0');
$$('').get(false);
$$('').get(() => {});
$$('').first('first');
$$('').first(true);
$$('').first(0);
$$('').first(() =>{});
$$('').last('last');
$$('').last(false);
$$('').last(0);
$$('').last(() => {});
$$('').count('count');
$$('').count(false);
$$('').count(0);
$$('').count(() => {});
$$('').locator('locator');
$$('').locator(false);
$$('').locator(1);
$$('').locator(() => {});
$$('').each('each');
$$('').each(1);
$$('').each(false);
$$('').each(() => {} , () => {});
$$('').map('map');
$$('').map(1);
$$('').map(false);
$$('').map(() => {} , () => {});
$$('').reduce('reduce');
$$('').reduce(1);
$$('').reduce(false);
$$('').reduce(() => {}, '', 'additional param');
$$('').evaluate(1);
$$('').evaluate(false);
$$('').evaluate(() => {});
$$('').allowAnimations(0);
$$('').allowAnimations('true');
$$('').allowAnimations(() => {});
$$('').$$(0);
$$('').$$(true);
$$('').$$(() => {});
$$('').getDriver(0);
$$('').getDriver('1');
$$('').getDriver(true);
$$('').getDriver(() => {});
$$('').getId(0);
$$('').getId('1');
$$('').getId(true);
$$('').getId(() => {});
$$('').getRawId(0);
$$('').getRawId('1');
$$('').getRawId(true);
$$('').getRawId(() => {});
$$('').serialize(0);
$$('').serialize('1');
$$('').serialize(true);
$$('').serialize(() => {});
$$('').click(0);
$$('').click('1');
$$('').click(true);
$$('').click(() => {});
$$('').getTagName(0);
$$('').getTagName('1');
$$('').getTagName(true);
$$('').getTagName(() => {});
$$('').getCssValue();
$$('').getCssValue(0);
$$('').getCssValue(true);
$$('').getCssValue(() => {});
$$('').getAttribute();
$$('').getAttribute(0);
$$('').getAttribute(true);
$$('').getAttribute(() => {});
$$('').getText(0);
$$('').getText('1');
$$('').getText(true);
$$('').getText(() => {});
$$('').getSize(0);
$$('').getSize('1');
$$('').getSize(true);
$$('').getSize(() => {});
$$('').getLocation(0);
$$('').getLocation('1');
$$('').getLocation(true);
$$('').getLocation(() => {});
$$('').isEnabled(0);
$$('').isEnabled('1');
$$('').isEnabled(true);
$$('').isEnabled(() => {});
$$('').isSelected(0);
$$('').isSelected('1');
$$('').isSelected(true);
$$('').isSelected(() => {});
$$('').submit(0);
$$('').submit('1');
$$('').submit(true);
$$('').submit(() => {});
$$('').clear(0);
$$('').clear('1');
$$('').clear(true);
$$('').clear(() => {});
$$('').isDisplayed(0);
$$('').isDisplayed('1');
$$('').isDisplayed(true);
$$('').isDisplayed(() => {});
$$('').takeScreenshot(0);
$$('').takeScreenshot('1');
$$('').takeScreenshot(() => {});
$$('').getOuterHtml(0);
$$('').getOuterHtml('1');
$$('').getOuterHtml(true);
$$('').getOuterHtml(() => {});
$$('').getInnerHtml(0);
$$('').getInnerHtml('1');
$$('').getInnerHtml(true);
$$('').getInnerHtml(() => {});
element(by.css('')).then('0');
element(by.css('')).then('0','1');
element(by.css('')).then(0);
element(by.css('')).then(0,1);
element(by.css('')).then(false,false);
element(by.css('')).then(() => {},() => {}, () => {});
element(by.css('')).clone(0);
element(by.css('')).clone('1');
element(by.css('')).clone(true);
element(by.css('')).clone(() => {});
element(by.css('')).locator(0);
element(by.css('')).locator('1');
element(by.css('')).locator(true);
element(by.css('')).locator(() => {});
element(by.css('')).getWebElement(0);
element(by.css('')).getWebElement('1');
element(by.css('')).getWebElement(true);
element(by.css('')).getWebElement(() => {});
element(by.css('')).$(0);
element(by.css('')).$(true);
element(by.css('')).$(() => {});
element(by.css('')).$$(0);
element(by.css('')).$$(true);
element(by.css('')).$$(() => {});
element(by.css('')).isPresent(0);
element(by.css('')).isPresent('1');
element(by.css('')).isPresent(true);
element(by.css('')).isPresent(() => {});
element(by.css('')).evaluate(0);
element(by.css('')).evaluate(true);
element(by.css('')).evaluate(() => {});
element(by.css('')).allowAnimations(0);
element(by.css('')).allowAnimations('1');
element(by.css('')).allowAnimations(() => {});
element(by.css('')).getDriver(0);
element(by.css('')).getDriver('1');
element(by.css('')).getDriver(true);
element(by.css('')).getDriver(() => {});
element(by.css('')).getId(0);
element(by.css('')).getId('1');
element(by.css('')).getId(true);
element(by.css('')).getId(() => {});
element(by.css('')).getRawId(0);
element(by.css('')).getRawId('1');
element(by.css('')).getRawId(true);
element(by.css('')).getRawId(() => {});
element(by.css('')).serialize(0);
element(by.css('')).serialize('1');
element(by.css('')).serialize(true);
element(by.css('')).serialize(() => {});
element(by.css('')).click(0);
element(by.css('')).click('1');
element(by.css('')).click(true);
element(by.css('')).click(() => {});
element(by.css('')).getTagName(0);
element(by.css('')).getTagName('1');
element(by.css('')).getTagName(true);
element(by.css('')).getTagName(() => {});
element(by.css('')).getCssValue(0);
element(by.css('')).getCssValue(true);
element(by.css('')).getCssValue(() => {});
element(by.css('')).getAttribute(0);
element(by.css('')).getAttribute(true);
element(by.css('')).getAttribute(() => {});
element(by.css('')).getText(0);
element(by.css('')).getText('1');
element(by.css('')).getText(true);
element(by.css('')).getText(() => {});
element(by.css('')).getSize(0);
element(by.css('')).getSize('1');
element(by.css('')).getSize(true);
element(by.css('')).getSize(() => {});
element(by.css('')).getLocation(0);
element(by.css('')).getLocation('1');
element(by.css('')).getLocation(true);
element(by.css('')).getLocation(() => {});
element(by.css('')).isEnabled(0);
element(by.css('')).isEnabled('1');
element(by.css('')).isEnabled(true);
element(by.css('')).isEnabled(() => {});
element(by.css('')).isSelected(0);
element(by.css('')).isSelected('1');
element(by.css('')).isSelected(true);
element(by.css('')).isSelected(() => {});
element(by.css('')).submit(0);
element(by.css('')).submit('1');
element(by.css('')).submit(true);
element(by.css('')).submit(() => {});
element(by.css('')).clear(0);
element(by.css('')).clear('1');
element(by.css('')).clear(true);
element(by.css('')).clear(() => {});
element(by.css('')).isDisplayed(0);
element(by.css('')).isDisplayed('1');
element(by.css('')).isDisplayed(true);
element(by.css('')).isDisplayed(() => {});
element(by.css('')).takeScreenshot(0);
element(by.css('')).takeScreenshot(() => {});
element(by.css('')).getOuterHtml(0);
element(by.css('')).getOuterHtml('1');
element(by.css('')).getOuterHtml(true);
element(by.css('')).getOuterHtml(() => {});
element(by.css('')).getInnerHtml(0);
element(by.css('')).getInnerHtml('1');
element(by.css('')).getInnerHtml(true);
element(by.css('')).getInnerHtml(() => {});
$('').then('0');
$('').then('0','1');
$('').then(0);
$('').then(0,1);
$('').then(false,false);
$('').then(() => {},() => {}, () => {});
$('').clone(0);
$('').clone('1');
$('').clone(true);
$('').clone(() => {});
$('').locator(0);
$('').locator('1');
$('').locator(true);
$('').locator(() => {});
$('').getWebElement(0);
$('').getWebElement('1');
$('').getWebElement(true);
$('').getWebElement(() => {});
$('').$(0);
$('').$(true);
$('').$(() => {});
$('').$$(0);
$('').$$(true);
$('').$$(() => {});
$('').isPresent(0);
$('').isPresent('1');
$('').isPresent(true);
$('').isPresent(() => {});
$('').evaluate(0);
$('').evaluate(true);
$('').evaluate(() => {});
$('').allowAnimations(0);
$('').allowAnimations('1');
$('').allowAnimations(() => {});
$('').getDriver(0);
$('').getDriver('1');
$('').getDriver(true);
$('').getDriver(() => {});
$('').getId(0);
$('').getId('1');
$('').getId(true);
$('').getId(() => {});
$('').getRawId(0);
$('').getRawId('1');
$('').getRawId(true);
$('').getRawId(() => {});
$('').serialize(0);
$('').serialize('1');
$('').serialize(true);
$('').serialize(() => {});
$('').click(0);
$('').click('1');
$('').click(true);
$('').click(() => {});
$('').getTagName(0);
$('').getTagName('1');
$('').getTagName(true);
$('').getTagName(() => {});
$('').getCssValue(0);
$('').getCssValue(true);
$('').getCssValue(() => {});
$('').getAttribute(0);
$('').getAttribute(true);
$('').getAttribute(() => {});
$('').getText(0);
$('').getText('1');
$('').getText(true);
$('').getText(() => {});
$('').getSize(0);
$('').getSize('1');
$('').getSize(true);
$('').getSize(() => {});
$('').getLocation(0);
$('').getLocation('1');
$('').getLocation(true);
$('').getLocation(() => {});
$('').isEnabled(0);
$('').isEnabled('1');
$('').isEnabled(true);
$('').isEnabled(() => {});
$('').isSelected(0);
$('').isSelected('1');
$('').isSelected(true);
$('').isSelected(() => {});
$('').submit(0);
$('').submit('1');
$('').submit(true);
$('').submit(() => {});
$('').clear(0);
$('').clear('1');
$('').clear(true);
$('').clear(() => {});
$('').isDisplayed(0);
$('').isDisplayed('1');
$('').isDisplayed(true);
$('').isDisplayed(() => {});
$('').takeScreenshot(0);
$('').takeScreenshot(() => {});
$('').getOuterHtml(0);
$('').getOuterHtml('1');
$('').getOuterHtml(true);
$('').getOuterHtml(() => {});
$('').getInnerHtml(0);
$('').getInnerHtml('1');
$('').getInnerHtml(true);
$('').getInnerHtml(() => {});
