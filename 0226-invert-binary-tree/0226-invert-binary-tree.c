/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

void recursiveInvert(struct TreeNode* node) {
    if (!node) return;
    struct TreeNode* temp = node->left;
    node->left = node->right;
    node->right = temp;
    recursiveInvert(node->left);
    recursiveInvert(node->right);
}

struct TreeNode* invertTree(struct TreeNode* root) {
    return (recursiveInvert(root), root);
}