## Ransom Note Problem

### Problem

Design an algorithm to determine if you can build a ransom note from a magazine.

### Approach

So make sure that you follow the same basic process as you did in the previous problem.  So what would that first step be.

* Clarify the problem

Once again, we need to clarify the problem.  This time, because our task is grounded in a domain, we can include considerations that we perhaps would consider in real life.  

For example, is it safe to assume our magazine is larger than our ransom note?  Well, if our magazine is smaller, we know that we cannot construct the note from the magazine.

What other questions can we ask in clarifying the problem.  Well, we might want to consider if we need to use punctuation, do we need to match capital letters with only capital letters.  (No to both questions.)  When we split up our magazine, are we splitting up letters, words, or both.  Let's simplify it by just splitting up letters.  

> If our interviewer told us, we should split by both words and letters, that could be a more complicated problem.  In that case, we would simply by first assuming we are only splitting up by letters, and then move onto cost savings we might get by splitting up by words as well.

Note that not all of these considerations are things that we may need to consider right now, but they may lead to other good questions, and also can help us the further we get into the problem.  

When we feel we have settled in on the problem, it's a good idea to employ a small example.

### Problem Solve

Ok, so imagine we have a magazine, and let's only consider the letters for now.  Our magazine looks like the following:

```javascript
let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

 let note = "give me the ferbie or else"
```

So now we want to see how we could do this problem.  First, we try to solve the problem in our head.  

```text 
How would you solve this problem if we forced you to.  

We give you a magazine of cut up letters...
and ask you to construct a note.

You gotta do it

Ferbies need to be yours

You are obsessed





And without concern for original Ferbie owners

```



Immediately, we may think to help ourselves out, by sorting the data in the magazine.  

```javascript
 let sortedMagazine = ["a", "a", "a", "a", "a", "b", "c", "c", "c",
 "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e",
 "e", "e", "f", "f", "h", "h", "h", "h", "h", "h", "h", "i", "l",
 "l", "l", "m", "m", "m", "n", "n", "n", "o", "o", "o", "o", "o",
 "o", "p", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t",
 "t", "t", "t", "t", "u", "u", "u", "u", "u", "w", "y", "y", "y"]

let note = "hand me the ferbie or else"

```

> We may assume that we do not need to consider if our magazine has enough spaces, as they are easy enough to construct simply by leaving a space where appropriate.

Now our problem seems like we can solve it in our head.  Is there a letter "h", there is.  So remove the "h" from the magazine collection and move to the next letter, "a".  Then "n".  

> You see how relating this to the real world made this easier?  If I gave you a magzine and told you to construct a phrase from the letters, you wouldn't be so intimidated.  So lean on real world problems.  For arrays, think of a list, and for hashes think of putting each value into a bucket that represents the key.

Now there may be a couple of things that you notice as you go through this process.  The first is that, we could potentially optimize this by sorting the letters in our note as well.  That way when we move on from an "a" in our note, we know that we can remove the "a"s in our sortedMagazine as they are no longer needed.  

Another thing that you may notice is that when we go through our magazine, we are again employing...**repeated lookup**.  And therefore as usual we can move from a sorted array and binary search to see if the required letter is in our magazine, to using a hash.  

For this problem, we not only need to store each letter, but also the number of times that the letter occurs.  This way we can know later on if we have enough letter a's, for example, to construct our note.

We call this hash where each key pairs up with a number that represents the related frequency a **histogram**.  It looks like this:

```javascript
let magazineHistorgram = {a: 6, b: 1, c: 3, d: 3, e: 12,
f: 2, h: 7, ...}
```

It looks like we are making some progress.  It's time to estimate the cost of this procedure.  We say that placing these letters in a histogram is O(m) where m is the number of letters in the histogram.

Now that we know that we have our histogram, how do we answer whether we can write our note? Can you solve this on your own?  Problem solve first, and then consider the big O of your procedure?  Then can you translate this into code?  Give it a shot.

	```text
	This is your thinking space.






	Some thinking.


	And some more.

	Ok, here is some thinking.


	```

So we have our magazine histogram.  

```javascript
let note = "hand me the ferbie or else"
let magazineHistorgram = {a: 6, b: 1, c: 3, d: 3, e: 12,
f: 2, h: 7, ...}
```

Then for each letter in the note, we see if that letter is in our magazine histogram.  If it is, we subtract one from the number related to that letter.  So in the note, we start with the "h", then find h in our histogram, and change the remaining number of h's from 7 to 6.

### What's the cost

Ok, now that we have settled in with a seemingly fairly efficient solution, we should ask what is the cost.  

So the cost of placing all of each letter of the magazine in a histogram costs O(m)*O(1) or O(m).  And the second step of checking to see if there are remaining letters in the hash is O(n).  One for each letter in the note.  So the total cost is O(m + n), which reduces to O(2m) because the note is no larger than the magazine, which reduces to O(m).  

### Can we do better?

At this point we have a working solution.  Is there any way to do better than O(m).  O(m) is very good.  It means that it effectively takes us no more time to read the entire magazine than it does to solve our equation.  

But think about how you would do this in real life.  Would you do it more efficiently?

If we gave you this ransom note to construct in real life, you likely would try to find a shortcut to avoid going through every letter in the ransom magazine.  Wouldn't you stop once your note was complete, or would you continue to place all of your magazine letters into a hash.  You would stop.  Ok, so now how would you solve the problem, to make it even more efficient?


```text
This is your thinking space.






Some thinking.


And some more.

Ok, here is some thinking.


```

Instead, you might start with the first letter in the note, "h", and then go place every letter in the magazine into a hash until we reach the letter "h".  Then you would move to the next letter, a, see if that letter is in our hash in O(1) time, and if it is not keep placing letters from the magazine into our hash.  You finish the algorithm if: (1) you reach a letter in the note that does not have a letter in the algorithm, or (2) you have successfully gone through each letter in the note and found a corresponding letter.

Ok, now test this technique with an example.  Try to think through any missing edge cases, and if you feel comfortable, translate this into code.

### Summary

In this section, we saw yet another use for a hash: a histogram.  With a histogram, each key pairs up with a number that represents the related frequency **histogram**.  We also saw another case of repeated lookup.  Finally, after settling in on a solution, we continued to ask, "Can we do better" to optimize our solution.