import { Page, Locator } from "@playwright/test";

class MeLiPage {
  private page: Page;
  private argBtn: Locator;
  readonly maxProductValue: Locator;
  readonly searchNumResult: Locator;
  readonly headingTitle: Locator;
  readonly firstProduct: Locator;
  readonly buyBtn: Locator;
  readonly loginMsg: Locator;
  readonly closeLocDial: Locator;

  constructor(page: Page) {
    this.page = page;
    this.argBtn = page.getByRole("link", { name: "Argentina" });
    this.maxProductValue = page
      .locator(".ui-search-layout--stack")
      .first()
      .locator(".andes-money-amount__fraction")
      .first();
    this.searchNumResult = page.locator(".ui-search-search-result");
    this.headingTitle = page.locator(".ui-search-breadcrumb__title");
    this.firstProduct = page.locator(".ui-search-item__title").first();
    this.buyBtn = page.getByRole("button", { name: "Comprar ahora" }).first();
    this.loginMsg = page.getByRole("heading", {
      name: "¡Hola! Para comprar, ingresá a tu cuenta",
    });
    this.closeLocDial = page.getByRole("button", { name: "Más tarde" });
  }

  async navigate() {
    await this.page.goto("https://www.mercadolibre.com/");
    await this.argBtn.click();
  }
}

export default MeLiPage;
