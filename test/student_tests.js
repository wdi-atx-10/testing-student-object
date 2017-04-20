describe('Student', function() {
    describe('#abs()', function() {
        it('should return the firstName', function() {
            expect(.firstName).to.be.equal(firstName);
        });

        it('should return the last name', function() {
            expect(.lastName).to.be.equal(lastName);
        });

        it('should return firstName + lastName', function() {
            expect(.fullName).to.be.equal(firstName + lastName);
        });

        it('should return greeting', function(){
          expect(.getGreeting).to.be.equal('Good day mate, my name is')
        });
    });
});
