/*jslint
    fudge
*/

/*
Parses command line arguments following these conventions:
    #Accepts -- prefix for long-form options one-at-a-time
    #Accepts - prefix for short-form options that can be groupded (-xyz)
    #Unprefixed arguments are assigned to the previous option
    #Initial unprefixed arguments are assigned to "target" option
    #Results returned in a object with array results for each option
*/
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