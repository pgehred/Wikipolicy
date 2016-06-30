var names=['John Russell "Rusty" Houser',"John Russell 'Rusty' Houser","Rusty Houser","John Houser","Omar Mateen","Noah Harpham","Jason Dalton ","Jiverly Wong","James Holmes","Michael McLendon","Seung-Hui Cho","Adam Lanza","Charles Whitman","Eric Harris","Dylan Klebold","Syed Farook","Syed Rizwan Farook","Tashfeen Malik","Dylann Roof","Wade Page","Nidal Hasan","Aaron Alexis","Chris Harper-Mercer","Robert Dear","Robert Lewis Dear"];

for(var i=0;i<names.length;i++){
  var regex = new RegExp(names[i],'g');
  console.log(regex);
  if(!window.location.href.includes("www.google.com")){
document.body.innerHTML = document.body.innerHTML.replace(regex, 
     "<a href='https://www.change.org/p/cnn-don-t-name-the-shooter-save-lives'>[anonymous loser's name replaced to respect victims and prevent future shootings #NoNotoriety]</a>");
     }
}
