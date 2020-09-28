/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProductOrderComponentsPage, ProductOrderDeleteDialog, ProductOrderUpdatePage } from './product-order.page-object';

const expect = chai.expect;

describe('ProductOrder e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let productOrderUpdatePage: ProductOrderUpdatePage;
  let productOrderComponentsPage: ProductOrderComponentsPage;
  /*let productOrderDeleteDialog: ProductOrderDeleteDialog;*/

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load ProductOrders', async () => {
    await navBarPage.goToEntity('product-order');
    productOrderComponentsPage = new ProductOrderComponentsPage();
    await browser.wait(ec.visibilityOf(productOrderComponentsPage.title), 5000);
    expect(await productOrderComponentsPage.getTitle()).to.eq('haryaliApp.productOrder.home.title');
  });

  it('should load create ProductOrder page', async () => {
    await productOrderComponentsPage.clickOnCreateButton();
    productOrderUpdatePage = new ProductOrderUpdatePage();
    expect(await productOrderUpdatePage.getPageTitle()).to.eq('haryaliApp.productOrder.home.createOrEditLabel');
    await productOrderUpdatePage.cancel();
  });

  /* it('should create and save ProductOrders', async () => {
        const nbButtonsBeforeCreate = await productOrderComponentsPage.countDeleteButtons();

        await productOrderComponentsPage.clickOnCreateButton();
        await promise.all([
            productOrderUpdatePage.setQuantityInput('5'),
            productOrderUpdatePage.setTotalPriceInput('5'),
            productOrderUpdatePage.productSelectLastOption(),
            productOrderUpdatePage.cartSelectLastOption(),
        ]);
        expect(await productOrderUpdatePage.getQuantityInput()).to.eq('5', 'Expected quantity value to be equals to 5');
        expect(await productOrderUpdatePage.getTotalPriceInput()).to.eq('5', 'Expected totalPrice value to be equals to 5');
        await productOrderUpdatePage.save();
        expect(await productOrderUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

        expect(await productOrderComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
    });*/

  /* it('should delete last ProductOrder', async () => {
        const nbButtonsBeforeDelete = await productOrderComponentsPage.countDeleteButtons();
        await productOrderComponentsPage.clickOnLastDeleteButton();

        productOrderDeleteDialog = new ProductOrderDeleteDialog();
        expect(await productOrderDeleteDialog.getDialogTitle())
            .to.eq('haryaliApp.productOrder.delete.question');
        await productOrderDeleteDialog.clickOnConfirmButton();

        expect(await productOrderComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
