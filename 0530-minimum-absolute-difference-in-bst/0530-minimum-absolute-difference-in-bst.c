/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int output;

void recursive(struct TreeNode* node, int lo, int hi) {
    if (!node) return;

    if (lo != -1 && node->val - lo < output) output = node->val - lo;
    if (hi != -1 && hi - node->val < output) output = hi - node->val;

    recursive(node->left, lo, node->val);
    recursive(node->right, node->val, hi);
}

int getMinimumDifference(struct TreeNode* root) {
    output = 100001;
    recursive(root, -1, -1);
    return output;
}