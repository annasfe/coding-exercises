## FORM MANIPULATION JS + DOM

- Place your form labels inside the field (use position Absolute)
- when user clicks on field (field is focused, you can use the focused event listener), label must move on the top right corner of the field (and become smaller)
 
![Screen Shot 2022-03-19 at 19 38 21](https://user-images.githubusercontent.com/29278355/159132128-0d34bf14-570b-457a-b411-2fa1392e52cb.png)
(before)


![Screen Shot 2022-03-19 at 19 38 12](https://user-images.githubusercontent.com/29278355/159132131-034ffea6-00da-4385-b0a6-ef3f7092e1d3.png)
(after clicking)



## SOLUTIONS

#//VIVIANA SOLUTION

let input = document.body.getElementsByTagName('input')[0];
    input.addEventListener('focus', function focus() {
            //document.getElementsByTagName('label')[0].classList.add('is-focused');
            this.previousElementSibling.classList.add('is-focused');
        })
    input.addEventListener('blur', function blur() {
            document.getElementsByTagName('label')[0].classList.remove('is-focused');
        })


#//MARIE-LYSE SOLUTION

 let inputNameBox = document.querySelector("#name")
//we assume our input box has an id="name"

 function reduceTextSizeInLabel() {
    this.previousElementSibling.classList.add('is-focused');
 }
 inputNameBox.addEventListener('focus', reduceTextSizeInLabel)


#//LIZ SOLUTION
//define the listener in the html
<input type="text" onfocus="focusFunction()" onblur="blurFunction()">

and then define the functions in the script, similar to above.



#NOTES:
- class is-focused defined in CSS makes the label text smaller.
- we can use "this" or "target.event" to reference the element that triggered the listener, it works with both, or put the whole path to the label again (but it is longer)