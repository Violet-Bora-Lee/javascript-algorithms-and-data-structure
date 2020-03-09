function outer(input){

    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;

}