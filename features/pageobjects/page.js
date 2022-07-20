class homePage
 {
    //selector
    get btnSearch(){return $('/html/body/header/div/div[2]/div/div[2]/div/button')}
    get txtSearch(){return $('//*[@id="search-input--mobile"]')}
    //get result(){return $("//*[@href = 'https://www.verint.com/press-room/2019-press-releases/verint-voice-of-customer-solutions-recognized-among-top-digital-voice-of-customer-voc-specialists-by-independent-research-firm/' and (text() = 'Verint Voice of Customer Solutions Recognized Among Top Digital Voice of Customer (VoC) Specialists by Independent Research Firm' or . = 'Verint Voice of Customer Solutions Recognized Among Top Digital Voice of Customer (VoC) Specialists by Independent Research Firm')]")}
    get result(){return $("//header[@id='site-header']/div/div[2]/div/div[2]/div/div/div/div/div[2]")}
        open(){
        return browser.url(`https://www.verint.com/`)}

       async clickBtnSearch(){
        await this.btnSearch.click();
        }

        // async inputSearchText(){
        //     await this.txtSearch;
        // }

        async searchResult(){
             await this.result.getText();  
         }
}
export default new homePage();