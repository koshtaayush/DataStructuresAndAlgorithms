/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(node) {
    
    var prev = null; 
    var current = node; 
    var next = null; 
    while (current != null) { 
        next = current.next; 
        current.next = prev; 
        prev = current; 
        current = next; 
    } 
    
    return prev;  
};
