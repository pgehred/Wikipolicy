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

	var v = textNode.nodeValue;
   
	v = v.replace(/\bJiverly Wong\b/g, "the Binghamton loser");
	v = v.replace(/\bJames Holmes\b/g, "the pathetic person of Aurora whose only redeeming quality was inspiring the heroes of #NoNotoriety");
	v = v.replace(/\bMichael McLendon\b/g, "some pathetic guy we forgot even though he proved a total douchebag only 6 years ago");
	v = v.replace(/\bSeung-Hui Cho\b/g, "the alienated loser at VaTech (Go Hokies! Screw that idiot!)");
	v = v.replace(/\bAdam Lanza\b/g, "the mama's boy POS who—other than a rocking good middle name—was a totally worthless loser from the lovely and bucolic Newtown, Connecticut");
	v = v.replace(/\bCharles Whitman\b/g, "some human failure who was so long ago that he's mostly but not entirely forgotten in cool music scene of Austin");
	v = v.replace(/\bEric Harris\b/g, "complete and total failure as a person despite attending the fine high school of Columbine, CO (bet he never climbed a 14er)");
	v = v.replace(/\bDylan Klebold\b/g, "that other complete and total failure as a person who attended Columbine (bus alse never climbed a 14er... loser)");
	v = v.replace(/\bSyed Farook\b/g, "a browbeaten guy whose own family hated him, and now hate him even more due to his cowardly actions in San Bernardino");
	v = v.replace(/\bTashfeen Malik\b/g, "some woman, almost certainly annoying, and definitely a worthless human being #byefelicia (Oh: and America, learn to spell: #SanBernardino has an R)");
	v = v.replace(/\bDylann Roof\b/g, "noted human troll and neo-fascist POS who successfully shamed the lovely Palmetto state to take some good actions that he would have hated (Hey Mississippi, get on board! This is 2015, not 1865) Also... GO CLEMSON TIGERS!)");
	v = v.replace(/\bWade Page\b/g, "racist so stupid he literally didn't know the difference between Muslims and Sikhs (smooth move, ex-lax)");
	v = v.replace(/\bNidal Hasan\b/g, "a coward who couldn't handle doing his duty");
	v = v.replace(/\bAaron Alexis\b/g, "loser who should have just seen a shrink");
	v = v.replace(/\bChris Harper-Mercer\b/g, "another loser mamma's boy who most notably reminded people that RFK have visited there just 10 days before he was killed a different loser almost fifty years earlier");
	v = v.replace(/\bRobert Dear\b/g, "ridiculous moron who seems to have an utterly bizarre idea of what the words 'pro' and 'life' mean when put next to each other");
	v = v.replace(/\bRobert Lewis Dear\b/g, "ridiculous moron who seems to have an utterly bizarre idea of what the words 'pro' and 'life' mean when put next to each other");
	
	textNode.nodeValue = v;
}