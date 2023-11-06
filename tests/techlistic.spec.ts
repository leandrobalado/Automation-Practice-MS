import { test, expect } from "@playwright/test";
import path, { join } from "path";

test("Automation Practice Form", async ({ page }) => {
  await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");
  await page.locator(`[name='firstname']`).fill("TestName");
  await page.locator(`[name='lastname']`).fill("TestLastname");
  await page.locator("#sex-0").check();
  await page.locator("#exp-4").check();
  await page.locator("#datepicker").fill("11/01/2023");
  await page.locator("#profession-1").check();
  await page.locator("#tool-2").check();
  await page.locator("#continents").selectOption("South America");
  await page.pause();
  await page.locator("#selenium_commands").selectOption("WebElement Commands");
  await page.pause();
  const filePath = path.join(__dirname, '../data/IMG_4757.JPG');
//   await page.locator('.input-file')
});

//test modification