import { browser, ExpectedConditions, element, by, ElementFinder } from 'protractor';

export class ShoppingCartComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-shopping-cart div table .btn-danger'));
  title = element.all(by.css('jhi-shopping-cart div h2#page-heading span')).first();

  async clickOnCreateButton(timeout?: number) {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(timeout?: number) {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons() {
    return this.deleteButtons.count();
  }

  async getTitle() {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class ShoppingCartUpdatePage {
  pageTitle = element(by.id('jhi-shopping-cart-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));
  placedDateInput = element(by.id('field_placedDate'));
  statusSelect = element(by.id('field_status'));
  totalPriceInput = element(by.id('field_totalPrice'));
  paymentMethodSelect = element(by.id('field_paymentMethod'));
  customerDetailsSelect = element(by.id('field_customerDetails'));

  async getPageTitle() {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setPlacedDateInput(placedDate) {
    await this.placedDateInput.sendKeys(placedDate);
  }

  async getPlacedDateInput() {
    return await this.placedDateInput.getAttribute('value');
  }

  async setStatusSelect(status) {
    await this.statusSelect.sendKeys(status);
  }

  async getStatusSelect() {
    return await this.statusSelect.element(by.css('option:checked')).getText();
  }

  async statusSelectLastOption(timeout?: number) {
    await this.statusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setTotalPriceInput(totalPrice) {
    await this.totalPriceInput.sendKeys(totalPrice);
  }

  async getTotalPriceInput() {
    return await this.totalPriceInput.getAttribute('value');
  }

  async setPaymentMethodSelect(paymentMethod) {
    await this.paymentMethodSelect.sendKeys(paymentMethod);
  }

  async getPaymentMethodSelect() {
    return await this.paymentMethodSelect.element(by.css('option:checked')).getText();
  }

  async paymentMethodSelectLastOption(timeout?: number) {
    await this.paymentMethodSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async customerDetailsSelectLastOption(timeout?: number) {
    await this.customerDetailsSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async customerDetailsSelectOption(option) {
    await this.customerDetailsSelect.sendKeys(option);
  }

  getCustomerDetailsSelect(): ElementFinder {
    return this.customerDetailsSelect;
  }

  async getCustomerDetailsSelectedOption() {
    return await this.customerDetailsSelect.element(by.css('option:checked')).getText();
  }

  async save(timeout?: number) {
    await this.saveButton.click();
  }

  async cancel(timeout?: number) {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class ShoppingCartDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-shoppingCart-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-shoppingCart'));

  async getDialogTitle() {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(timeout?: number) {
    await this.confirmButton.click();
  }
}
