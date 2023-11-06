import { Page, Locator } from "@playwright/test";

class MeLiSearch {
  private page: Page;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly categories: Locator;
  readonly tecnoSubCat: Locator;
  readonly audioSubCat: Locator;
  readonly sortBtn: Locator;
  readonly sortMaxOption: Locator;
  readonly sortMinOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator("input#cb1-edit");
    this.searchBtn = page.getByRole("button", { name: "Buscar" });
    this.categories = page.getByRole("button", { name: "Categorías" });
    this.tecnoSubCat = page.getByRole("button", { name: "Tecnología" });
    this.audioSubCat = page.getByRole("link", { name: "Audio", exact: true });
    this.sortBtn = page.getByLabel("Más relevantes");
    this.sortMaxOption = page.getByRole("option", { name: "Mayor precio" });
    this.sortMinOption = page.getByRole("option", { name: "Menor precio" });
  }

  async searchTextbox(input: string) {
    await this.searchInput.fill(input);
    await this.searchBtn.click();
    await this.page.waitForLoadState();
  }

  async sortMaxValue() {
    await this.page.waitForLoadState();
    await this.sortBtn.click();
    await this.sortMaxOption.click();
  }

  async sortMinValue() {
    await this.page.waitForLoadState();
    await this.sortBtn.click();
    await this.sortMinOption.click();
  }

  async searchAudioCat() {
    await this.categories.hover();
    await this.tecnoSubCat.hover();
    await this.audioSubCat.click();
  }
}

export default MeLiSearch;
