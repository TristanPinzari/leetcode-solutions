double* averageOfLevels(struct TreeNode* root,int* returnSize){
    double *ans=malloc(10000*sizeof(double));
    struct TreeNode *queue[10000];

    int front=0,rear=0,levels=0;

    queue[rear++]=root;

    while(front<rear){
        int n=rear-front;
        double sum=0;

        for(int i=0;i<n;i++){
            struct TreeNode *temp=queue[front++];
            sum+=temp->val;

            if(temp->left)
                queue[rear++]=temp->left;

            if(temp->right)
                queue[rear++]=temp->right;
        }

        ans[levels++]=sum/n;
    }

    *returnSize=levels;
    return ans;
}