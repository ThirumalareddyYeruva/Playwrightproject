import{test,expect} from "@playwright/test"
test.beforeAll(async()=>{
    console.log("Before all the group")
})
test.afterAll(async()=>{
    console.log("After all the group")
})
test.describe(async()=>{

    test("test1",async()=>{
        console.log("test is executed")
    })

    test("test2",async()=>{
        console.log("test2 is executed")
    })
})

test.describe.skip(async()=>{

    test("test3",async()=>{
        console.log("test3 is executed")
    })

    test("test4",async()=>{
        console.log("test4 is executed")
    })
})