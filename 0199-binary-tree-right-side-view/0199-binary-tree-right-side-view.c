int* rightSideView(struct TreeNode* root, int* returnSize) {
    if (!root) { *returnSize = 0; return (int*) malloc(0); }

    int index = 0;
    int* output = malloc(sizeof(int) * 100);
    output[index++] = root->val;

    struct TreeNode** container = malloc(sizeof(struct TreeNode*) * 100);
    int containerIndex = 0;
    container[containerIndex++] = root;

    while (containerIndex) {
        struct TreeNode** newContainer = malloc(sizeof(struct TreeNode*) * 100);
        int newContainerIndex = 0;

        for (int j = 0; j < containerIndex; j++) {
            struct TreeNode* curr = container[j];
            if (curr->left) {
                newContainer[newContainerIndex++] = curr->left;
            }
            if (curr->right) {
                newContainer[newContainerIndex++] = curr->right;
            }
        }

        if (newContainerIndex) output[index++] = newContainer[newContainerIndex - 1]->val;
        container = newContainer;
        containerIndex = newContainerIndex;
    }

    *returnSize = index;
    return output;
}