/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int leftHeight(struct TreeNode* node) {
    int h = 0;
    while (node) {
        h++;
        node = node->left;
    }
    return h;
}

int rightHeight(struct TreeNode* node) {
    int h = 0;
    while (node) {
        h++;
        node = node->right;
    }
    return h;
}

int countNodes(struct TreeNode* root) {
    if (root == NULL) return 0;

    int lh = leftHeight(root);
    int rh = rightHeight(root);

    if (lh == rh) {
        // perfect subtree: 2^lh - 1 nodes
        return (1 << lh) - 1;
    }

    return 1 + countNodes(root->left) + countNodes(root->right);
}