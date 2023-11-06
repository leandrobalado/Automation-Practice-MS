import { test, expect } from "@playwright/test";
import AcmePage from "../pages/acme-demo-app.page";

let acmePage: AcmePage;

test.beforeEach(async ({ page }) => {
  acmePage = new AcmePage(page);
  await acmePage.navigate();
});

test.describe("ACME demo app", () => {
  test("Count transaction statuses", async ({}) => {
    // Print number of Complete transactions
    await acmePage.amountCompleteTrans();
    // Print number of Pending transactions
    await acmePage.amountPendingTrans();
    // Print number of Declined transactions
    await acmePage.amountDeclinedTrans();
  });
  test("Assert login and print user info", async ({}) => {
    await expect(acmePage.loginInfo).toHaveClass(/logged-user-info-w/);
    // Print user name
    await acmePage.printUserName();
    // Print user role
    await acmePage.printUserRole();
  });
  // test("General balance", async ({ page }) => {
  //   await page.goto("https://demo.applitools.com/app.html");

  //   const positiveAmounts = await page
  //     .locator("tbody .text-right .text-success")
  //     .allTextContents();
  //   for (const a of positiveAmounts) {
  //     let b = a.split(" ")[1].replace(/\,/g, "");
  //     let numPositiveAmounts = parseFloat(b);
  //     console.log(numPositiveAmounts);
  //   }

  // const negativeAmounts = await page
  //   .locator("tbody .text-right .text-danger")
  //   .allTextContents();
  // // console.log(negativeAmounts);
  // for (const n of negativeAmounts) {
  //   let d = n.split(" ")[1];
  //   console.log(d);
  // }
  // });
});
