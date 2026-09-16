/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */


int recursive(struct TreeNode* node, int depth) {
    depth += 1;
    if (!node->left && !node->right) {
        return depth;
    }
    int resultLeft = 0, resultRight = 0;
    if (node->left) resultLeft = recursive(node->left, depth);
    if (node->right) resultRight = recursive(node->right, depth);
    
    return resultLeft > resultRight ? resultLeft : resultRight;
}

int maxDepth(struct TreeNode* root) {
    if (!root) return 0;
    return recursive(root, 0);
}