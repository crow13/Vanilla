describe("domManipulation Library", function () {
    describe("getSelector", function(){
        it("returns if there is a class available of the sent element", function(){
                expect(getSelector("#testId")).toEqual(document.getElementById("testId"));
            }
        ),
        it("returns if there is an id available of the sent element", function(){
                expect(getSelector(".testClass")).toEqual(document.getElementsByClassName('testClass'));
            }
        ),
        it("returns null if the id or class is missing a signifier", function(){
                expect(getSelector("testClass")).toEqual(null);
            }
        ),
        it("returns null if the id or class is missing a signifier", function(){
                expect(getSelector("testClass54")).toEqual(null);
            }
        )
    })
})