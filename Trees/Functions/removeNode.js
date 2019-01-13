// helper method that calls the 
// removeNode with a given data 
remove(data) 
{ 
	// root is re-initialized with 
	// root of a modified tree. 
	this.root = this.removeNode(this.root, data); 
} 

// Method to remove node with a 
// given data 
// it recurrs over the tree to find the 
// data and removes it 
removeNode(node, key) 
{ 
		
	// if the root is null then tree is 
	// empty 
	if(node === null) 
		return null; 

	// if data to be delete is less than 
	// roots data then move to left subtree 
	else if(key < node.data) 
	{ 
		node.left = this.removeNode(node.left, key); 
		return node; 
	} 

	// if data to be delete is greater than 
	// roots data then move to right subtree 
	else if(key > node.data) 
	{ 
		node.right = this.removeNode(node.right, key); 
		return node; 
	} 

	// if data is similar to the root's data 
	// then delete this node 
	else
	{ 
		// deleting node with no children 
		if(node.left === null && node.right === null) 
		{ 
			node = null; 
			return node; 
		} 

		// deleting node with one children 
		if(node.left === null) 
		{ 
			node = node.right; 
			return node; 
		} 
		
		else if(node.right === null) 
		{ 
			node = node.left; 
			return node; 
		} 

		// Deleting node with two children 
		// minumum node of the rigt subtree 
		// is stored in aux 
		var aux = this.findMinNode(node.right); 
		node.data = aux.data; 

		node.right = this.removeNode(node.right, aux.data); 
		return node; 
	} 

} 
