/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool validate(struct TreeNode* node, long lo, long hi) {
    if (!node) return true;
    if (hi <= node->val || node->val <= lo) return false;
    return validate(node->left, lo, node->val) && validate(node->right, node->val, hi);
}

bool isValidBST(struct TreeNode* root) {
    return validate(root, LLONG_MIN, LLONG_MAX);
}