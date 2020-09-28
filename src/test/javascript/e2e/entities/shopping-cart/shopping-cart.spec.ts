/* tslint:disable no-unused-expression */
import { browser, ExpectedConditions as ec, protractor, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ShoppingCartComponentsPage, ShoppingCartDeleteDialog, ShoppingCartUpdatePage } from './shopping-cart.page-object';

const expect = chai.expect;

describe('ShoppingCart e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let shoppingCartUpdatePage: ShoppingCartUpdatePage;
  let shoppingCartComponentsPage: ShoppingCartComponentsPage;
  /*let shoppingCartDeleteDialog: ShoppingCartDeleteDialog;*/

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load ShoppingCarts', async () => {
    await navBarPage.goToEntity('shopping-cart');
    shoppingCartComponentsPage = new ShoppingCartComponentsPage();
    await browser.wait(ec.visibilityOf(shoppingCartComponentsPage.title), 5000);
    expect(await shoppingCartComponentsPage.getTitle()).to.eq('haryaliApp.shoppingCart.home.title');
  });

  it('should load create ShoppingCart page', async () => {
    await shoppingCartComponentsPage.clickOnCreateButton();
    shoppingCartUpdatePage = new ShoppingCartUpdatePage();
    expect(await shoppingCartUpdatePage.getPageTitle()).to.eq('haryaliApp.shoppingCart.home.createOrEditLabel');
    await shoppingCartUpdatePage.cancel();
  });

  /* it('should create and save ShoppingCarts', async () => {
        const nbButtonsBeforeCreate = await shoppingCartComponentsPage.countDeleteButtons();

        await shoppingCartComponentsPage.clickOnCreateButton();
        await promise.all([
            shoppingCartUpdatePage.setPlacedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM'),
            shoppingCartUpdatePage.statusSelectLastOption(),
            shoppingCartUpdatePage.setTotalPriceInput('5'),
            shoppingCartUpdatePage.paymentMethodSelectLastOption(),
            shoppingCartUpdatePage.customerDetailsSelectLastOption(),
        ]);
        expect(await shoppingCartUpdatePage.getPlacedDateInput()).to.contain('2001-01-01T02:30', 'Expected placedDate value to be equals to 2000-12-31');
        expect(await shoppingCartUpdatePage.getTotalPriceInput()).to.eq('5', 'Expected totalPrice value to be equals to 5');
        await shoppingCartUpdatePage.save();
        expect(await shoppingCartUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

        expect(await shoppingCartComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
    });*/

  /* it('should delete last ShoppingCart', async () => {
        const nbButtonsBeforeDelete = await shoppingCartComponentsPage.countDeleteButtons();
        await shoppingCartComponentsPage.clickOnLastDeleteButton();

        shoppingCartDeleteDialog = new ShoppingCartDeleteDialog();
        expect(await shoppingCartDeleteDialog.getDialogTitle())
            .to.eq('haryaliApp.shoppingCart.delete.question');
        await shoppingCartDeleteDialog.clickOnConfirmButton();

        expect(await shoppingCartComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    });*/

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
