/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    
    // Split the path by '/'
    const components = path.split('/');
    
    for (const component of components) {
        if (component === '.' || component === '') {
            // Ignore '.' and empty strings
            continue;
        } else if (component === '..') {
            // Pop from stack for '..'
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Push valid directory names
            stack.push(component);
        }
    }
    
    // Join the components with '/' and add the leading '/'
    if (stack.length === 0) {
        return "/";
    }
    
    return "/" + stack.join("/");
};