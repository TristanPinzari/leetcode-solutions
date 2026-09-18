/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool recursive(struct TreeNode* left, struct TreeNode* right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left->val != right->val) {
        return false;
    } else {
        return recursive(left->right, right->left) && recursive(left->left, right->right);
    }
}

bool isSymmetric(struct TreeNode* root) {
    return recursive(root->left, root->right);
}