const CheckboxWrapper = require("./CheckboxWrapper")
// @ponicode
describe("_onSelected", () => {
    let inst

    beforeEach(() => {
        inst = new CheckboxWrapper.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst._onSelected("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst._onSelected("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst._onSelected("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst._onSelected(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
