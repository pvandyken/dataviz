// Always export things you want to use in other files!

export class MyClass {


    // Initialize class attributes first
    active: boolean

    constructor() {
        // constructor is equivalent to __init__() in python.
        // Note that their's no "self" variable

        // We use "this" to access class attributes. It's equivalent to "self" in python
        // Be sure to initialize the attribute as shown above
        this.active = true
    }

    someMethod(foo: string, listFoo: string[]) {
        /**
         * For those coming from python, this is a demo method.
         * Note that there's no "self" variable
         */

        // We can print to the console like this
        // Note that it's good style to put semicolons at the end of lines, but not
        // required.
        console.log("Hello world!");
        console.log("No semicolon")
        
        // Conditional logic uses (parentheses) and {braces}
        // Also note the use of three === signs for equality.
        // Inequality would be !==
        if (foo === "bar") {
            this.active = false;
        } else if (foo === "unbar") {
            this.active = true;
        } else {
            console.log("Not setting active");
        }

        // Loops work similarly to python
        // Use parentheses and braces, as in conditionals.
        // We also put "let" before fooItem...
        for (let fooItem in listFoo) {
            // In javascript, variables must always be "declared" before use.
            // "let" is used for variables that can change
            let x = 2;
            x = 4;
            x = 5;

            // "const" is for variables that will never change
            const y = "hello";
            // y = "something else" -> error

            // Use "const" whenever possible. It's better practice.

            console.log(fooItem);
        }

        // When you need to "process" a list, i.e. convert them into new values, it's
        // best to use .map. This works fairly similarly to list comprehensions in
        // Python

        // Note the anonymous arrow function. There's no (parentheses) around the
        // argument; they're only necessary if you have more than one argument
        const capitalFoos = listFoo.map(fooItem => {
            return fooItem.toUpperCase();
        });

        const indexedFoos = listFoo.map((fooItem, i) => {
            // We can use backticks to format strings. Similar to f"strings" in python
            // Insert variables using ${syntax}
            return `${i} - ${fooItem}`;
        })
    }

    
}