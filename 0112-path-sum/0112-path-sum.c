/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int target;

bool recursive(struct TreeNode* node, int net) {
    if (!node) return false;
    net += node->val;
    if (!node->left && !node->right) {
        return net == target;
    } else {
        return recursive(node->left, net) || recursive(node->right, net);
    }
}

bool hasPathSum(struct TreeNode* root, int targetSum) {
    target = targetSum;
    return recursive(root, 0);
}