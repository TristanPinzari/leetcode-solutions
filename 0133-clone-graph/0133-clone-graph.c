/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numNeighbors;
 *     struct Node** neighbors;
 * };
 */

#define MAX_NODE_VAL 101

struct Node* cloneGraphHelper(struct Node* node, struct Node** visited){
    if (node == NULL){
        return NULL;
    }

    // first check if it is not arleady cloned
    if (visited[node->val] != NULL){
        return visited[node->val];
    }

    // clone the node
    struct Node* clone = (struct Node*)malloc(sizeof(struct Node));
    clone->val = node->val;
    clone->numNeighbors = node->numNeighbors;
    clone->neighbors = (struct Node**)malloc(sizeof(struct Node*) * (size_t)node->numNeighbors);
    
    visited[node->val] = clone;

    for (int i = 0; i<node->numNeighbors; i++){
        clone->neighbors[i] = cloneGraphHelper(node->neighbors[i], visited);
    }

    return clone;
}

struct Node *cloneGraph(struct Node *s) {
    if (s == NULL){
        return NULL;
    }

    struct Node* visited[MAX_NODE_VAL] = {NULL};
    return cloneGraphHelper(s, visited);
}