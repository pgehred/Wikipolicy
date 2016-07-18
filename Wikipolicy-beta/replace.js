walk(document.body);

function walk(node)  
{
    
    var child, next;

    switch ( node.nodeType )  
    {
        case 1: 
        case 9:  
        case 11: 
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling; 
                walk(child);
                child = next;
            }
            break;

        case 3: 
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var names=["Gavin Eugene Long","Gavin Long","Micah Johnson","Micah Xavier Johnson","Omar Mir Seddique Mateen",'John Russell "Rusty" Houser',"John Russell 'Rusty' Houser","Rusty Houser","John Houser","Omar Mateen","Noah Harpham","Jason Dalton ","Jiverly Wong","James Holmes","Michael McLendon","Seung-Hui Cho","Adam Lanza","Charles Whitman","Eric Harris","Dylan Klebold","Syed Farook","Syed Rizwan Farook","Tashfeen Malik","Dylann Roof","Wade Page","Nidal Hasan","Aaron Alexis","Chris Harper-Mercer","Robert Dear","Robert Lewis Dear"];
    
    
    for(var i=0;i<names.length;i++){
        var v = textNode.nodeValue;
        var regex = new RegExp(names[i],'g');
        v = v.replace(regex, "[anonymous loser's name replaced to respect victims and prevent future shootings #NoNotoriety]");
        textNode.nodeValue = v;
    }
}


