describe("domManipulation Library", function () {
    describe("trim", function(){
        it("returns True if trim removes spaces left and right", function(){
            expect(trim(" bob ")).toEqual("bob");
        }),
        it("returns True if trim removes spaces left", function(){
            expect(trim(" bob")).toEqual("bob");
        }),
        it("returns True if trim removes spaces right", function(){
            expect(trim("bob ")).toEqual("bob");
        })
    }),
    describe("ltrim", function(){
        it("returns True if ltrim removes spaces left", function(){
            expect(ltrim(" bob ")).toEqual("bob ");
        }),
        it("returns True if ltrim removes spaces left", function(){
            expect(ltrim(" bob")).toEqual("bob");
        }),
        it("returns True if ltrim does not remove spaces right", function(){
            expect(ltrim("bob ")).toEqual("bob ");
        })
    }),
    describe("rtrim", function(){
        it("returns True if rtrim removes spaces right", function(){
            expect(rtrim(" bob ")).toEqual(" bob");
        }),
        it("returns True if rtrim does not remove spaces left", function(){
            expect(rtrim(" bob")).toEqual(" bob");
        }),
        it("returns True if rtrim removes spaces right", function(){
            expect(rtrim("bob ")).toEqual("bob");
        })
    }),
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
                expect(getSelector("p")).toEqual(document.getElementsByTagName('p'));
            }
        ),
        it("returns empty NodeList if the element is mistyped or not on document", function(){
                expect(getSelector("testClass").length).toEqual(0);
            }
        )
    }),
    describe("hasClass", function(){
        it("returns True if the element has the submitted class", function(){
            expect(hasClass(getSelector("#testId"), "testClass")).toEqual(true);
        }),
        it("returns False if the element does not have the submitted class", function(){
            expect(hasClass(getSelector("#testId"), "testClass2")).toEqual(false);
        })
    }),
    describe("addClass", function(){
        it("returns element with additional class if the element does not already have class", function(){
            expect(addClass(getSelector("#testId"), "testClass2").classList)
                .toEqual(getSelector("#testId2").classList);
        }),
        it("returns element with no additional classes if the element already has class", function(){
            expect(addClass(getSelector("#testId"), "testClass"))
                .toEqual(getSelector("#testId"));
        })
    }),
    describe("removeClass", function(){
        it("returns element with less class if the element does already have class", function(){
            expect(trim(removeClass(getSelector("#testId2"), "testClass2").classList.toString()))
                .toEqual(trim(getSelector("#testId3").classList.toString()));
        }),
        it("returns element with no less classes if the element does not already have class", function(){
            expect(removeClass(getSelector("#testId2"), "testClass3"))
                .toEqual(getSelector("#testId2"));
        })
    })
})