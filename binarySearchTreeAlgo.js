/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
    this.left = null;
      /** @type {BSTNode|null} */
    this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
    /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
    this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root == null //!one if statement can be retuurned true/false
    }

    insert(data){
        if(this.root.data < data){
            while(this.left != null){

            }
        }
    }
    
     */
class BinarySearchTree {
    constructor() {
    /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
    this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root == null //!one if statement can be retuurned true/false
    }

    insert(data){
        if(this.root.data < data){
            while(this.left != null){

            }
        }
    }
    
    toArrLevelorder(current = this.root, vals = []) {
        const queue = [];
        const vals = [];

        if(current)
        {
            queue.push(current)
        }
        while (queue.length > 0){
            const dequeNode = queue.shift()
            vals.push(dequeNode.data)

            if (dequeNode.left){
                queue.push(dequeNode.left)
            }
            if (dequeNode.right) {
                queue. push(dequeNode.right)
            }
        }
        return vals        
    }
    
        toArrPreorder(node = this.root, vals = []) {
        if(this.isEmpty()){
            return vals;
        }
        if (node){
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        } return vals;
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {
        if(this.isEmpty()){
            return vals;
        }
        if (node){
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        } return vals;
    }

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) {
        if(this.isEmpty()){
            return vals;
        }
        if (node){
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        } return vals;
    }

    insert(newVal) {
        let newNode = new BSTNode(newVal);
        let current = this.root;
        if (this.root == null){
            this. root == newVal;
            return this;
        }
        while(current){
        if (newVal == current.data){
            return undefined;
        } 
        if (newVal > current.data) {
            current.left = newNode;
            return this;
        } 
        if (newVal > current.data ) {
            current.right = newNode;
            return this;
        }
        }
    return false;

    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        let newNode = new BSTNode(newVal);
        if (this.isEmpty()){
            this.root = newNode;
            return this;
        }
        if (!curr.left && curr.data > newVal){
            curr.left = newNode;
            return this;
        }
        else if (!curr.right && curr.data < newVal){
            curr.right = newNode;
            return this;
        }
        else if(curr.data < newVal && curr.right){
            return this.insertRecursive(newVal, curr = curr.right);
        }
        else if (curr.data > newVal && curr.left){
            return this.insertRecursive(newVal, curr = curr.left);
        }
        return this;
    }

    contains(searchVal) { 
        if (this.isEmpty()){
            return false;
        }
        var current = this.root;
        while (current){
            if (searchVal == current.data){
                return true;
            } else if (searchVal < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    return false;
}


    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if(this.isEmpty() || current === null){
            return false;
        }
        if(searchVal == current.data){
            return true;
        } else if (searchVal < current.data ) {
            // current = current.left;
            return this.containsRecursive(searchVal, current.left);
        } else if (searchVal > current.data ){
            // current =  current.right;
            return this.containsRecursive(searchVal, current.right);
        } else {
        return false; 
        }
    }

    // containsRecursive(searchVal, current = this.root) {
    //     if(this.isEmpty()){
    //         return false;
    //     }
    //     if(searchVal == current.data){
    //         return true; 
    //     }
    //     if(!current.left)
    // }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        if(this.isEmpty()){
            return null;
        } 
        return this.max(startNode) - this.min();
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null;
    }


    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        //if root is not empty
        //keep moving left thru bst
        if(this.isEmpty()) return null;
        let min = current.data;
        current = current.left;
        while(current.left){
            if(current.data < min){
                min = current.data;
            } 
            current = current.left
        } 
        if(current.data < min){
            min = current.data;
        } 
        return min
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root,min = current.data) {
        if(this.isEmpty()) return null;
        if(current.data < min){
            min = current.data;
        } 
        if(current.left == null){
            return min
        }
        return this.minRecursive(current = current.left, min = min)
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if(this.isEmpty()) return null;
        let max = current.data;
        current = current.right;
        while(current.right != null){
            if(current.data > max){
                max = current.data;
            } 
            current = current.right
        } 
        if(current.data > max){
            max = current.data;
        } 
        return max
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root,max = current.data) {
        if(this.isEmpty()) return null;
        if(current.data > max){
            max = current.data;
        } 
        if(current.right == null){
            return max
        }
        return this.maxRecursive(current = current.right, max = max)
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
        return;
    }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
}
  
const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
    /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// console.log(twoLevelTree.min());
// console.log(twoLevelTree.max());
// console.log(twoLevelTree.contains(10));
console.log(twoLevelTree.containsRecursive(10));
console.log(twoLevelTree.containsRecursive(12));
/* threeLevelTree 
        root
        10
    /   \
    5     15
/ \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right = new BSTNode(18);
threeLevelTree.root.right.left = new BSTNode(13);
// console.log(threeLevelTree.min())
// console.log(threeLevelTree.max())
// console.log(threeLevelTree.minRecursive())
// console.log(threeLevelTree.maxRecursive())
console.log(threeLevelTree.range());
/* fullTree
                    root
                <-- 25 -->
            /            \
            15             50
        /    \         /    \
        10     22      35     70
    /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);
