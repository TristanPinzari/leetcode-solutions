/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int recursive(struct TreeNode* node, int net) {
    if (!node) return 0;
    net = net * 10 + node->val;
    if (!node->left && !node->right) {
        return net;
    } else {
        return recursive(node->left, net) + recursive(node->right, net);
    }
}


int sumNumbers(struct TreeNode* root) {
    return recursive(root, 0);
}