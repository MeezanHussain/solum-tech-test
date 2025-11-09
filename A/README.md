# Problem A: Mystic Waves

## Problem Description
A mage creates a sequence of n energy waves alternating between x and -x, starting with x.
- Example: if n=5 and x=2, the sequence is: 2, -2, 2, -2, 2
- Find the total magical energy (sum of all waves)

## Solution Explanation
The pattern is simple:
- **If n is even**: All pairs cancel out (x + (-x) = 0) → **Result = 0**
- **If n is odd**: One extra x remains → **Result = x**

**Time Complexity**: O(t) - one operation per test case  
**Space Complexity**: O(1) - constant space

## How to Run

### Method 1: Using Input File (Recommended)
1. Create a file `input.txt` with test cases
2. Run: `python main.py < input.txt`

### Method 2: Direct Command Line Input
Run: `python main.py`  
Then paste the input and press Enter, then Ctrl+Z (Windows) or Ctrl+D (Unix)

### Method 3: Inline Input (Unix/Linux/Mac)
```bash
python main.py << EOF
4
1 4
2 5
3 6
4 7
EOF
```

## Example

**Input:**
```
4
1 4
2 5
3 6
4 7
```

**Output:**
```
0
2
0
4
```

**Explanation:**
- Test 1: x=1, n=4 (even) → 1-1+1-1 = 0
- Test 2: x=2, n=5 (odd) → 2-2+2-2+2 = 2
- Test 3: x=3, n=6 (even) → 3-3+3-3+3-3 = 0
- Test 4: x=4, n=7 (odd) → 4-4+4-4+4-4+4 = 4