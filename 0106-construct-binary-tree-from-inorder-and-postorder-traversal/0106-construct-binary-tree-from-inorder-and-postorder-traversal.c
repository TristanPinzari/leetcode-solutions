/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

int postorderIndex;
int inorderMap[6001];

struct TreeNode* build(int* inorder, int* postorder, int startRange, int endRange) {
    if (startRange > endRange) return NULL;

    struct TreeNode* root = malloc(sizeof(struct TreeNode));
    int rootVal = postorder[postorderIndex--];
    int rootIndex = inorderMap[rootVal + 3000];
    root->val = rootVal;
    root->right = build(inorder, postorder, rootIndex + 1, endRange);
    root->left = build(inorder, postorder, startRange, rootIndex - 1);
    return root;
}

struct TreeNode* buildTree(int* inorder, int inorderSize, int* postorder, int postorderSize) {
    for (int i = 0; i < inorderSize; i++) {
        inorderMap[inorder[i] + 3000] = i;
    }
    postorderIndex = postorderSize - 1;
    return build(inorder, postorder, 0, postorderIndex);
}