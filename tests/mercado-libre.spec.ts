import { test, expect } from "@playwright/test";
import MeLiFilters from "../pages/mercado-libre.filterPage";
import MeLiSearch from "../pages/mercado-libre.searchPage";
import MeLiPage from "../pages/mercado-libre.homePage";

let meliPage: MeLiPage;
let meliSearch: MeLiSearch;
let meliFilter: MeLiFilters;

test.beforeEach(async ({ page }) => {
  meliPage = new MeLiPage(page);
  meliSearch = new MeLiSearch(page);
  meliFilter = new MeLiFilters(page);
  await meliPage.navigate();
});

test.describe("Mercado Libre - Practice", () => {
  test("Flow No1 - Search for a keyboard", async ({ page }) => {
    // Search for a product
    await meliSearch.searchTextbox("Teclado mecanico");
    // Add some filters - Min amount of $ARS 500k and sort by highest value
    await meliFilter.minValueFilter("500000");
    await meliSearch.sortMaxValue();
    // Value of the most expensive product
    const maxPrice = await meliPage.maxProductValue.textContent();
    console.log(`El valor del producto mas caro es: $${maxPrice}`);
    // Number of products found
    const resultNumber = await meliPage.searchNumResult.textContent();
    console.log(resultNumber);
    // Title assertion
    await expect(meliPage.headingTitle).toHaveText("Teclado mecanico");
  });
  test("Flow No2 - Add a product to the cart", async ({ page }) => {
    await meliPage.closeLocDial.click();
    // Search for a product
    await meliSearch.searchAudioCat();
    // Apply filters  - Headphones with title assertion -> First most wanted -> brand JBL
    await meliFilter.headphonesFilter.click();
    await expect(meliPage.headingTitle).toHaveText("Auriculares");
    await meliFilter.firstMostWanted.click({ force: true });
    await meliFilter.brandJBL.click();
    // Sort by min value
    await meliSearch.sortMinValue();
    // Add first product to the cart
    await meliPage.firstProduct.click();
    await meliPage.buyBtn.click();
    // Assertion to login
    await expect(meliPage.loginMsg).toBeVisible();
  });
});
