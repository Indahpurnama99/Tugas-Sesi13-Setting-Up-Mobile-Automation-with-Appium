describe('ApiDemos App Test', () => {
    it('should open the app and find the App menu', async () => {
          
        const el = await $('~App');
        
        await el.waitForExist({ timeout: 5000 });
        
        const text = await el.getText();
        console.log('Element found:', text);
    });
});
