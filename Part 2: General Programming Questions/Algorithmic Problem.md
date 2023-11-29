## ● Implement a function in a language of your choice that checks if a given string is a palindrome.


# python code for that checks if a given string is a palindrome

```def is_palindrome(s):
    updated_string = ''.join(char.lower() for char in s if char.isalnum())

    # Check if the cleaned string is equal to its reverse
    return updated_string == updated_string[::-1]


input_string = input()
result = is_palindrome(input_string)

if result:
    print('The string is a palindrome.')
else:
    print('The string is not a palindrome.')```
