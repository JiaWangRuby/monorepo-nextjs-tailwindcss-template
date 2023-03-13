import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("Myopic Design — Omega Star");
});

test("has heading", async ({ page }) => {
  await page.goto("/");

  const heading = await page.getByRole("heading", { level: 1 });
  await expect(heading).toContainText("Omega Star");
});
