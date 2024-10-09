from flask import Flask
app= Flask(__name__)





def numerology_number(name):
    # Numerology chart mapping each letter to a number
    numerology_chart = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
        'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
    }
    
    # Convert name to uppercase and remove spaces
    name = name.upper().replace(' ', '')
    
    # Sum the numerology numbers for each letter in the name
    total = sum(numerology_chart[letter] for letter in name if letter in numerology_chart)
    
    # Reduce the total to a single digit
    while total > 9:
        total = sum(int(digit) for digit in str(total))
    
    return total

@app.route("/evaluate/<name1>/<name2>/")
def numerology_compatibility(name1, name2):
    num1 = numerology_number(name1)
    num2 = numerology_number(name2)
    
    
    # Calculate the difference between the two numbers
    difference = abs(num1 - num2)
    
    # Calculate compatibility index (100 - difference * factor)
    compatibility_index = max(0, 100 - difference * 11) 
        
    return compatibility_index.__str__()


if __name__ == "__main__":
   app.run(host='0.0.0.0', port=5000)


    
