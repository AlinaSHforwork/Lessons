# This tasks for practices about subject

<p> 🫶 Here is also folder answers (your answer may be different, here a lot of ways to do same things)</p>

# Task 1 🤔
<p>You need to calculate the total cost of the items in your cart.</p>
<strong>Given:</strong> 
            <pre><code>const cartItems = [
    { name: 'Laptop', price: 1200, quantity: 1 },
    { name: 'Mouse', price: 25, quantity: 2 },
    { name: 'Monitor', price: 300, quantity: 1 }
];</code></pre>

# Task 2 💡

<p>A palindrome is a word that reads the same backward and forward (for example, “deified” or “level”). Write a function that checks whether a given string is a palindrome.</p>

<h3>Your task:</h3>

<p> - Create a function <strong>isPalindrome(word)<strong> that takes a string word as an argument.</p>

<h3>Test the function with the following examples:</h3>

<p>- isPalindrome(‘radar’) (should return true)</p>
<p>- isPalindrome(‘hello’) (should return false)</p>

# Task 3 🤓

<p>You need to convert a linear array of objects into a single object, where the keys will be categories and the values will be arrays of objects belonging to that category.</p>

<strong>Given:</strong> 
            <pre><code>const products = [
    { name: ‘T-shirt’, category: ‘Clothing’, price: 25 },
    { name: ‘Sweater’, category: ‘Clothing’, price: 60 },
    { name: ‘Laptop’, category: ‘Electronics’, price: 1000 },
    { name: ‘Phone’, category: ‘Electronics’, price: 500 },
    { name: ‘JS Book’, category: ‘Books’, price: 30 }
];</code></pre>

<h3>Your task:</h3>

<p>Create an object <strong>groupedProducts</strong>, which should have the following structure:</p>
  
  <pre><code>// Expected result:
{
  ‘Clothing’: [ { name: ‘T-shirt’, ... }, { name: ‘Sweater’, ... } ],
  ‘Electronics’: [ { name: ‘Laptop’, ... }, { name: ‘Phone’, ... } ],
  'Books': [ { name: ‘JS book’, ... } ]
}</code></pre>
  
  <p>Print <strong>groupedProducts</strong> to the console.</p>
