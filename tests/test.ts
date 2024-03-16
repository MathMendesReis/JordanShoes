import { expect, test, } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', {
		name: 'Jordan Shoes'
	})).toBeVisible();
});

// test('Page component', async ({ page }) => {
// 	it('renders the correct number of items', async () => {
// 		await page.goto('/');
// 		const container = await page.waitForSelector('ul');
// 		const items = await container.$$('li');
// 		expect(items.length).toBe(9);
// 	});

// it('renders the item names correctly', () => {
// 	const itemNames = screen.getAllByText(/Air Jordan/);
// 	expect(itemNames.length).toBe(9);
// });

// it('renders the item categories correctly', () => {
// 	const itemCategories = screen.getAllByText(/Tênis Air Jordan/);
// 	expect(itemCategories.length).toBe(9);
// });

// it('renders the item prices correctly', () => {
// 	const itemPrices = screen.getAllByText(/R\$ 1\.399,99/);
// 	expect(itemPrices.length).toBe(9);
// });
// });
