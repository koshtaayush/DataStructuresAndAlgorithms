/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    var dummy = new ListNode(-1);
    
    var tail = dummy;
    
    while(l1 != null && l2 != null){
        if(l1.val <= l2.val){
           tail.next = l1;
            l1 = l1.next;
        }else if(l2.val < l1.val){
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    
    if(l1 == null){
        tail.next = l2;
    }else if(l2 == null){
        tail.next = l1;
    }
    
    return dummy.next;
    
};
