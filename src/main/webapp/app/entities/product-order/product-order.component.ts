import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IProductOrder } from 'app/shared/model/product-order.model';
import { AccountService } from 'app/core';
import { ProductOrderService } from './product-order.service';

@Component({
  selector: 'jhi-product-order',
  templateUrl: './product-order.component.html'
})
export class ProductOrderComponent implements OnInit, OnDestroy {
  productOrders: IProductOrder[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    protected productOrderService: ProductOrderService,
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected activatedRoute: ActivatedRoute,
    protected accountService: AccountService
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.productOrderService
        .search({
          query: this.currentSearch
        })
        .pipe(
          filter((res: HttpResponse<IProductOrder[]>) => res.ok),
          map((res: HttpResponse<IProductOrder[]>) => res.body)
        )
        .subscribe((res: IProductOrder[]) => (this.productOrders = res), (res: HttpErrorResponse) => this.onError(res.message));
      return;
    }
    this.productOrderService
      .query()
      .pipe(
        filter((res: HttpResponse<IProductOrder[]>) => res.ok),
        map((res: HttpResponse<IProductOrder[]>) => res.body)
      )
      .subscribe(
        (res: IProductOrder[]) => {
          this.productOrders = res;
          this.currentSearch = '';
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInProductOrders();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IProductOrder) {
    return item.id;
  }

  registerChangeInProductOrders() {
    this.eventSubscriber = this.eventManager.subscribe('productOrderListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
