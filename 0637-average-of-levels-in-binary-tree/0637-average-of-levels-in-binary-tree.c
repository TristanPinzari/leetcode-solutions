/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
double* averageOfLevels(struct TreeNode* root, int* returnSize) {
    if (!root) { *returnSize = 0; return (double*) malloc(0); }

    int index = 0;
    double* output = malloc(sizeof(double) * 10000);

    struct TreeNode** container = malloc(sizeof(struct TreeNode*) * 100);
    int containerIndex = 0;
    container[containerIndex++] = root;

    while (containerIndex) {
        struct TreeNode** newContainer = malloc(sizeof(struct TreeNode*) * 10000);
        int newContainerIndex = 0;
        double sum = 0;

        for (int j = 0; j < containerIndex; j++) {
            struct TreeNode* curr = container[j];
            sum += curr->val;
            if (curr->left) {
                newContainer[newContainerIndex++] = curr->left;
            }
            if (curr->right) {
                newContainer[newContainerIndex++] = curr->right;
            }
        }

        output[index++] = containerIndex ? sum / containerIndex : 0;
        container = newContainer;
        containerIndex = newContainerIndex;
    }

    *returnSize = index;
    return output;
}