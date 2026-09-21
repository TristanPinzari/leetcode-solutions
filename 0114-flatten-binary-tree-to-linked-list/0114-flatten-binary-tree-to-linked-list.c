/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode* flatten2(struct TreeNode* node) {
    if (!node || (!node->left && !node->right)) return node;
    struct TreeNode* temp = node->right;
    struct TreeNode* res;
    if (node->left) {
        node->right = node->left;
        node->left = NULL;
        res = flatten2(node->right);
        res->right = temp;
    }
    return temp ? flatten2(temp) : res;
}

void flatten(struct TreeNode* root) {
    flatten2(root);
}