import { Page, Locator } from "@playwright/test";

class AcmePage {
  private page: Page;
  readonly completeTrans: Locator;
  readonly pendingTrans: Locator;
  readonly declinedTrans: Locator;
  readonly userName: Locator;
  readonly userRole: Locator;
  readonly loginInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeTrans = page.locator(".green");
    this.pendingTrans = page.locator(".yellow");
    this.declinedTrans = page.locator(".red");
    this.userName = page.locator(".logged-user-name");
    this.userRole = page.locator(".logged-user-role");
    this.loginInfo = page.locator(".logged-user-info-w");
  }

  async navigate() {
    await this.page.goto("https://demo.applitools.com/app.html");
  }

  async amountCompleteTrans() {
    const complTrans = await this.completeTrans.count();
    console.log(`Total of Complete transactions: ${complTrans}`);
  }

  async amountPendingTrans() {
    const pendTrans = await this.pendingTrans.count();
    console.log(`Total of Pending transactions: ${pendTrans}`);
  }

  async amountDeclinedTrans() {
    const declTrans = await this.declinedTrans.count();
    console.log(`Total of Declined transactions: ${declTrans}`);
  }

  async printUserName() {
    const userName = await this.userName.textContent();
    const trimUserName = userName!.trim();
    console.log(`User name: ${trimUserName}`);
  }

  async printUserRole() {
    const userRole = await this.userRole.textContent();
    const trimUserRole = userRole!.trim();
    console.log(`User role: ${trimUserRole}`);
  }
}

export default AcmePage;
