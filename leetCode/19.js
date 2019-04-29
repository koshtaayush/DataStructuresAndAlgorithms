/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    var start = new ListNode(0);
    var slowPtr = start;
    var fastPtr = start;
    
    start.next = head;
    
    var i=1;
    while(i<=n+1){
        fastPtr = fastPtr.next;
        i++;
    }
    
    while(fastPtr != null){
        prev = slowPtr;
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }
    
    slowPtr.next = slowPtr.next.next;
    
    return start.next
    
};
