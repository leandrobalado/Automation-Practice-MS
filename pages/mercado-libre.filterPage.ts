import { Page, Locator } from "@playwright/test";

class MeLiFilters {
  private page: Page;
  readonly minValueInput: Locator;
  readonly maxValueInput: Locator;
  readonly applyValueInput: Locator;
  readonly firstMostWanted: Locator;
  readonly brandJBL: Locator;
  readonly headphonesFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.minValueInput = page.getByRole("textbox", { name: "Mínimo" });
    this.maxValueInput = page.getByRole("textbox", { name: "Maximo" });
    // this.firstMostWanted = page.getByRole("link", { name: "1º MÁS DESEADA" });
    this.firstMostWanted = page.getByText("1º MÁS DESEADA", { exact: true });
    this.brandJBL = page.getByRole("link", { name: "JBL JBL" });
    this.applyValueInput = page.getByTestId("submit-price");
    this.headphonesFilter = page.getByLabel("Auriculares");
  }

  async minValueFilter(number: string) {
    await this.minValueInput.pressSequentially(number, { delay: 190 });
    await this.applyValueInput.click();
    await this.page.waitForLoadState();
  }

  async maxValueFilter(number: string) {
    await this.maxValueInput.pressSequentially(number, { delay: 190 });
    await this.page.waitForLoadState();
  }
}

export default MeLiFilters;
