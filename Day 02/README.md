# Variables in Memory
Heap: primitive variables will be stroing the values in stack and the non-primitive values will be storing the values in the Heap. And in heap wherever it will be storing the values will have a unique id using which js can retrieve the value in later time when we need it.

When javascript sees any line of js code it takes that line of code through three phases:
1. Tokenizing
2. Parsing
3. Interpreting
4. code generation(other )

1. tokenizing: this is the first phase that occurs whenever javasacript sees a js code. in this js breaks down all the code into pieces and then verify it wheather it is following the js rules or the guide made for js. basically it checks wheather it is following the ECMAScript standard or not. once it is verified then it is send to another ohase known as Parsing.

2. Parsing: In this phase js creates a tree structyure with all these tokens and this tree is known as AST(Abstract syntax tree)