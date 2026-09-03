function simplifyPath(path: string): string {
    const items = path.split("/"), stack = new Array(items.length);
    let top = 0;
    for (const item of items) {
        if (!item || item === ".") continue;
        console.log(item)
        if (item === "..") {
            stack.pop();
            if (top > 0) top--;
        } else {
            stack[top] = item;
            top++;
        }
    }
    stack.length = top;
    return "/" + stack.join("/");
};