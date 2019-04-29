/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length == 0){
        return true;
    }
    
    if(s.length == 1){
        return false;
    }
    
    var arr = [];
    
    for(var i=0; i<s.length; i++){
        if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{'){
            arr.push(s.charAt(i));
        }
        
        else if(s.charAt(i) == ')' || s.charAt(i) == ']' || s.charAt(i) == '}'){
            var ch = arr.pop();
            if(s.charAt(i) == ')'){
                if(ch != '('){
                    return false;
                }   
            }
            
            if(s.charAt(i) == '}'){
                if(ch != '{'){
                    return false;
                }   
            }
            
            if(s.charAt(i) == ']'){
                if(ch != '['){
                    return false;
                }   
            }
        }
    }
    
    if(arr.length == 0){
        return true;
    }else{
        return false;
    }
};
