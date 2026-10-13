/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int output, counter;

void recursive(struct TreeNode* node) {
    if (!node || output != -1) return;
    recursive(node->left);
    if (--counter == 0) output = node->val;
    recursive(node->right);
}

int kthSmallest(struct TreeNode* root, int k) {
    output = -1, counter = k;
    recursive(root);
    return output;
}