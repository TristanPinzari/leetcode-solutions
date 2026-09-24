int record;

int compare(int a, int b) {
    return a >= b ? a : b;
}

int recursive(struct TreeNode* node) {
    if (!node) return -1001;
    if (!node->left && !node->right) {
        record = record > node->val ? record : node->val;
        return node->val;
    } else {
        int leftRes = compare(recursive(node->left), 0);
        int rightRes = compare(recursive(node->right), 0);
        int val = node->val;
        int highest = compare(val, compare(val + leftRes, compare(val + rightRes, val + leftRes + rightRes)));
        record = record > highest ? record : highest;
        return compare(val, compare(val + leftRes, val + rightRes));
    }
}

int maxPathSum(struct TreeNode* root) {
    record = root->val;
    recursive(root);
    return record;
}