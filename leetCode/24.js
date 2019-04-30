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
var swapPairs = function(head) {
    
    var curr = head;
    var next = null;
    var prev = null;
    
    var count = 0;
    
    while(count < 2 && curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }

    if(next != null){
        head.next = swapPairs(next);
    }
    
    return prev;
    
};
