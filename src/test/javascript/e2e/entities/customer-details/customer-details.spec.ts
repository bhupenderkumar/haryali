/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CustomerDetailsComponentsPage, CustomerDetailsDeleteDialog, CustomerDetailsUpdatePage } from './customer-details.page-object';

const expect = chai.expect;

describe('CustomerDetails e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let customerDetailsUpdatePage: CustomerDetailsUpdatePage;
  let customerDetailsComponentsPage: CustomerDetailsComponentsPage;
  /*let customerDetailsDeleteDialog: CustomerDetailsDeleteDialog;*/

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load CustomerDetails', async () => {
    await navBarPage.goToEntity('customer-details');
    customerDetailsComponentsPage = new CustomerDetailsComponentsPage();
    await browser.wait(ec.visibilityOf(customerDetailsComponentsPage.title), 5000);
    expect(await customerDetailsComponentsPage.getTitle()).to.eq('haryaliApp.customerDetails.home.title');
  });

  it('should load create CustomerDetails page', async () => {
    await customerDetailsComponentsPage.clickOnCreateButton();
    customerDetailsUpdatePage = new CustomerDetailsUpdatePage();
    expect(await customerDetailsUpdatePage.getPageTitle()).to.eq('haryaliApp.customerDetails.home.createOrEditLabel');
    await customerDetailsUpdatePage.cancel();
  });

  /* it('should create and save CustomerDetails', async () => {
        const nbButtonsBeforeCreate = await customerDetailsComponentsPage.countDeleteButtons();

        await customerDetailsComponentsPage.clickOnCreateButton();
        await promise.all([
            customerDetailsUpdatePage.genderSelectLastOption(),
            customerDetailsUpdatePage.setPhoneInput('phone'),
            customerDetailsUpdatePage.setAddressLine1Input('addressLine1'),
            customerDetailsUpdatePage.setAddressLine2Input('addressLine2'),
            customerDetailsUpdatePage.setCityInput('city'),
            customerDetailsUpdatePage.setCountryInput('country'),
            customerDetailsUpdatePage.userSelectLastOption(),
        ]);
        expect(await customerDetailsUpdatePage.getPhoneInput()).to.eq('phone', 'Expected Phone value to be equals to phone');
        expect(await customerDetailsUpdatePage.getAddressLine1Input()).to.eq('addressLine1', 'Expected AddressLine1 value to be equals to addressLine1');
        expect(await customerDetailsUpdatePage.getAddressLine2Input()).to.eq('addressLine2', 'Expected AddressLine2 value to be equals to addressLine2');
        expect(await customerDetailsUpdatePage.getCityInput()).to.eq('city', 'Expected City value to be equals to city');
        expect(await customerDetailsUpdatePage.getCountryInput()).to.eq('country', 'Expected Country value to be equals to country');
        await customerDetailsUpdatePage.save();
        expect(await customerDetailsUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

        expect(await customerDetailsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
    });*/

  /* it('should delete last CustomerDetails', async () => {
        const nbButtonsBeforeDelete = await customerDetailsComponentsPage.countDeleteButtons();
        await customerDetailsComponentsPage.clickOnLastDeleteButton();

        customerDetailsDeleteDialog = new CustomerDetailsDeleteDialog();
        expect(await customerDetailsDeleteDialog.getDialogTitle())
            .to.eq('haryaliApp.customerDetails.delete.question');
        await customerDetailsDeleteDialog.clickOnConfirmButton();

        expect(await customerDetailsComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
