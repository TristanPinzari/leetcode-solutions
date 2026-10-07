/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** levelOrder(struct TreeNode* root, int* returnSize, int** returnColumnSizes) {
    if (!root) {
        *returnSize = 0;
        *returnColumnSizes = NULL;
        return NULL;
    }

    struct TreeNode *queue[2000];
    int** ans = malloc(sizeof(*ans) * 2000);
    int* columnSizes = malloc(sizeof(*columnSizes) * 2000);

    int front = 0, rear = 0, levels = 0;
    queue[rear++] = root;

    while (front < rear) {
        int n = rear - front;
        int* subArr = malloc(sizeof(*subArr) * n);

        for (int i = 0; i < n; i++) {
            struct TreeNode *temp = queue[front++];
            subArr[i] = temp->val;

            if (temp->left)
                queue[rear++] = temp->left;
            if (temp->right)
                queue[rear++] = temp->right;
        }

        ans[levels] = subArr;
        columnSizes[levels++] = n;
    }

    *returnSize = levels;
    *returnColumnSizes = columnSizes;
    return ans;
}