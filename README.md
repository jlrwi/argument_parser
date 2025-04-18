# argument_parser   
Simple command-line argument parser that accepts a mix of both long-form and single-character short-form command options and returns results in an object   
## Example   
`command targeta targetb -fgh --option1 a b c --option2 d`   
   
Returns:   
```   
{   
  f: [],   
  g: [],   
  h: [],   
  option1: [a, b, c],   
  option2: [d],   
  target: [targeta, targetb]   
}   
```   
