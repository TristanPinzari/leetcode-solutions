/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode* recursive(struct TreeNode* node, struct TreeNode* p, struct TreeNode* q) {
    if (!node || node == p || node == q) return node;

    struct TreeNode* left = recursive(node->left, p, q);
    struct TreeNode* right = recursive(node->right, p, q);

    if (left && right) return node;
    return left ? left : right;
}

struct TreeNode* lowestCommonAncestor(struct TreeNode* root, struct TreeNode* p, struct TreeNode* q) {
    return recursive(root, p, q);
}