var maxPathSum = function(root) {
    let ans = -Infinity;

    function dfs(node) {
        if (!node) return 0;
        let left = Math.max(dfs(node.left), 0);
        let right = Math.max(dfs(node.right), 0);
        ans = Math.max(ans, node.val + left + right);
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return ans;
};