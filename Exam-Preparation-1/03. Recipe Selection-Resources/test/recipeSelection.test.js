import { expect } from "chai";
import { recipeSelection } from "../recipeSelection.js";

describe('recipeSelection test', () => {
    describe('isTypeSuitable', () => {
        it('vegetarian restrictions', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });

        it('vegan restrictions', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('allows any other combination', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'person1')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Dairy', 'person1')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Food1', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Food2', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');

        });

        it('validate input parameters', () => {
            expect(() => recipeSelection.isTypeSuitable(1, 'Vegan')).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable(1, 'Vegetarian')).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Meat', 1)).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Dairy', 1)).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable('Dairy', undefined)).to.throw("Invalid input");
        });

    });
});

describe('isItAffordable', () => {
    it('not enough budjet', () => {
        expect(recipeSelection.isItAffordable(10, 5)).to.equal('You don\'t have enough budget to afford this recipe');
    });

    it('remaining budget is zero but valid', () => {
        expect(recipeSelection.isItAffordable(5, 5)).to.equal(`Recipe ingredients bought. You have 0$ left`);
    });

    it('shoremaining budget is positive and validul', () => {
        expect(recipeSelection.isItAffordable(2, 5)).to.equal(`Recipe ingredients bought. You have 3$ left`);
    });

    it('validate input parameters', () => {
        expect(() => recipeSelection.isItAffordable('a', 10)).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable('a', 'b')).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable(12, 'a')).to.throw('Invalid input');
    })
});

describe('getRecipesByCategory', () => {
    it('filter recipes correctly', () => {
        const input = [{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "recTitle", category: "category" }]; // recipes
        const result = recipeSelection.getRecipesByCategory(input, 'Asian');

        expect(result.length).to.equal(1);
        expect(result).to.contain('Spicy Tofu Stir-Fry');

    });

    it('recipes are an empty array but does not throw', () => {
        const input = [];
        const result = recipeSelection.getRecipesByCategory(input, 'Asian');

        expect(result).to.be.an('array').that.is.empty;
    });

    it('invalid input parameters', () => {
        expect(() => recipeSelection.getRecipesByCategory('a', 'Asian')).to.throw('nvalid input');
        expect(() => recipeSelection.getRecipesByCategory(1, 'Asian')).to.throw('nvalid input');
        expect(() => recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], 'Asian')).to.throw('nvalid input');
        expect(() => recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], [])).to.throw('nvalid input');
        expect(() => recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], undefined)).to.throw('nvalid input');
    });
});
