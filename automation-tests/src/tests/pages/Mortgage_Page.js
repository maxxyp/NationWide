class Mortgage_Page {
    get mortgage() {return $("[data-di-id='di-id-e8267c30-3936b64a']");}
    get firstTimeBuyers() {return $("[data-di-id='di-id-39506c08-d37633eb']");}
    get mortgageRates() {return $("div > ul > li.backgroundStyle06.step3.equalised > details > span > a");}
    get nationWideMortgageNo() {return $("[data-di-id='\\#selectorItemNationwideMortgageTypeNo2'] span");}
    get propertyValue() {return $("#SearchPropertyValue");}
    get depositAmount() {return $("#SearchDepositAmount");}
    get term() {return $("#SearchMortgageTerm");}
    get findMortgageRateBtn() {return $("[data-di-id='\\#myButton']");}

    clickMortgageButton(){
        return this.mortgage.click();
    }

    clickFirstTimeBuyersButton(){
        return this.firstTimeBuyers.click();
    }

    clickMortgageRatesButton(){
        return this.mortgageRates.click();
    }

    clickNationWideMortgageNoButton(){
        return this.nationWideMortgageNo.click();
    }

    setPropertyValue(property_value){
        return this.propertyValue.setValue(property_value);
    }

    setDepositAmount(deposit_amount){
        return this.depositAmount.setValue(deposit_amount);
    }

    setTerm(terms){
        return this.term.setValue(terms);
    }

    clickFindMortgageRatesButton(){
        return this.findMortgageRateBtn.click();
    }


}
// When you create page object you need to export it within your tests
module.exports  =  new Mortgage_Page();
