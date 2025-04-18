/*jslint
    node, unordered
*/

//MD # argument_parser/p
//MD Simple command-line argument parser that accepts a mix of both long-form
//MD and single-character short-form command options and returns results in
//MD an object/p
//MD ## Example/p
//MD `command targeta targetb -fgh --option1 a b c --option2 d`/p
//MD /p
//MD Returns:/p
//MD ```/p
//MD {/p
//MD   f: [],/p
//MD   g: [],/p
//MD   h: [],/p
//MD   option1: [a, b, c],/p
//MD   option2: [d],/p
//MD   target: [targeta, targetb]/p
//MD }/p
//MD ```/p

export default Object.freeze(function (arg_list) {

// Provide default option name
    let initial = {
        target: []
    };
    let current = Object.keys(initial)[0];

    return Object.freeze(arg_list.reduce(

        function (results, nugget) {

// Long-form option
            if (nugget.startsWith("--")) {
                current = nugget.slice(2);
                results[current] = [];

// Short-form option(s)
            } else if (nugget.startsWith("-")) {
                nugget.slice(1).split("").forEach(function (flag) {
                    results[flag] = [];
                    current = flag;
                });

// Unprefixed parameters
            } else {
                results[current] = results[current].concat([nugget]);

            }

            return results;

        },

        initial

    ));
});