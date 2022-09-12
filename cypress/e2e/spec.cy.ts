describe("main", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Should post a stream channel", () => {
		cy.get('[data-cy="main-post-textarea"]')
			.type("Text create from cypress")
			.get('[data-cy="main-submit-buttom"]')
			.click();
	});

	it("Should edit a stream channel", () => {
		cy.get('[data-cy="main-list-element"]')
			.last()
			.find('[data-cy="main-item-edit"]')
			.click()
			.get('[data-cy="main-post-textarea"]')
			.clear()
			.type("Text edited from cypress")
			.get('[data-cy="main-submit-buttom"]')
			.click();
	});

	it("Should enter to delete item and cancel", () => {
		cy.get('[data-cy="main-list-element"]')
			.last()
			.find('[data-cy="main-item-delete"]')
			.click()
			.get('[data-cy="main-cancel-buttom"]')
			.click();
	});

	it("Should delete a stream channel", () => {
		cy.get('[data-cy="main-list-element"]')
			.last()
			.find('[data-cy="main-item-delete"]')
			.click()
			.get('[data-cy="main-delete-buttom"]')
			.click();
	});

	it("Should select a stream item in the list and scan the items inside", () => {
		cy.get('[data-cy="main-list-element"]')
			.last()
			.click()
			.get('[data-cy="stream-video-player"]')
			.should("be.visible")
			.get('[data-cy="stream-video-description"]')
			.should("be.visible");
	});

	it("Should comeback to the main page through the logo", () => {
		cy.get('[data-cy="main-logo"]').click();
	});
});
