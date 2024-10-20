import { expect } from "chai";
import workforceManagement from "../workforceManagement.js";

describe('workforceManagement tests', () => {
    describe('recruitStaff', () => {

        it('wrong role should throw', () => {
            expect(() => workforceManagement.recruitStaff('Pesho', 'role1', 2)).to.throw('We are not currently hiring for this role.');
        });

        it('hired employee with more tnan 4 years', () => {
            expect(workforceManagement.recruitStaff('Pesho', 'Developer', 5)).to.equal(`Pesho has been successfully recruited for the role of Developer.`);
        });

        it('hired employee with 4 years', () => {
            expect(workforceManagement.recruitStaff('Gosho', 'Developer', 4)).to.equal(`Gosho has been successfully recruited for the role of Developer.`);
        });

        it('not suitable for the role', () => {
            expect(workforceManagement.recruitStaff('Mimi', 'Developer', 3)).to.equal('Mimi is not suitable for this role.');
        });
    });

    describe('computeWages', () => {

        it('return valid salary', () => {
            expect(workforceManagement.computeWages(4)).to.equal(72); // 0 work hours ???
            expect(workforceManagement.computeWages(160)).to.equal(2880);
        });

        it('return valid salary with bonus', () => {
            expect(workforceManagement.computeWages(161)).to.equal(4398);
        });

        it('validate input parameters', () => {
            expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages('a')).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages({})).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages([])).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages(undefined)).to.throw('Invalid hours');
        });
    });

    describe('dismissEmployee', () => {

        it('remove employee correctly', () => {
            expect(workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });

        it('validate input parameters', () => {
            expect(() => workforceManagement.dismissEmployee('a', 1)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(1, '1')).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee('a', '1')).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(1, 1)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(undefined, 1)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee({}, 1)).to.throw('Invalid input');
        });
    });
});
