describe('async angular2 application', function() {
  beforeEach(function() {
    browser.get('/hybrid');
  });

  it('should propertly load the page', function() {
    expect($('h1').getText()).toEqual('My App');
  });

  it('should be able to click buttons and wait for $timeout', function() {
    var rootBtn = $$('my-app button').first();
    expect(rootBtn.getText()).toEqual('Click Count: 0');
    rootBtn.click();
    expect(rootBtn.getText()).toEqual('Click Count: 1');

    var ng2Btn = $$('ng2 button').first();
    expect(ng2Btn.getText()).toEqual('Click Count: 0');
    ng2Btn.click();
    expect(ng2Btn.getText()).toEqual('Click Count: 1');

    var ng1Btn = $('ng1 button');
    expect(ng1Btn.getText()).toEqual('Click Count: 0');
    ng1Btn.click();
    expect(ng1Btn.getText()).toEqual('Click Count: 1');
  });
});
