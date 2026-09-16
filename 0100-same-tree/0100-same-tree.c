/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

bool recursive(struct TreeNode* p, struct TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p->val != q->val) return false;
    
    return recursive(p->left, q->left) && recursive(p->right, q->right);
}

bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    return recursive(p, q);
}